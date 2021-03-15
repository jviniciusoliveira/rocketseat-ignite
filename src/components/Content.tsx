import { MovieCard } from "./MovieCard"

import { TMovie } from './types';

type ContentProps = {
  title: string;
  movies: TMovie[];
}

export function Content({ title, movies }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie: TMovie) => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}