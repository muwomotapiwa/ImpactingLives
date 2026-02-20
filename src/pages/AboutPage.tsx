import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Star, Users, BookOpen, Award, Target, Eye, Compass } from 'lucide-react';
import founderImg from '@/assets/rumbi_halfbody1.jpeg';

const values = [
  { icon: Heart, title: 'Compassion', desc: 'Leading with love and empathy in all our interactions' },
  { icon: Star, title: 'Faith', desc: 'Grounded in Christian values and guided by prayer' },
  { icon: Users, title: 'Community', desc: 'Building lasting connections that transform lives' },
  { icon: BookOpen, title: 'Growth', desc: 'Empowering through teaching and mentorship' },
];

const timeline = [
  { year: '2014', title: "Women's Prayer Group Founded", desc: "Started as a small gathering of women seeking spiritual support" },
  { year: '2016', title: 'Music Ministry Launched', desc: 'Released first gospel album, reaching hearts through worship' },
  { year: '2018', title: "Children's Sanctuary Established", desc: 'Began supporting vulnerable children in the community' },
  { year: '2020', title: 'Expanded Community Outreach', desc: 'Grew partnerships and increased impact during challenging times' },
  { year: '2022', title: 'Youth Haven Initiative', desc: 'Launched programs for youth empowerment and mental health' },
  { year: '2024', title: 'Continued Growth', desc: 'Expanding reach and deepening community connections' },
];

export function AboutPage() {
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
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Our Story of <span className="text-gradient">Faith & Impact</span>
            </h1>
            <p className="text-faith-300 text-xl leading-relaxed">
              Born from a deep calling to serve, ImpactingLives has grown into a 
              beacon of hope for communities in need. Our journey reflects the 
              transformative power of faith in action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src={founderImg}
                  alt="Founder"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-faith-900/40 to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gold-400/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-faith-400/20 rounded-full blur-2xl" />
              
              {/* Quote card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-gold-500 text-white p-6 rounded-2xl shadow-xl max-w-xs z-20"
              >
                <p className="italic font-display text-lg">
                  "Every life touched is a testimony of God's endless love."
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
                Meet The Founder
              </span>
              <h2 className="font-display text-4xl font-bold text-faith-900 mb-6">
                A Journey of Purpose
              </h2>
              <div className="space-y-4 text-faith-700 leading-relaxed">
                <p>
                  The story of ImpactingLives begins with a personal journey of faith, 
                  transformation, and an unwavering desire to serve others. Our founder's 
                  path through life's challenges became the foundation for a ministry 
                  that would touch countless lives.
                </p>
                <p>
                  From humble beginnings as a small prayer group, the vision expanded 
                  through gospel music ministry, reaching hearts through the power of 
                  worship and praise. This musical journey became a vehicle for 
                  spreading hope and encouragement.
                </p>
                <p>
                  Through years of community service, advocacy, and spiritual leadership, 
                  ImpactingLives has evolved into a comprehensive outreach touching 
                  children, youth, women, and families throughout the community.
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 font-display">10+</div>
                  <div className="text-faith-600 text-sm">Years of Service</div>
                </div>
                <div className="w-px h-12 bg-faith-200" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 font-display">500+</div>
                  <div className="text-faith-600 text-sm">Lives Impacted</div>
                </div>
                <div className="w-px h-12 bg-faith-200" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-600 font-display">5</div>
                  <div className="text-faith-600 text-sm">Ministries</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Purpose */}
      <section className="py-24 bg-gold-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
              What Drives Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-faith-900">
              Our Mission & Vision
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: "To impact lives through faith-driven community outreach, bringing hope, healing, and empowerment to individuals and communities through God's love and practical support.",
                color: 'from-rose-500 to-pink-600',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                desc: 'A transformed community where every individual experiences the love of God, finds purpose, and is empowered to reach their full potential.',
                color: 'from-gold-500 to-amber-600',
              },
              {
                icon: Compass,
                title: 'Our Purpose',
                desc: 'To be a beacon of hope and a catalyst for positive change, addressing spiritual, emotional, and practical needs through comprehensive ministry.',
                color: 'from-blue-500 to-cyan-600',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-faith-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-faith-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
              What We Stand For
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-faith-900 mb-6">
              Our Core <span className="text-gradient">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gold-50 to-faith-50 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-faith-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-faith-600 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-faith-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-gold-400 font-semibold text-sm tracking-wider uppercase mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Milestones of <span className="text-gradient">Impact</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold-500/30" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gold-500 rounded-full -translate-x-1/2 z-10 ring-4 ring-faith-900" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <span className="inline-block text-gold-400 font-bold text-lg mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-faith-400">
                      {item.desc}
                    </p>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
              Recognition
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-faith-900 mb-6">
              Community <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-faith-600 text-lg max-w-2xl mx-auto">
              Our work has been recognized by various organizations and community partners 
              for making a meaningful difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Community Partners', number: '100+' },
              { label: 'Volunteer Hours', number: '5,000+' },
              { label: 'Donations Distributed', number: '$50K+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gold-100 to-gold-50 rounded-2xl p-8 text-center"
              >
                <Award className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <div className="font-display text-4xl font-bold text-faith-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-faith-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-faith-800 to-faith-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-faith-300 text-xl mb-8">
              Join us in making a difference. Together, we can impact more lives 
              and spread hope throughout our community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Get Involved
              </Link>
              <Link
                to="/ministries"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-colors"
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
