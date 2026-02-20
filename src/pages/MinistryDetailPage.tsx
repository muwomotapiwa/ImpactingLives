import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Music, Baby, Users, Heart, BookHeart, ArrowLeft, ArrowRight,
  Play, Pause, Disc3, HandHeart, Brain, Briefcase, BookOpen,
  Flower2, Users2, MessageCircle, Calendar, Star, Quote
} from 'lucide-react';
import { useAudio, tracks } from '../context/AudioContext';

const ministriesData: Record<string, {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  description: string;
  image: string;
  color: string;
  bgLight: string;
  textColor: string;
  content: {
    overview: string;
    features: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string }[];
    gallery: string[];
    testimonial?: { quote: string; name: string; role: string };
  };
}> = {
  music: {
    icon: Music,
    title: 'Music Ministry',
    tagline: 'Lifting Spirits Through Song',
    description: 'Sharing the gospel through inspirational music and worship',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&q=80',
    color: 'from-purple-500 to-indigo-600',
    bgLight: 'bg-purple-50',
    textColor: 'text-purple-600',
    content: {
      overview: 'Our Music Ministry is dedicated to spreading the gospel through the power of song and worship. We believe music is a universal language that transcends barriers and touches the deepest parts of the soul. Through original compositions, worship sessions, and album releases, we reach hearts and draw people closer to God\'s presence.',
      features: [
        { icon: Disc3, title: 'Album Releases', desc: 'Original gospel music that inspires and uplifts' },
        { icon: Play, title: 'Worship Sessions', desc: 'Live worship experiences for the community' },
        { icon: Music, title: 'Music Production', desc: 'Professional recording and music creation' },
        { icon: Star, title: 'Concert Events', desc: 'Special performances and gospel concerts' },
      ],
      gallery: [
        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80',
        'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80',
        'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80',
      ],
      testimonial: {
        quote: 'The music from this ministry has been a constant source of encouragement in my life. Every song speaks directly to my heart.',
        name: 'Grace O.',
        role: 'Community Member',
      },
    },
  },
  children: {
    icon: Baby,
    title: "Children's Sanctuary",
    tagline: 'Nurturing Young Hearts',
    description: 'Providing love, care, and support to vulnerable children',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80',
    color: 'from-rose-500 to-pink-600',
    bgLight: 'bg-rose-50',
    textColor: 'text-rose-600',
    content: {
      overview: 'Children\'s Sanctuary is our dedicated initiative to support vulnerable children in our community. We partner with children\'s homes, coordinate donations, and work to ensure every child experiences love, care, and the opportunity for a better future. Our long-term vision includes establishing a dedicated facility to provide comprehensive care.',
      features: [
        { icon: HandHeart, title: 'Care Support', desc: 'Regular visits and support to children\'s homes' },
        { icon: BookOpen, title: 'Education Aid', desc: 'School supplies and educational support' },
        { icon: Heart, title: 'Basic Needs', desc: 'Food, clothing, and essential items' },
        { icon: Star, title: 'Holiday Programs', desc: 'Special events and celebrations for children' },
      ],
      gallery: [
        'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80',
        'https://images.unsplash.com/photo-1597892657493-6847b9640bac?w=600&q=80',
        'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&q=80',
      ],
      testimonial: {
        quote: 'Thanks to this program, our children receive regular support and know they are loved by a caring community.',
        name: 'Margaret T.',
        role: "Children's Home Director",
      },
    },
  },
  youth: {
    icon: Users,
    title: 'Youth Haven',
    tagline: "Empowering Tomorrow's Leaders",
    description: 'Focusing on youth support, mental health, and empowerment',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1600&q=80',
    color: 'from-blue-500 to-cyan-600',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-600',
    content: {
      overview: 'Youth Haven is our newest initiative focused on supporting young people through the unique challenges they face. We address mental health awareness, unemployment challenges, and provide rehabilitation and empowerment programs. Our goal is to equip youth with the tools, skills, and support they need to thrive.',
      features: [
        { icon: Brain, title: 'Mental Health', desc: 'Awareness programs and support resources' },
        { icon: Briefcase, title: 'Career Support', desc: 'Job readiness and employment assistance' },
        { icon: Users2, title: 'Mentorship', desc: 'Guidance from experienced community leaders' },
        { icon: Heart, title: 'Rehabilitation', desc: 'Support for youth facing challenges' },
      ],
      gallery: [
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
      ],
      testimonial: {
        quote: 'Youth Haven gave me hope and direction when I felt lost. The mentorship program changed my life.',
        name: 'David K.',
        role: 'Program Graduate',
      },
    },
  },
  women: {
    icon: Heart,
    title: "Women's Lift",
    tagline: 'Strengthening Sisters in Faith',
    description: 'Prayer support and empowerment for women',
    image: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?w=1600&q=80',
    color: 'from-gold-500 to-amber-600',
    bgLight: 'bg-gold-50',
    textColor: 'text-gold-600',
    content: {
      overview: 'Women\'s Lift began as a prayer group and has grown into a comprehensive support network for women. We provide emotional and spiritual support, financial assistance to women in need, and create opportunities for community connection and empowerment. Our sisterhood is built on faith, love, and mutual support.',
      features: [
        { icon: MessageCircle, title: 'Prayer Support', desc: 'Regular prayer meetings and spiritual guidance' },
        { icon: Flower2, title: 'Empowerment', desc: 'Programs to build confidence and skills' },
        { icon: HandHeart, title: 'Financial Aid', desc: 'Assistance for women facing hardship' },
        { icon: Calendar, title: 'Fellowship', desc: 'Regular gatherings and community events' },
      ],
      gallery: [
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80',
        'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?w=600&q=80',
      ],
      testimonial: {
        quote: 'Women\'s Lift gave me hope when I had none. The prayer support and community helped me through my darkest days.',
        name: 'Sarah M.',
        role: 'Member',
      },
    },
  },
  faith: {
    icon: BookHeart,
    title: 'Faith Moments',
    tagline: 'Daily Spiritual Nourishment',
    description: 'Spiritual encouragement and faith-based teachings',
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1600&q=80',
    color: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    content: {
      overview: 'Faith Moments provides daily spiritual nourishment through teachings, reflections, and motivational content rooted in Christian values. We share encouragement through various platforms, helping believers grow in their faith and find strength for life\'s journey.',
      features: [
        { icon: BookOpen, title: 'Daily Devotions', desc: 'Regular spiritual content and reflections' },
        { icon: MessageCircle, title: 'Teachings', desc: 'Bible-based messages and lessons' },
        { icon: Star, title: 'Motivation', desc: 'Uplifting content for daily encouragement' },
        { icon: Heart, title: 'Community', desc: 'Online fellowship and discussion' },
      ],
      gallery: [
        'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80',
        'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&q=80',
        'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=600&q=80',
      ],
      testimonial: {
        quote: 'Starting my day with Faith Moments has transformed my spiritual life. The teachings are always relevant and encouraging.',
        name: 'James N.',
        role: 'Follower',
      },
    },
  },
};

