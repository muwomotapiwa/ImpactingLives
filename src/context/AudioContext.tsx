import { createContext, useContext, useState, useRef, useCallback, ReactNode } from 'react';

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
    title: 'Amazing Grace (Reimagined)',
    artist: 'ImpactingLives',
    album: 'Songs of Hope',
    duration: '4:32',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80',
    isLatest: true,
  },
  {
    id: '2',
    title: 'Walking in Faith',
    artist: 'ImpactingLives',
    album: 'Songs of Hope',
    duration: '3:45',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80',
  },
  {
    id: '3',
    title: 'His Love Endures',
    artist: 'ImpactingLives',
    album: 'Hymns of Grace',
    duration: '5:12',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80',
  },
  {
    id: '4',
    title: 'Blessed Assurance',
    artist: 'ImpactingLives',
    album: 'Hymns of Grace',
    duration: '4:08',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80',
  },
  {
    id: '5',
    title: 'Joy in the Morning',
    artist: 'ImpactingLives',
    album: 'Songs of Hope',
    duration: '3:56',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    cover: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&q=80',
  },
];
