import { createContext } from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Episode) => void;
  toggleplay: () => void;
  setPlayingSate: (state: boolean) => void;
};

export const PlayerContext = createContext({} as PlayerContextData);