const ministryOrder = ['music', 'children', 'youth', 'women', 'faith'];

export function MinistryDetailPage() {
  const { ministryId } = useParams<{ ministryId: string }>();
  const ministry = ministryId ? ministriesData[ministryId] : null;
  const { currentTrack, isPlaying, playTrack } = useAudio();

  if (!ministry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-faith-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-faith-900 mb-4">Ministry Not Found</h1>
          <Link to="/ministries" className="text-gold-600 hover:text-gold-700">
            ← Back to Ministries
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = ministryOrder.indexOf(ministryId || '');
  const prevMinistry = currentIndex > 0 ? ministryOrder[currentIndex - 1] : null;
  const nextMinistry = currentIndex < ministryOrder.length - 1 ? ministryOrder[currentIndex + 1] : null;

  // Get the featured track for music ministry
  const featuredTrack = tracks.find(t => t.isLatest) || tracks[0];
  const isFeaturedPlaying = currentTrack?.id === featuredTrack.id && isPlaying;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${ministry.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-faith-900 via-faith-900/50 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <Link
            to="/ministries"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Ministries
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`inline-flex items-center gap-2 ${ministry.bgLight} px-4 py-2 rounded-full mb-4`}>
              <ministry.icon className={`w-4 h-4 ${ministry.textColor}`} />
              <span className={`text-sm font-medium ${ministry.textColor}`}>
                {ministry.tagline}
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              {ministry.title}
            </h1>
            <p className="text-faith-200 text-xl max-w-2xl">
              {ministry.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl font-bold text-faith-900 mb-6">
                  About This Ministry
                </h2>
                <p className="text-faith-600 text-lg leading-relaxed mb-12">
                  {ministry.content.overview}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-6 mb-12"
              >
                {ministry.content.features.map((feature) => (
                  <div
                    key={feature.title}
                    className={`${ministry.bgLight} rounded-xl p-6`}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${ministry.color} flex items-center justify-center mb-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-faith-900 mb-2">{feature.title}</h3>
                    <p className="text-faith-600 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </motion.div>

              {/* Music Player for Music Ministry */}
              {ministryId === 'music' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 mb-12 text-white"
                >
                  <h3 className="font-display text-2xl font-bold mb-6">Featured Track</h3>
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => playTrack(featuredTrack)}
                      className="w-20 h-20 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                    >
                      {isFeaturedPlaying ? (
                        <Pause className="w-8 h-8" />
                      ) : (
                        <Play className="w-8 h-8 ml-1" />
                      )}
                    </button>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{featuredTrack.title}</h4>
                      <p className="text-white/70">From the album "{featuredTrack.album}"</p>
                      {isFeaturedPlaying && (
                        <div className="flex items-end gap-1 h-6 mt-3">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-1.5 bg-white/80 rounded-full"
                              animate={{ height: [8, 20, 12, 24, 8] }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.1,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Other tracks */}
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <h4 className="font-semibold mb-4">More Tracks</h4>
                    <div className="space-y-2">
                      {tracks.filter(t => !t.isLatest).slice(0, 3).map((track) => {
                        const isThisPlaying = currentTrack?.id === track.id && isPlaying;
                        return (
                          <div
                            key={track.id}
                            onClick={() => playTrack(track)}
                            className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all ${
                              isThisPlaying ? 'bg-white/20' : 'hover:bg-white/10'
                            }`}
                          >
                            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                              <img src={track.cover} alt={track.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`font-medium truncate ${isThisPlaying ? 'text-gold-300' : ''}`}>
                                {track.title}
                              </div>
                              <div className="text-white/60 text-sm">{track.duration}</div>
                            </div>
                            {isThisPlaying ? (
                              <div className="flex items-end gap-0.5 h-4">
                                {[...Array(3)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className="w-1 bg-gold-300 rounded-full"
                                    animate={{ height: [4, 14, 8] }}
                                    transition={{
                                      duration: 0.5,
                                      repeat: Infinity,
                                      delay: i * 0.1,
                                    }}
                                  />
                                ))}
                              </div>
                            ) : (
                              <Play className="w-5 h-5 text-white/60" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl font-bold text-faith-900 mb-6">
                  Gallery
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {ministry.content.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="rounded-xl overflow-hidden aspect-square"
                    >
                      <img
                        src={image}
                        alt={`${ministry.title} gallery ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Testimonial */}
              {ministry.content.testimonial && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gold-50 to-faith-50 rounded-2xl p-8 relative"
                >
                  <div className="absolute -top-4 left-8 w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-faith-700 italic leading-relaxed pt-4 mb-6">
                    "{ministry.content.testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-faith-900">
                      {ministry.content.testimonial.name}
                    </div>
                    <div className="text-sm text-gold-600">
                      {ministry.content.testimonial.role}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Get Involved Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`bg-gradient-to-br ${ministry.color} rounded-2xl p-8 text-white`}
              >
                <h3 className="font-display text-2xl font-bold mb-4">
                  Get Involved
                </h3>
                <p className="text-white/90 mb-6">
                  Join us in making a difference through {ministry.title}. Your support and participation helps us impact more lives.
                </p>
                <Link
                  to="/contact"
                  className="block w-full bg-white text-faith-900 py-3 rounded-full font-semibold text-center hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
              </motion.div>

              {/* Support Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white border-2 border-gold-200 rounded-2xl p-8"
              >
                <Heart className="w-12 h-12 text-gold-500 mb-4" />
                <h3 className="font-display text-xl font-bold text-faith-900 mb-3">
                  Support This Ministry
                </h3>
                <p className="text-faith-600 text-sm mb-6">
                  Your generous donation helps us continue our work and expand our reach.
                </p>
                <Link
                  to="/contact"
                  className="block w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-full font-semibold text-center transition-colors"
                >
                  Donate Now
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-faith-50 border-t border-faith-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {prevMinistry ? (
              <Link
                to={`/ministries/${prevMinistry}`}
                className="flex items-center gap-2 text-faith-600 hover:text-gold-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{ministriesData[prevMinistry].title}</span>
              </Link>
            ) : (
              <div />
            )}
            
            {nextMinistry ? (
              <Link
                to={`/ministries/${nextMinistry}`}
                className="flex items-center gap-2 text-faith-600 hover:text-gold-600 transition-colors"
              >
                <span>{ministriesData[nextMinistry].title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
