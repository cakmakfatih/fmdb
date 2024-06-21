function ShowDetailModal() {
  return (
    <div className="absolute w-screen h-screen bg-black/[0.74] flex items-center justify-center z-10 invisible">
      <div className="bg-gray-900 border border-gray-500 flex text-white min-w-[400px] w-[90%] min-h-[800px] h-[90%] items-stretch shadow-xl flex-col">
        <header className="flex flex-col items-stretch p-4 border-b border-gray-700 bg-blue-500">
          <h1 className="text-3xl px-2">The Boys</h1>
        </header>
        <div className="flex flex-1">
          <aside className="min-w-[300px] flex flex-col flex-1 self-stretch border-r border-gray-600">
            <div className="p-4 border-b border-gray-600 flex items-stretch flex-col">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6h.008v.008H6V6Z"
                  />
                </svg>
                <h1 className="mr-4 text-xl">Genres</h1>
              </div>
              <div className="mt-2 flex">
                <span className="px-2 py-1 text-sm bg-transparent border rounded-md border-gray-600 font-bold">
                  Action
                </span>
                <span className="ml-2 px-2 py-1 text-sm bg-transparent border rounded-md border-gray-600 font-bold">
                  Science Fiction
                </span>
              </div>
            </div>
            <div className="p-4 border-b border-gray-600 flex items-stretch flex-col">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                <h1 className="mr-2 text-xl">Release Date</h1>
                <span className="px-2 py-1 text-sm bg-transparent border rounded-md border-gray-600 font-bold">
                  2024-06-11
                </span>
              </div>
            </div>
          </aside>
          <div className="flex items-stretch flex-[3] m-2 flex-col">
            <iframe
              className="flex-1"
              src="https://www.youtube.com/embed/KMU0tzLwhbE?si=UlAo_X0XMCWWdM__"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetailModal;
