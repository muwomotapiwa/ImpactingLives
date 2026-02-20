import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Quote, Heart, Users, Home, Sparkles, Star, ArrowRight } from 'lucide-react';
import tSirikaImg from '@/assets/T Sirika.jpeg';
import nMunengwaImg from '@/assets/N Munengwa.jpeg';
import prideImg from '@/assets/Pride.jpeg';
import yaliweImg from '@/assets/Yaliwe.jpeg';

const impactStats = [
  { icon: Users, number: '500+', label: 'Lives Directly Impacted', color: 'from-gold-400 to-faith-500' },
  { icon: Home, number: '50+', label: 'Children Supported', color: 'from-gold-300 to-gold-500' },
  { icon: Heart, number: '200+', label: 'Women Empowered', color: 'from-gold-500 to-faith-600' },
  { icon: Sparkles, number: '1000+', label: 'Prayer Moments Shared', color: 'from-faith-500 to-faith-700' },
];

const testimonials = [
  {
    id: 1,
    quote: "Rue Impacting Lives turned my life around and changed how I see things. I hope others taste the good fruit God is growing here.",
    name: "T. Sirika",
    role: "Community Member",
    image: tSirikaImg
  },
  {
    id: 2,
    quote: "The youth program changed my life. I found purpose, mentorship, and a community that believes in me. Now I'm helping others on the same journey.",
    name: "Yaliwe",
    role: "Youth Haven Graduate",
    image: yaliweImg
  },
  {
    id: 3,
    quote: "Their music ministry touched my heart and brought me back to faith. Every song is a blessing that reminds me of God's love.",
    name: "Grace O.",
    role: "Community Member",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80"
  },
  {
    id: 4,
    quote: "Thanks to Children's Sanctuary, our children receive the love and support they deserve. They've become part of our family.",
    name: "Margaret T.",
    role: "Children's Home Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80"
  },
  {
    id: 5,
    quote: "The financial assistance during my time of need was a true blessing. More than money, they gave me hope and a community to lean on.",
    name: "N. Munengwa",
    role: "Community Member",
    image: nMunengwaImg
  },
  {
    id: 6,
    quote: "ImpactingLives stepped in with school fees and supplies when I needed them most, keeping me in class and focused on my future.",
    name: "Pride",
    role: "Student",
    image: prideImg
  },
];

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', caption: 'Children\'s outreach program' },
  { url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80', caption: 'Community worship event' },
  { url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80', caption: 'Youth mentorship session' },
  { url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80', caption: 'Team collaboration' },
  { url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80', caption: 'Community gathering' },
  { url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80', caption: 'Youth empowerment' },
  { url: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?w=600&q=80', caption: 'Women\'s fellowship' },
  { url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80', caption: 'Music ministry performance' },
];

export function ImpactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-faith-900 to-faith-800 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block text-gold-400 font-semibold text-sm tracking-wider uppercase mb-4">
              Our Impact
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Transforming <span className="text-gradient">Communities</span>
            </h1>
            <p className="text-faith-300 text-xl leading-relaxed">
              Every life touched is a testimony of God's love working through our community. 
              Here are the stories and numbers behind our mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
              By The Numbers
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-faith-900">
              Our Reach & <span className="text-gradient">Results</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="font-display text-4xl md:text-5xl font-bold text-faith-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-faith-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Stats */}
      <section className="py-16 bg-gold-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '100+', label: 'Community Partners' },
              { number: '5,000+', label: 'Volunteer Hours' },
              { number: '10+', label: 'Years of Service' },
              { number: '5', label: 'Active Ministries' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="font-display text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-gold-50 to-white">
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
            <p className="text-faith-600 text-lg max-w-2xl mx-auto">
              Real stories from real people whose lives have been touched by our ministry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
              >
                <div className="absolute -top-4 left-8 w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                
                <div className="flex items-center gap-1 mb-4 pt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                
                <p className="text-faith-700 italic leading-relaxed mb-6">
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
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
              Gallery
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-faith-900 mb-6">
              Moments of <span className="text-gradient">Impact</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-xl group ${
                  index === 0 || index === 5 ? 'row-span-2' : ''
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index === 0 || index === 5 ? 'h-full min-h-[300px]' : 'h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-faith-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <Heart className="w-4 h-4 text-gold-400" />
                    <span>{image.caption}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-24 bg-faith-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-gold-400 font-semibold text-sm tracking-wider uppercase mb-4">
                Looking Ahead
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Our Vision for <span className="text-gradient">Tomorrow</span>
              </h2>
              <p className="text-faith-300 text-lg leading-relaxed mb-6">
                We dream of expanding our reach and deepening our impact. Our future 
                plans include establishing a dedicated children's facility, expanding 
                youth empowerment programs, and reaching more communities with the 
                message of hope.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Establish a dedicated Children\'s Home facility',
                  'Expand Youth Haven to more communities',
                  'Launch new music albums and concert tours',
                  'Increase Women\'s Lift support network',
                  'Create Faith Moments app for daily devotions',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-faith-200"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
              <div className="bg-gradient-to-br from-gold-500/20 to-faith-500/20 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="font-display text-2xl font-bold text-faith-900 mb-6">
                    Help Us Grow
                  </h3>
                  <p className="text-faith-600 mb-6">
                    Your support enables us to dream bigger and reach further. 
                    Together, we can make these visions a reality.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gold-50 rounded-xl">
                      <span className="text-faith-700">Children's Home Fund</span>
                      <span className="font-bold text-gold-600">65% raised</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-faith-50 rounded-xl">
                      <span className="text-faith-700">Youth Programs</span>
                      <span className="font-bold text-faith-600">45% raised</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gold-50 rounded-xl">
                      <span className="text-faith-700">Music Ministry Tour</span>
                      <span className="font-bold text-gold-600">30% raised</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="block w-full bg-faith-800 hover:bg-faith-900 text-white py-4 rounded-xl font-semibold text-center mt-6 transition-colors"
                  >
                    Make a Donation
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Be Part of Our Story
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Every contribution, every prayer, every act of service adds to our 
              collective impact. Join us in changing lives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-gold-600 hover:bg-gold-50 px-8 py-4 rounded-full font-bold shadow-lg transition-colors"
              >
                Get Involved
              </Link>
              <Link
                to="/ministries"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Explore Ministries
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
