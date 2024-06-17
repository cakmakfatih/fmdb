function ShowDetailModal() {
  return (
    <div className="absolute w-screen h-screen bg-black/[0.54] z-10 overflow-hidden flex items-center justify-center">
      <div className="bg-gray-900 flex text-white min-w-[400px] min-h-[300px] w-[60%] h-[60%] items-stretch">
        <iframe
          className="flex-1"
          src="https://www.youtube.com/embed/5yEG6GhoJBs?si=8K2m-v9Xkvza8Uq7"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
}

export default ShowDetailModal;
