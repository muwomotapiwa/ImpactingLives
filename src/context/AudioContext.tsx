import { createContext, useContext, useState, useRef, useCallback, ReactNode } from 'react';
import aneNyashaCover from '@/assets/ane_nyasha.jpeg';
import inTheStormCover from '@/assets/in_the_storm.jpeg';
import zvodaIsheCover from '@/assets/zvoda_ishe.jpeg';
import hondoCover from '@/assets/hondo.jpeg';
import yourNameCover from '@/assets/your_name.jpeg';

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

// Sample tracks data - using royalty-free music samples
export const tracks: Track[] = [
  {
    id: '1',
    title: 'Ane Nyasha',
    artist: 'ImpactingLives',
    album: 'Songs of Hope',
    duration: '4:32',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    cover: aneNyashaCover,
    isLatest: true,
  },
  {
    id: '2',
    title: 'In The Storm',
    artist: 'ImpactingLives',
    album: 'Songs of Hope',
    duration: '3:45',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    cover: inTheStormCover,
  },
  {
    id: '3',
    title: 'Zvoda Ishe',
    artist: 'ImpactingLives',
    album: 'Hymns of Grace',
    duration: '5:12',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    cover: zvodaIsheCover,
  },
  {
    id: '4',
    title: 'Hondo',
    artist: 'ImpactingLives',
    album: 'Hymns of Grace',
    duration: '4:08',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    cover: hondoCover,
  },
  {
    id: '5',
    title: 'Your Name',
    artist: 'ImpactingLives',
    album: 'Songs of Hope',
    duration: '3:56',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    cover: yourNameCover,
  },
];
