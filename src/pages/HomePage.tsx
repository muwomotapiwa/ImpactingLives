import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { 
  CalendarDays,
  ChevronRight, 
  Clock,
  Play, 
  Pause,
  Sparkles, 
  Music, 
  Baby, 
  Users, 
  Heart, 
  BookHeart,
  Quote,
  ArrowRight,
  Disc3,
  Headphones,
  Radio,
  Send
} from 'lucide-react';
import { useAudio, tracks } from '../context/AudioContext';
import tenYearsOfMinistryImg from '@/assets/10yearsOfMinistry.jpeg';
import yaliweImg from '@/assets/Yaliwe.jpeg';
import tSirikaImg from '@/assets/T Sirika.jpeg';
import sMlamboImg from '@/assets/S Mlambo.jpeg';
import epLaunchImg from '@/assets/EP_Launch_2026.jpeg';

const ministries = [
  {
    id: 'music',
    icon: Music,
    title: 'Music Ministry',
    tagline: 'Lifting Spirits Through Song',
    color: 'from-gold-400 to-faith-500',
    href: '/ministries/music',
  },
  {
    id: 'children',
    icon: Baby,
    title: "Children's Sanctuary",
    tagline: 'Nurturing Young Hearts',
    color: 'from-gold-300 to-gold-500',
    href: '/ministries/children',
  },
  {
    id: 'youth',
    icon: Users,
    title: 'Youth Haven',
    tagline: 'Empowering Tomorrow\'s Leaders',
    color: 'from-faith-400 to-faith-600',
    href: '/ministries/youth',
  },
  {
    id: 'women',
    icon: Heart,
    title: "Women's Lift",
    tagline: 'Strengthening Sisters in Faith',
    color: 'from-gold-500 to-faith-600',
    href: '/ministries/women',
  },
  {
    id: 'faith',
    icon: BookHeart,
    title: 'Faith Moments',
    tagline: 'Daily Spiritual Nourishment',
    color: 'from-faith-500 to-faith-700',
    href: '/ministries/faith',
  },
];

const testimonials = [
  {
    id: 1,
    quote: "Rue Impacting Lives turned my life around and changed how I see things. I hope others taste the good fruit God is growing here.",
    name: "Joseph Chitambure",
    role: "Community Member",
    image: tSirikaImg
  },
  {
    id: 2,
    quote: "Impacting Lives Women's Lift has transformed my life! We pray together, lift each other up, and walk alongside one another through life's ups and downs 🙏. It's a sisterhood where love, support, and prayer are real.",
    name: "Yaliwe",
    role: "Youth Haven Graduate",
    image: yaliweImg
  },
  {
    id: 3,
    quote: "Their music ministry touched my heart and brought me back to faith. Every song is a blessing.",
    name: "S. Mlambo",
    role: "Community Member",
    image: sMlamboImg
  },
];

const epLaunchHighlights = [
  {
    icon: CalendarDays,
    label: 'WhatsApp Launch',
    value: '8 May 2026',
  },
  {
    icon: Clock,
    label: 'Premiere Time',
    value: 'UK 7PM / ZIM 8PM',
  },
  {
    icon: Radio,
    label: 'Produced By',
    value: 'Lyngo Beats',
  },
];

const epLaunchSchedule = [
  {
    title: 'Hukuru Hwenyu',
    feature: 'ft PMP Choir',
    date: '8 May 2026',
  },
  {
    title: 'Hondo Remix',
    feature: 'ft Caroline Muzambi',
    date: '15 May 2026',
  },
  {
    title: 'Zvoda Ishe Remix',
    feature: 'ft Bethen Pasinawako Ngolomi',
    date: '22 May 2026',
  },
];

const epLaunchCountdownUrl = 'https://rueimpactinglives.co.uk/#/ep-launch';

