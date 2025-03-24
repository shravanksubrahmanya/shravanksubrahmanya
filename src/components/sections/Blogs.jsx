import { useEffect, useState } from "react";

export const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shravanksubrahmanya"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();

        const processedBlogs = data.items.map((blog) => {
          const parser = new DOMParser();
          const htmlDoc = parser.parseFromString(blog.description, "text/html");

          let imageUrl = null;
          const imgElem = htmlDoc.querySelector(".medium-feed-image img");
          if (imgElem) {
            imageUrl = imgElem.getAttribute("src");
          }

          let snippet = "";
          const snippetElem = htmlDoc.querySelector(".medium-feed-snippet");
          if (snippetElem) {
            snippet = snippetElem.textContent;
          } else {
            snippet = htmlDoc.body.textContent || "";
          }

          const pubDate = new Date(blog.pubDate).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return {
            title: blog.title,
            link: blog.link,
            thumbnail: imageUrl,
            snippet,
            pubDate,
            creator: blog.creator,
            categories: blog.categories,
          };
        });

        setBlogs(processedBlogs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-400">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <section
      id="blogs"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {blog.thumbnail && (
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <div className="text-sm text-gray-500 mb-2">
                  <span>{blog.pubDate}</span>
                  {blog.creator && <span> | {blog.creator}</span>}
                </div>
                <p className="text-gray-400 mb-4">
                  {blog.snippet.length > 150
                    ? `${blog.snippet.substring(0, 150)}...`
                    : blog.snippet}
                </p>
                {blog.categories && blog.categories.length > 0 && (
                  <div className="mb-4">
                    {blog.categories.map((cat, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-blue-500 text-white text-xs px-2 py-1 mr-2 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
                <span className="text-blue-500 hover:underline">Read more</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
