export interface Cast {
  movie: {
    id: number;
    value: string[];
  }[];
  tvShow: {
    id: number;
    value: string[];
  }[];
}

export interface YoutubeVideo {
  name: string;
  url: string;
}

export interface Videos {
  id: number;
  youtubeVideos: YoutubeVideo[];
}

export interface Genres {
  movie: {
    id: number;
    value: string;
  }[];
  tvShow: {
    id: number;
    value: string;
  }[];
}

export interface ShowVideos {
  movie: Videos[];
  tvShow: Videos[];
}

export interface MainState {
  isHeaderSticky: boolean;
  genres: Genres;
  cast: Cast;
  videos: ShowVideos;
}

export const mainInitialState: MainState = {
  isHeaderSticky: false,
  genres: {
    movie: [],
    tvShow: [],
  },
  cast: {
    movie: [],
    tvShow: [],
  },
  videos: {
    movie: [],
    tvShow: [],
  },
};
