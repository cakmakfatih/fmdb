import { useRef } from "react";
import IShow from "../../core/interfaces/IShow";
import { MaxWidthLayout } from "../../layout/MainLayout";
import ShowCard from "../ShowCard";

export default function ListSection({
  title,
  shows = [],
}: {
  title: string;
  shows?: IShow[];
}) {
  const scrollableContentRef = useRef<HTMLDivElement>(null);

  const onPrevClicked = () => {
    const currentScrollLeft = scrollableContentRef.current?.scrollLeft;

    scrollableContentRef.current?.scrollTo({
      left: (currentScrollLeft ?? 0) - (window.innerWidth * 3) / 5,
      behavior: "smooth",
    });
  };

  const onNextClicked = () => {
    const currentScrollLeft = scrollableContentRef.current?.scrollLeft;

    scrollableContentRef.current?.scrollTo({
      left: (currentScrollLeft ?? 0) + (window.innerWidth * 3) / 5,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-4 flex items-center justify-center">
      <MaxWidthLayout className="text-white flex-col items-stretch">
        <header className="border-b border-white/[0.24]">
          <h1 className="text-3xl p-4">{title}</h1>
        </header>
        <div className="flex items-stretch w-full px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-60 text-yellow-400 self-center mr-2 hidden sm:block hover:text-white cursor-pointer transition-colors active:text-yellow-400"
            onClick={onPrevClicked}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <section
            ref={scrollableContentRef}
            className="flex overflow-x-scroll items-center mt-6 scrollbar-hide"
          >
            {shows.map((show, idx) => (
              <ShowCard key={idx} show={show} />
            ))}
          </section>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-60 text-yellow-400 self-center ml-2 hidden sm:block hover:text-white cursor-pointer transition-colors active:text-yellow-400"
            onClick={onNextClicked}
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </MaxWidthLayout>
    </section>
  );
}
