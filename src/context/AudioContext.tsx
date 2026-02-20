import { createContext, useContext, useState, useRef, useCallback, ReactNode } from 'react';
import aneNyashaCover from '@/assets/ane_nyasha.jpeg';
import inTheStormCover from '@/assets/in_the_storm.jpeg';
import zvodaIsheCover from '@/assets/zvoda_ishe.jpeg';
import hondoCover from '@/assets/hondo.jpeg';
import albumCover from '@/assets/album1.jpeg';
import bannerMusicCover from '@/assets/banner_Music.jpg';
import yourNameCover from '@/assets/your_name.jpeg';

import aneNyashaMp3 from '@/music/Zvoda_Ishe/AneNyasha-2.mp3';
import anerudoMp3 from '@/music/Zvoda_Ishe/ANERUDO.mp3';
interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  src: string;
  cover: string;
  isLatest?: boolean;
}

interface AudioContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  playTrack: (track: Track) => void;
  pauseTrack: () => void;
  togglePlayPause: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}

interface AudioProviderProps {
  children: ReactNode;
}

export function AudioProvider({ children }: AudioProviderProps) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playTrack = useCallback((track: Track) => {
    if (currentTrack?.id === track.id && isPlaying) {
      // If same track is playing, pause it
      audioRef.current?.pause();
      setIsPlaying(false);
    } else if (currentTrack?.id === track.id && !isPlaying) {
      // If same track is paused, resume it
      audioRef.current?.play();
      setIsPlaying(true);
    } else {
      // New track - stop current and play new
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = track.src;
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          setIsPlaying(false);
        });
      }
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  }, [currentTrack, isPlaying]);

  const pauseTrack = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else if (currentTrack) {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  }, [isPlaying, currentTrack]);

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        isPlaying,
        playTrack,
        pauseTrack,
        togglePlayPause,
        audioRef,
      }}
    >
      {children}
      <audio
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
    </AudioContext.Provider>
  );
}

export const tracks: Track[] = [
  {
    id: 'zvoda-1',
    title: 'Ane Nyasha',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '4:32',
    src: aneNyashaMp3,
    cover: aneNyashaCover,
    isLatest: true,
  },
  {
    id: 'zvoda-2',
    title: 'Anerudo',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '3:50',
    src: anerudoMp3,
    cover: albumCover,
  },
  {
    id: 'zvoda-3',
    title: 'Baba Makanaka',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '4:05',
    src: babaMakanakaMp3,
    cover: albumCover,
  },
  {
    id: 'zvoda-4',
    title: 'Hondo',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '4:18',
    src: hondoMp3,
    cover: hondoCover,
  },
  {
    id: 'zvoda-5',
    title: 'In The Storm',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '5:10',
    src: inTheStormMp3,
    cover: inTheStormCover,
  },
  {
    id: 'zvoda-6',
    title: 'Jesu Aripano',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '4:20',
    src: jesuAripanoMp3,
    cover: bannerMusicCover,
  },
  {
    id: 'zvoda-7',
    title: 'Ndinotenda Baba',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '4:12',
    src: ndinotendaBabaMp3,
    cover: yourNameCover,
  },
  {
    id: 'zvoda-8',
    title: 'Tirikukumbira Nyasha',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '5:05',
    src: tiriKukumbiraNyashaMp3,
    cover: zvodaIsheCover,
  },
];
