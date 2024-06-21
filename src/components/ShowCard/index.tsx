import { connect } from "react-redux";
import IShow, { MediaType } from "../../core/interfaces/IShow";
import { RootState } from "../../store";
import { genresIdsToString } from "../../core/helpers";
import { useMemo, useState } from "react";
import { Genres, MainState } from "../../store/MainStore/MainState";
import { motion, useAnimationControls } from "framer-motion";

function Rating({ rating }: { rating: number }) {
  return (
    <div className="mt-6 bg-purple-500 text-white font-bold self-start px-2 py-2 rounded-tr-lg rounded-br-lg border-t border-r border-b text-xl border-yellow-500 border-8 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 mr-1"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clipRule="evenodd"
        />
      </svg>
      <span className="pr-1">{rating.toFixed(2)}</span>
    </div>
  );
}

function mapStateToProps(state: RootState): MainState {
  return state.main;
}

function ShowCardGenres({ show, genres }: { show: IShow; genres: Genres }) {
  const genresStr: string[] = useMemo(() => {
    const genreIdsStr = genresIdsToString({
      mediaType: show.mediaType,
      genreIds: show.genreIds,
      genres: genres,
    });

    if (genreIdsStr.length > 2) {
      return genreIdsStr.slice(0, 3);
    }

    return genreIdsStr;
  }, [genres]);

  return (
    <div className="bg-transparent flex overflow-x-hidden items-center font-bold mt-2">
      {genresStr.length > 0 ? (
        genresStr.map((genre, idx) => (
          <span
            key={idx}
            title={genre}
            className="transition-colors text-xs py-2 px-2 mx-1 max-w-48 text-center border-2 border-blue-400/[0.42] shadow-xl bg-transparent text-white hover:bg-slate-600 rounded-md truncate"
            style={
              idx === 0
                ? { marginLeft: 0 }
                : idx === genresStr.length - 1
                ? { marginRight: 0 }
                : {}
            }
          >
            {genre}
          </span>
        ))
      ) : (
        <span className="text-xs py-2 px-2 mx-1 max-w-48 text-center border-2 border-blue-400/[0.42] shadow-xl bg-red-500 text-white rounded-md truncate">
          No Genre Found
        </span>
      )}
    </div>
  );
}

function ShowCard({ show, genres }: { show: IShow; genres: Genres }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const controls = useAnimationControls();

  let isHoveringTimeoutId: number;
  let isHoverFinishedTimeoutId: number;

  return (
    <motion.article
      className="flex self-center items-stretch max-w-[300px] min-w-[300px] h-[450px] mr-4 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('${show.posterPath}')`,
      }}
      onHoverStart={(_) => {
        if (isHoverFinishedTimeoutId)
          window.clearTimeout(isHoverFinishedTimeoutId);

        isHoveringTimeoutId = setTimeout(() => {
          setIsHovered(true);
          controls.start("hovered");
        }, 1500);
      }}
      onHoverEnd={(_) => {
        if (isHoveringTimeoutId) window.clearTimeout(isHoveringTimeoutId);

        isHoverFinishedTimeoutId = setTimeout(() => {
          setIsHovered(false);
          controls.start("initial");
        }, 2500);
      }}
      variants={{
        initial: {
          width: "300px",
          maxWidth: "300px",
          marginRight: "16px",
          transition: {
            duration: 0.25,
            ease: "linear",
          },
        },
        hovered: {
          width: "800px",
          maxWidth: "800px",
          marginRight: "520px",
          transition: {
            duration: 0.25,
            ease: "linear",
          },
        },
      }}
      animate={controls}
    >
      <div className="flex flex-col items-stretch self-stretch">
        <div
          className={`flex flex-col flex-1 items-stretch border hover:border-yellow-600 hover:bg-black/[0.54] cursor-pointer transition-colors self-stretch w-[300px]
            ${
              isHovered
                ? " border-yellow-600 bg-black/[0.54]"
                : " border-blue-800"
            }
          `}
        >
          <Rating rating={show.voteAverage} />
          <div className="flex-1 items-center flex flex-col justify-center">
            <motion.button
              className={`bg-gray-800 text-sm rounded-md ring-2 ring-blue-300 px-3 py-1 text-white font-bold hover:underline invisible`}
              animate={controls}
              variants={{
                initial: {
                  opacity: 0,
                  visibility: "hidden",
                  transition: {
                    duration: 0.5,
                    ease: "circOut",
                  },
                },
                hovered: {
                  opacity: 1,
                  visibility: "visible",
                  transition: {
                    duration: 0.5,
                    ease: "circIn",
                  },
                },
              }}
            >
              Learn More
            </motion.button>
          </div>
          <span className="my-2 mx-3 self-start border-gray-800 text-black font-bold px-2 py-[1px] uppercase text-sm rounded-md flex items-center bg-yellow-300 border-4">
            {show.mediaType === MediaType.Movie ? "Movie" : "TV Show"}
          </span>
          <div className="flex-col bg-black/[0.76] border-t border-yellow-600 flex items-stretch py-2 px-2">
            <div className="flex">
              <h1
                className="text-xl font-bold truncate text-white px-2"
                title={show.name ?? show.title}
              >
                {show.name ?? show.title}
              </h1>
            </div>
            <ShowCardGenres show={show} genres={genres} />
          </div>
        </div>
      </div>
      <motion.div
        className="min-w-[0px] border border-l-0 bg-gray-800 w-0 invisible border-yellow-600 flex items-stretch"
        animate={controls}
        variants={{
          initial: {
            opacity: 0,
            visibility: "hidden",
            width: "0px",
            minWidth: "0px",
            transition: {
              duration: 0.25,
              ease: "easeIn",
            },
          },
          hovered: {
            opacity: 100,
            visibility: "visible",
            width: "500px",
            minWidth: "500px",
            transition: {
              duration: 0.25,
              ease: "easeIn",
            },
          },
        }}
      >
        {isHovered && (
          <iframe
            className="flex-1"
            src="https://www.youtube.com/embed/EzFXDvC-EwM?si=dBFthv1aQD2Od0ET&autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </motion.div>
    </motion.article>
  );
}

export default connect(mapStateToProps)(ShowCard);
