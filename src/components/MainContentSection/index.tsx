import IShow from "../../core/interfaces/IShow";
import { MaxWidthLayout } from "../../layout/MainLayout";

function MainContentItem({ show }: { show: IShow }) {
  return (
    <div className="flex flex-col items-stretch flex-1 bg-black/[0.38] h-[65vh]">
      <div
        className={
          "select-none absolute bg-center bg-no-repeat h-[65vh] w-full overflow-hidden bg-cover"
        }
        style={{
          backgroundImage: `url('${show.backdropPath}')`,
        }}
      ></div>
      <div className="absolute h-[65vh] w-full flex flex-col from-black to-70% bg-gradient-to-t">
        <div className="select-none flex-1"></div>
        <div className="justify-end py-4 flex flex-col items-center px-2 from-black to-100% bg-gradient-to-t">
          <MaxWidthLayout className="flex-col items-stretch pb-4 px-4">
            <h1 className="text-4xl drop-shadow-2xl font-bold px-2 max-w-[700px]">
              {show.title ?? show.name}
            </h1>
            <div className="max-w-[700px] w-[100%] mt-1 opacity-60 px-2">
              <p className="text-base overflow-hidden">{show.overview}</p>
            </div>
            <div className="mt-4 flex">
              {show.actors && (
                <>
                  <span className="p-2 px-4 border border-white/[0.24] hover:-translate-y-2 hover:drop-shadow-2xl hover:bg-slate-800 select-none transition-all duration-200 cursor-pointer rounded-md drop-shadow-xl bg-transparent">
                    Owen Teague
                  </span>
                  <span className="mx-2 p-2 px-4 border border-white/[0.24] hover:-translate-y-2 hover:drop-shadow-2xl hover:bg-slate-800 select-none transition-all duration-200 cursor-pointer rounded-md drop-shadow-xl bg-transparent">
                    Freya Allan
                  </span>
                  <span className="p-2 px-4 border border-white/[0.24] hover:-translate-y-2 hover:drop-shadow-2xl hover:bg-slate-800 select-none transition-all duration-200 cursor-pointer rounded-md drop-shadow-xl bg-transparent">
                    Kevin Durand
                  </span>
                </>
              )}
            </div>
            <div className="mt-4 flex max-w-[700px]">
              <button className="select-none flex-1 flex items-center justify-center text-xl self-start px-2 py-2 bg-red-500 ring-2 ring-transparent hover:ring-red-200 font-normal hover:bg-red-400 transition-all duration-200 active:bg-red-300 rounded-md drop-shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-12 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="drop-shadow-xl tracking-wider">
                  Watch Trailer
                </span>
              </button>
              <button className="select-none flex-1 flex items-center justify-center text-xl self-start px-2 py-2 bg-transparent ring-2 ring-white/[0.24] hover:ring-red-200 font-normal hover:bg-red-400 transition-all duration-200 active:bg-red-300 rounded-md mx-2 drop-shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-12 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
                <span className="drop-shadow-xl tracking-wider">
                  Add to bookmarks
                </span>
              </button>
            </div>
          </MaxWidthLayout>
        </div>
      </div>
    </div>
  );
}

export default function MainContentSection({ shows = [] }: { shows: IShow[] }) {
  return (
    <section className="min-h-[65vh] flex items-stretch text-white border-b border-white/[0.24]">
      {shows.length > 0 && <MainContentItem show={shows[0]} />}
    </section>
  );
}
