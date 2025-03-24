export const Footer = () => {
  return (
    <footer className="bg-[rgba(10,10,10,0.8)] border-t border-white/10 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Shravan K Subrahmanya. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
