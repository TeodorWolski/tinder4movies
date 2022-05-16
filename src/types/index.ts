export interface Recommendation {
  id: string;
  name: string;
  rating: number;
  description: string;
  image: string;
  url: string;
  swipe?: number;
}

export interface MovieCtx {
  acceptMovie: () => void;
  rejectMovie: () => void;
  handleTouchEnd: () => void;
  downloadedMovies: Recommendation[] | [];
  currentMovie: Recommendation;
  swipe: number;
}