export function HomePage() {
  const { currentTrack, isPlaying, playTrack } = useAudio();
  const epLaunchRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress: epScrollProgress } = useScroll({
    target: epLaunchRef,
    offset: ['start end', 'end start'],
  });
  const epPosterRotateX = useTransform(
    epScrollProgress,
    [0, 0.48, 1],
    prefersReducedMotion ? [0, 0, 0] : [14, 0, -8]
  );
  const epPosterRotateY = useTransform(
    epScrollProgress,
    [0, 0.5, 1],
    prefersReducedMotion ? [0, 0, 0] : [-9, 0, 8]
  );
  const epPosterLift = useTransform(
    epScrollProgress,
    [0, 0.5, 1],
    prefersReducedMotion ? [0, 0, 0] : [36, -10, -36]
  );
  const epPosterScale = useTransform(epScrollProgress, [0, 0.45, 1], [0.94, 1, 0.98]);
  const epCopyLift = useTransform(
    epScrollProgress,
    [0, 0.5, 1],
    prefersReducedMotion ? [0, 0, 0] : [22, 0, -18]
  );
  
  const homeTrackOrder = [
    'ep-2026-hukuru-hwenyu',
    'ep-2026-zvoda-ishe-remix',
    'ep-2026-hondo-remix',
    'zvoda-5',
    'zvoda-1',
    'zvoda-13',
  ];
  const homeMusicTracks = homeTrackOrder
    .map((id) => tracks.find((track) => track.id === id))
    .filter((track): track is (typeof tracks)[number] => Boolean(track));
  const homeFeaturedTrack = homeMusicTracks[0];
  const otherTracks = homeMusicTracks.slice(1);
  const homeFeaturedTrackMeta = homeFeaturedTrack
    ? homeFeaturedTrack.releaseType === 'single'
      ? `Single release • ${homeFeaturedTrack.duration}`
      : `From the album "${homeFeaturedTrack.album}" • ${homeFeaturedTrack.duration}`
    : '';
  const getTrackSubtitle = (track: (typeof tracks)[number]) =>
    track.releaseType === 'single' ? track.artist : track.album;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1920&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-faith-900/80 via-faith-900/70 to-faith-900/90" />
          <div className="absolute inset-0 bg-pattern opacity-30" />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-400/40 rounded-full"
              initial={{
                x: `${Math.random() * 100}%`,
                y: '100%',
              }}
              animate={{
                y: '-10%',
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-gold-200 text-sm font-medium">Faith • Hope • Love</span>
            <Sparkles className="w-4 h-4 text-gold-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Impacting{' '}
            <span className="relative">
              <span className="text-gradient">Lives</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-faith-200 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            A faith-driven community outreach bringing hope, healing, and empowerment 
            to individuals and communities through God's love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/ministries"
              className="group bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl shadow-gold-500/30 transition-all flex items-center gap-2"
            >
              Explore Our Impact
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/ministries/music"
              className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                <Play className="w-4 h-4 ml-0.5" />
              </div>
              Listen to Music
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '500+', label: 'Lives Touched' },
              { number: '10+', label: 'Years of Service' },
              { number: '5', label: 'Active Ministries' },
              { number: '100+', label: 'Community Partners' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gold-400 font-display">{stat.number}</div>
                <div className="text-faith-300 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EP Launch Section */}
      <section
        ref={epLaunchRef}
        className="relative overflow-hidden bg-gradient-to-b from-faith-900 via-faith-950 to-faith-900 py-20 sm:py-24 lg:py-28"
      >
        <div className="absolute inset-0 bg-pattern opacity-10" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(214,27,132,0.18),transparent_36%,rgba(14,141,150,0.16)_64%,transparent)]" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="[perspective:1500px]">
              <motion.div
                style={{
                  rotateX: epPosterRotateX,
                  rotateY: epPosterRotateY,
                  y: epPosterLift,
                  scale: epPosterScale,
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative mx-auto max-w-[560px] transform-gpu"
              >
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold-500/35 via-cyan-400/20 to-faith-700/40 blur-xl" />
                <a
                  href={epLaunchCountdownUrl}
                  aria-label="Open the EP Launch 2026 countdown page"
                  className="relative block overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/10 p-2 shadow-2xl shadow-gold-950/50 backdrop-blur transition-transform hover:scale-[1.015] focus:outline-none focus:ring-4 focus:ring-gold-400/40"
                >
                  <img
                    src={epLaunchImg}
                    alt="EP Launch 2026 announcement for Rumbi Kachembere Muganyura"
                    className="aspect-square w-full rounded-[1.25rem] object-cover"
                  />
                </a>
                <motion.div
                  aria-hidden="true"
                  className="absolute -right-5 top-10 hidden h-24 w-24 rounded-full border border-white/25 bg-faith-950/70 shadow-xl shadow-faith-950/40 md:flex items-center justify-center"
                  animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                >
                  <Disc3 className="h-12 w-12 text-gold-300" />
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              style={{ y: epCopyLift }}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 text-gold-300 font-semibold text-sm tracking-wider uppercase mb-4">
                <Sparkles className="w-4 h-4" />
                EP Announcement
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                EP Launch <span className="text-gradient">2026</span>
              </h2>
              <p className="text-faith-200 text-lg leading-relaxed max-w-2xl mb-8">
                Gospel Time is here. Join Rumbi Kachembere Muganyura for a three-part EP rollout
                filled with worship, powerful collaborations, and music crafted to lift hearts.
              </p>

              <div className="grid gap-3 sm:grid-cols-3 mb-8">
                {epLaunchHighlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + index * 0.08 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur"
                  >
                    <item.icon className="mb-3 h-5 w-5 text-gold-300" />
                    <div className="text-xs font-semibold uppercase tracking-wider text-faith-300">
                      {item.label}
                    </div>
                    <div className="mt-1 text-sm font-bold text-white">{item.value}</div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-3">
                {epLaunchSchedule.map((release, index) => (
                  <motion.div
                    key={release.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={prefersReducedMotion ? undefined : { y: -4, rotateX: 2, rotateY: -2 }}
                    className="grid gap-3 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.09] to-white/[0.04] p-4 shadow-lg shadow-faith-950/20 backdrop-blur sm:grid-cols-[1fr_auto] sm:items-center"
                  >
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-bold text-white">{release.title}</h3>
                      <p className="text-sm text-faith-300">{release.feature}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-gold-200">
                      <CalendarDays className="h-4 w-4" />
                      <span>{release.date}</span>
                      <span className="text-faith-400">/</span>
                      <span>UK 7PM</span>
                      <span>ZIM 8PM</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/ministries/music"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3 font-bold text-white shadow-xl shadow-gold-500/25 transition-colors hover:bg-gold-600"
                >
                  <Music className="h-5 w-5" />
                  Explore the Music
                </Link>
                <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-7 py-3 font-semibold text-faith-100">
                  <Send className="h-5 w-5 text-gold-300" />
                  WhatsApp Launch 8 May
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-24 bg-gradient-to-b from-faith-900 via-faith-800 to-faith-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-pattern opacity-5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-faith-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-gold-400 font-semibold text-sm tracking-wider uppercase mb-4">
              <Headphones className="w-4 h-4" />
              Music Ministry
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Listen to Our <span className="text-gradient">Music</span>
            </h2>
            <p className="text-faith-300 text-lg max-w-2xl mx-auto">
              Experience the power of worship through our gospel music. Each song is 
              crafted to uplift spirits and draw hearts closer to God.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Featured Release */}
            {homeFeaturedTrack && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-full"
              >
                <div className="absolute -top-3 -left-3 bg-gold-500 text-white text-xs font-bold px-4 py-1.5 rounded-full z-10 shadow-lg">
                  ✨ Featured Release
                </div>
                
                <div className="bg-gradient-to-br from-gold-500 via-faith-600 to-faith-700 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                  <div className="absolute top-1/2 right-10 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2" />
                  
                  <div className="relative z-10">
                    {/* Large Album Cover - Centered on top */}
                    <div className="flex justify-center mb-8">
                      <div className="relative group">
                        <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                          <img
                            src={homeFeaturedTrack.cover}
                            alt={homeFeaturedTrack.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        {/* Spinning vinyl effect */}
                        <motion.div
                          className={`absolute -right-6 -bottom-6 w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center shadow-xl ${
                            currentTrack?.id === homeFeaturedTrack.id && isPlaying ? 'animate-spin' : ''
                          }`}
                          style={{ animationDuration: '3s' }}
                        >
                          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full" />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Track Info - Centered below */}
                    <div className="text-center">
                      <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                        {homeFeaturedTrack.title}
                      </h3>
                      <p className="text-white/70 text-lg mb-1">{homeFeaturedTrack.artist}</p>
                      <p className="text-white/50 text-sm mb-8">{homeFeaturedTrackMeta}</p>
                      
                      {/* Play Button */}
                      <button
                        onClick={() => playTrack(homeFeaturedTrack)}
                        className="inline-flex items-center gap-3 bg-white hover:bg-faith-50 text-gold-600 px-10 py-4 rounded-full font-bold shadow-lg transition-all group text-lg"
                      >
                        {currentTrack?.id === homeFeaturedTrack.id && isPlaying ? (
                          <>
                            <Pause className="w-6 h-6" />
                            Pause
                          </>
                        ) : (
                          <>
                            <Play className="w-6 h-6 ml-1" />
                            Play Now
                          </>
                        )}
                      </button>
                      
                      {/* Visualizer */}
                      {currentTrack?.id === homeFeaturedTrack.id && isPlaying && (
                        <div className="flex items-end justify-center gap-1 h-10 mt-8">
                          {[...Array(16)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-1.5 bg-white/80 rounded-full"
                              animate={{ height: [8, 28, 12, 36, 8] }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.06,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Other Tracks */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col h-full"
            >
              <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Disc3 className="w-5 h-5 text-gold-400" />
                More Tracks
              </h3>
              
              <div className="space-y-3">
                {otherTracks.map((track, index) => {
                  const isCurrentTrack = currentTrack?.id === track.id;
                  const isThisPlaying = isCurrentTrack && isPlaying;
                  
                  return (
                    <motion.div
                      key={track.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-5 flex items-center gap-4 group cursor-pointer transition-all border flex-1 ${
                        isThisPlaying ? 'border-gold-500 bg-white/10' : 'border-transparent hover:border-white/20'
                      }`}
                      onClick={() => playTrack(track)}
                    >
                      {/* Album Art */}
                      <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                        <img
                          src={track.cover}
                          alt={track.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity ${
                          isThisPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}>
                          {isThisPlaying ? (
                            <Pause className="w-7 h-7 text-white" />
                          ) : (
                            <Play className="w-7 h-7 text-white ml-0.5" />
                          )}
                        </div>
                      </div>
                      
                      {/* Track Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-semibold text-lg truncate ${isThisPlaying ? 'text-gold-400' : 'text-white'}`}>
                          {track.title}
                        </h4>
                        <p className="text-faith-400 text-sm truncate">{getTrackSubtitle(track)}</p>
                      </div>
                      
                      {/* Duration / Visualizer */}
                      <div className="flex items-center gap-3">
                        {isThisPlaying ? (
                          <div className="flex items-end gap-0.5 h-6">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-1 bg-gold-400 rounded-full"
                                animate={{ height: [4, 20, 8, 24, 4] }}
                                transition={{
                                  duration: 0.6,
                                  repeat: Infinity,
                                  delay: i * 0.1,
                                }}
                              />
                            ))}
                          </div>
                        ) : (
                          <span className="text-faith-500 text-sm font-medium">{track.duration}</span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* View All Music Link */}
              <Link
                to="/ministries/music"
                className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold mt-6 group"
              >
                View All Music
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-24 bg-gradient-to-b from-faith-900 to-faith-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-gold-400 font-semibold text-sm tracking-wider uppercase mb-4">
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Ministries</span>
            </h2>
            <p className="text-faith-300 text-lg max-w-2xl mx-auto">
              Each ministry represents our commitment to serving different aspects of 
              community needs through faith and action.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={ministry.href}
                  className="block bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all group hover:scale-105 hover:shadow-2xl"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ministry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <ministry.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {ministry.title}
                  </h3>
                  <p className="text-faith-400 mb-4">{ministry.tagline}</p>
                  <span className="inline-flex items-center text-gold-400 font-medium text-sm group-hover:text-gold-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/ministries"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              View All Ministries
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-gold-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={tenYearsOfMinistryImg}
                  alt="Community gathering"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-faith-900/60 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gold-100 rounded-full flex items-center justify-center">
                    <Heart className="w-7 h-7 text-gold-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-faith-900">10+</div>
                    <div className="text-faith-600 text-sm">Years of Ministry</div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold-400/20 rounded-full blur-xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-faith-900 mb-6">
                A Journey of <span className="text-gradient">Faith & Purpose</span>
              </h2>
              <p className="text-faith-700 text-lg leading-relaxed mb-6">
                Founded on the principles of Christian love and compassion, ImpactingLives 
                emerged from a personal calling to make a difference. What began as a 
                small prayer group has blossomed into a comprehensive ministry touching 
                multiple areas of community need.
              </p>
              <p className="text-faith-600 leading-relaxed mb-8">
                Our founder's journey through faith, music, and community service has 
                shaped a ministry that addresses the spiritual, emotional, and practical 
                needs of individuals from all walks of life.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-faith-800 hover:bg-faith-900 text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Read Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-faith-900 mb-6">
              Stories of <span className="text-gradient">Transformation</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative bg-gradient-to-br from-gold-50 to-faith-50 rounded-2xl p-8"
              >
                <div className="absolute -top-4 left-8 w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                
                <p className="text-faith-700 italic leading-relaxed mb-6 pt-4">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-200"
                  />
                  <div>
                    <div className="font-semibold text-faith-900">{testimonial.name}</div>
                    <div className="text-sm text-gold-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/impact"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold"
            >
              See More Stories
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gold-500 to-gold-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Your support helps us continue impacting lives and spreading hope 
              throughout our community. Every contribution makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-gold-600 hover:bg-gold-50 px-8 py-4 rounded-full font-bold shadow-lg transition-colors"
              >
                Support Our Work
              </Link>
              <Link
                to="/contact"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
