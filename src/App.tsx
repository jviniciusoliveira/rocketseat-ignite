import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

import { TGenre, TMovie } from './components/types';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<TGenre[]>([]);

  const [movies, setMovies] = useState<TMovie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<TGenre>({} as TGenre);

  useEffect(() => {
    api.get<TGenre[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<TMovie[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<TGenre>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar genres={genres} selectedGenreId={selectedGenreId} handleClickButton={handleClickButton} />
      <Content title={selectedGenre.title} movies={movies} />
    </div>
  )
}