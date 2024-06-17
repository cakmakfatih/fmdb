function ShowDetailModal() {
  return (
    <div className="absolute w-screen h-screen bg-black/[0.74] flex items-center justify-center z-10 invisible">
      <div className="bg-gray-900 border border-gray-500 flex text-white min-w-[400px] min-h-[800px] w-[60%] items-stretch shadow-xl flex-col">
        <header className="flex flex-col items-stretch p-4 border-b border-gray-700 bg-blue-500">
          <h1 className="text-2xl px-2">The Boys</h1>
        </header>
        <div className="flex flex-1">
          <aside className="min-w-[300px] flex flex-col self-stretch border-r border-gray-600">
            <ul className="p-2 flex-1 flex flex-col">
              <li className="py-2 px-4 bg-slate-600 m-2 ring-4 ring-gray-500 rounded-md">
                General
              </li>
              <li className="py-2 px-4 bg-slate-800 m-2 ring-4 ring-gray-500/[.12] rounded-md hover:bg-slate-700 hover:ring-gray-500/[.52] cursor-pointer">
                Reviews
              </li>
              <li className="py-2 px-4 bg-slate-800 m-2 ring-4 ring-gray-500/[.12] rounded-md hover:bg-slate-700 hover:ring-gray-500/[.52] cursor-pointer">
                Actors
              </li>
              <li className="py-2 px-4 bg-slate-800 m-2 ring-4 ring-gray-500/[.12] rounded-md hover:bg-slate-700 hover:ring-gray-500/[.52] cursor-pointer">
                Videos
              </li>
              <li className="py-2 px-4 bg-slate-800 m-2 ring-4 ring-gray-500/[.12] rounded-md hover:bg-slate-700 hover:ring-gray-500/[.52] cursor-pointer">
                Details
              </li>
              <div className="flex-1"></div>
              <li className="py-2 px-4 bg-slate-800 m-2 ring-4 ring-gray-500/[.12] rounded-md hover:bg-slate-700 hover:ring-gray-500/[.52] cursor-pointer">
                Bookmark
              </li>
            </ul>
          </aside>
          <div className="flex items-stretch flex-1 m-2 flex-col">
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
