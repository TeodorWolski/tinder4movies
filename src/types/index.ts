export interface Recommendation {
  id: string;
  name: string;
  rating: number;
  description: string;
  image: string;
  url: string;
}

export interface MovieCtx {
  acceptMovie: () => void;
  rejectMovie: () => void;
  downloadedMovies: Recommendation[] | [];
  currentMovie: Recommendation;
}
