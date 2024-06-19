export function FooterComponent() {
  return (
    <footer className="mt-4 bg-black border-t border-gray-700 text-white flex flex-col items-center p-6 text-center">
      <h1 className="text-2xl">Created by Fatih Cakmak @ 2024</h1>
      <span className="text-sm">
        It's an open source project that you can clone and run yourself, here is
        the{" "}
        <a
          className="underline opacity-75 hover:opacity-100"
          target="_blank"
          href="https://github.com/cakmakfatih/fmdb"
        >
          GitHub URL
        </a>
      </span>
      <div className="h-8"></div>
      <p className="text-sm text-white/[0.64]">
        Data used in the project is coming from the TMDB API, special thanks to
        the all TMDB team. You can check out{" "}
        <a
          className="underline opacity-75 hover:opacity-100 hover:text-white"
          target="_blank"
          href="https://www.themoviedb.org/"
        >
          TMDB API
        </a>{" "}
        from here.
      </p>
    </footer>
  );
}
