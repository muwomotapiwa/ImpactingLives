import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Music, Baby, Users, Heart, BookHeart, ArrowRight } from 'lucide-react';

const ministries = [
  {
    id: 'music',
    icon: Music,
    title: 'Music Ministry',
    tagline: 'Lifting Spirits Through Song',
    description: 'Sharing the gospel through inspirational music and worship. Our music ministry produces uplifting gospel songs that touch hearts and draw people closer to God.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    color: 'from-gold-400 to-faith-500',
    bgLight: 'bg-gold-50',
    textColor: 'text-gold-700',
    href: '/ministries/music',
  },
  {
    id: 'children',
    icon: Baby,
    title: "Children's Sanctuary",
    tagline: 'Nurturing Young Hearts',
    description: 'Providing love, care, and support to vulnerable children. We coordinate with children\'s homes and donors to ensure every child experiences the warmth of family.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    color: 'from-gold-300 to-gold-500',
    bgLight: 'bg-gold-50',
    textColor: 'text-gold-700',
    href: '/ministries/children',
  },
  {
    id: 'youth',
    icon: Users,
    title: 'Youth Haven',
    tagline: 'Empowering Tomorrow\'s Leaders',
    description: 'A newly introduced initiative focusing on youth support, mental health awareness, addressing unemployment challenges, and rehabilitation programs.',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80',
    color: 'from-faith-400 to-faith-600',
    bgLight: 'bg-faith-50',
    textColor: 'text-faith-700',
    href: '/ministries/youth',
  },
  {
    id: 'women',
    icon: Heart,
    title: "Women's Lift",
    tagline: 'Strengthening Sisters in Faith',
    description: 'A prayer group and support network providing emotional, spiritual, and financial assistance to women in need. Building community and empowerment.',
    image: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?w=800&q=80',
    color: 'from-gold-500 to-faith-600',
    bgLight: 'bg-gold-50',
    textColor: 'text-gold-700',
    href: '/ministries/women',
  },
  {
    id: 'faith',
    icon: BookHeart,
    title: 'Faith Moments',
    tagline: 'Daily Spiritual Nourishment',
    description: 'Spiritual encouragement content featuring faith-based teachings, reflections, and motivational messaging rooted in Christian values.',
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80',
    color: 'from-faith-500 to-faith-700',
    bgLight: 'bg-faith-50',
    textColor: 'text-faith-700',
    href: '/ministries/faith',
  },
];

export function MinistriesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-faith-900 to-faith-800 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-faith-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block text-gold-400 font-semibold text-sm tracking-wider uppercase mb-4">
              What We Do
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-gradient">Ministries</span>
            </h1>
            <p className="text-faith-300 text-xl leading-relaxed">
              Each ministry represents our commitment to serving different aspects of 
              community needs through faith and action. Explore how we're making a 
              difference in lives every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={ministry.image}
                      alt={ministry.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-faith-900/60 to-transparent" />
                    
                    {/* Overlay content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className={`inline-flex items-center gap-2 ${ministry.bgLight} px-4 py-2 rounded-full`}>
                        <ministry.icon className={`w-4 h-4 ${ministry.textColor}`} />
                        <span className={`text-sm font-medium ${ministry.textColor}`}>
                          {ministry.tagline}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className={`absolute -bottom-6 ${index % 2 === 1 ? '-left-6' : '-right-6'} w-32 h-32 bg-gradient-to-br ${ministry.color} rounded-full opacity-20 blur-2xl`} />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${ministry.color} flex items-center justify-center mb-6`}>
                    <ministry.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-faith-900 mb-4">
                    {ministry.title}
                  </h2>
                  
                  <p className="text-faith-600 text-lg leading-relaxed mb-6">
                    {ministry.description}
                  </p>
                  
                  <Link
                    to={ministry.href}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${ministry.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all group`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
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
              Get Involved
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Whether through volunteering, donating, or participating in our programs, 
              there are many ways to join our mission of impacting lives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-gold-600 hover:bg-gold-50 px-8 py-4 rounded-full font-bold shadow-lg transition-colors"
              >
                Volunteer With Us
              </Link>
              <Link
                to="/contact"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Make a Donation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
