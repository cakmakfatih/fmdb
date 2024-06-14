import { A11y, Autoplay } from "swiper/modules";
import IShow from "../../core/interfaces/IShow";
import { Swiper, SwiperSlide } from "swiper/react";
import MainContentItem from "./MainContentItem";

export default function MainContentSection({ shows = [] }: { shows: IShow[] }) {
  return (
    <section className="min-h-[65vh] flex flex-col items-stretch text-white border-b border-white/[0.24]">
      {shows.length > 0 && (
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          className="h-[65vh] w-full"
          direction="horizontal"
          loop={true}
          autoplay={{
            delay: 6000,
          }}
          modules={[Autoplay, A11y]}
        >
          {shows.map((show, idx) => (
            <SwiperSlide key={idx}>
              <MainContentItem show={show} animDelay={idx * 3} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
