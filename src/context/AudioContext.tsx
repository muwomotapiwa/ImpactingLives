import { createContext, useContext, useState, useRef, useCallback, ReactNode } from 'react';
import aneNyashaCover from '@/assets/ane_nyasha.jpeg';
import ndokumbirawoNyashaCover from '@/assets/Ndokumbirawo Nyasha.jpeg';
import inTheStormCover from '@/assets/in_the_storm.jpeg';
import yourNameCover from '@/assets/your_name.jpeg';
import zvodaIsheCover from '@/assets/zvoda_ishe.jpeg';

import aneNyashaMp3 from '@/music/Zvoda_Ishe/AneNyasha-2.mp3';
import anerudoMp3 from '@/music/Zvoda_Ishe/ANERUDO.mp3';
import babaMakanakaMp3 from '@/music/Zvoda_Ishe/BABA MAKANAKA.mp3';
import hondoMp3 from '@/music/Zvoda_Ishe/HONDO.mp3';
import inTheStormMp3 from '@/music/Zvoda_Ishe/In THE STORM.mp3';
import jesuAripanoMp3 from '@/music/Zvoda_Ishe/JESU ARIPANO.mp3';
import ndinotendaBabaMpeg from '@/music/Zvoda_Ishe/NDINOTENDA BABA.mpeg?url';
import tiriKukumbiraNyashaMp3 from '@/music/Zvoda_Ishe/TIRIKUKUMBIRA NYASHA.mp3';
import yourNameMpeg from '@/music/Your Name.mpeg?url';
import vaneRudoMpeg from '@/music/Zvoda_Ishe/VANE RUDO.mpeg?url';
import zitaRenyuMpeg from '@/music/Zvoda_Ishe/ZITA RENYU.mpeg?url';
import zvodaIsheMpeg from '@/music/Zvoda_Ishe/ZVODA ISHE.mpeg?url';
import zvoseZvanguMpeg from '@/music/Zvoda_Ishe/ZVOSE ZVANGU.mpeg?url';

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  releaseType?: 'album' | 'single';
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
    album: 'Ane Nyasha',
    releaseType: 'single',
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
    cover: zvodaIsheCover,
  },
  {
    id: 'zvoda-3',
    title: 'Baba Makanaka',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '4:36',
    src: babaMakanakaMp3,
    cover: zvodaIsheCover,
  },
  {
    id: 'zvoda-4',
    title: 'Hondo',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '5:25',
    src: hondoMp3,
    cover: zvodaIsheCover,
  },
  {
    id: 'zvoda-5',
    title: 'In The Storm',
    artist: 'Zvoda Ishe',
    album: 'In The Storm',
    releaseType: 'single',
    duration: '5:10',
    src: inTheStormMp3,
    cover: inTheStormCover,
  },
  {
    id: 'zvoda-6',
    title: 'Jesu Aripano',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '6:34',
    src: jesuAripanoMp3,
    cover: zvodaIsheCover,
  },
  {
    id: 'zvoda-7',
    title: 'Ndinotenda Baba',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '5:05',
    src: ndinotendaBabaMpeg,
    cover: zvodaIsheCover,
  },
  {
    id: 'zvoda-8',
    title: 'Ndokumbirawo Nyasha',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '5:05',
    src: tiriKukumbiraNyashaMp3,
    cover: ndokumbirawoNyashaCover,
  },
  {
    id: 'zvoda-9',
    title: 'Vane Rudo',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '4:45',
    src: vaneRudoMpeg,
    cover: zvodaIsheCover,
  },
  {
    id: 'zvoda-10',
    title: 'Zita Renyu',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '6:11',
    src: zitaRenyuMpeg,
    cover: zvodaIsheCover,
  },
  {
    id: 'zvoda-11',
    title: 'Zvoda Ishe',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '5:45',
    src: zvodaIsheMpeg,
    cover: zvodaIsheCover,
  },
  {
    id: 'zvoda-12',
    title: 'Zvose Zvangu',
    artist: 'Zvoda Ishe',
    album: 'Zvoda Ishe',
    duration: '5:24',
    src: zvoseZvanguMpeg,
    cover: zvodaIsheCover,
  },
  {
    id: 'zvoda-13',
    title: 'Your Name',
    artist: 'Zvoda Ishe',
    album: 'Your Name',
    releaseType: 'single',
    duration: '6:00',
    src: yourNameMpeg,
    cover: yourNameCover,
  },
];
