export interface Torrent {
  url: string;
  hash: string;
  quality: string;
  type: string;
  seeds: number;
  peers: number;
  size: string;
  size_bytes: number;
  date_uploaded: string;
  date_uploaded_unix: number;
}

export interface Movie {
  id:number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number,
  rating:9,
  runtime:62,
  genres: string[];
  summary: string[];
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state:string;
  torrents:Array<Torrent>,
  date_uploaded: string;
  date_uploaded_unix: number;
}

export interface MovieWrap {
  movie_count:number;
  limit:number;
  page_number:number;
  movies: Array<Movie>;
}

export type Subset<T> = {
  [K in keyof T]?: T[K];
}
