import { useEffect, useState } from "react";

export const Github = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/shravanksubrahmanya"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data");
        }
        const data = await response.json();
        setGithubData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-400">Loading GitHub profile...</div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <section
      id="github"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-lg w-full bg-white/5 border border-white/10 rounded-lg p-6 text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Github Contributions
        </h2>
        <img
          src={githubData.avatar_url}
          alt={`${githubData.name}'s avatar`}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-blue-500 mb-2">
          {githubData.name}
        </h2>
        <p className="text-gray-400 mb-4">{githubData.bio}</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href={githubData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub Profile
          </a>
          {githubData.twitter_username && (
            <a
              href={`https://twitter.com/${githubData.twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Twitter
            </a>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <span className="block font-bold text-white">
              {githubData.public_repos}
            </span>
            Repositories
          </div>
          <div>
            <span className="block font-bold text-white">
              {githubData.public_gists}
            </span>
            Gists
          </div>
          <div>
            <span className="block font-bold text-white">
              {githubData.followers}
            </span>
            Followers
          </div>
          <div>
            <span className="block font-bold text-white">
              {githubData.following}
            </span>
            Following
          </div>
        </div>
      </div>

      {/* GitHub Stats */}
      <div className="max-w-4xl w-full text-center">
        <h3 className="text-xl font-bold text-blue-500 mb-4">
          GitHub Statistics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GitHub Stats Card */}
          <div>
            <img
              src="https://github-readme-stats.vercel.app/api?username=shravanksubrahmanya&show_icons=true&hide_border=true&count_private=true&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=1c1917"
              alt="GitHub Stats"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* GitHub Streak Stats */}
          <div>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=shravanksubrahmanya&stroke=ffffff&background=1c1917&ring=0891b2&fire=0891b2&currStreakNum=ffffff&currStreakLabel=0891b2&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true"
              alt="GitHub Streak Stats"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
