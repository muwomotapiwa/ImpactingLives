import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Heart, 
  Facebook, 
  Instagram, 
  Youtube,
  Apple,
  Music2,
  Disc3,
  CheckCircle,
  Clock,
  MessageCircle
} from 'lucide-react';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [donationAmount, setDonationAmount] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-faith-900 to-faith-800 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-faith-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block text-gold-400 font-semibold text-sm tracking-wider uppercase mb-4">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Connect With <span className="text-gradient">Us</span>
            </h1>
            <p className="text-faith-300 text-xl leading-relaxed">
              Whether you want to volunteer, donate, or simply connect with our community, 
              we'd love to hear from you. Reach out and let's make an impact together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl font-bold text-faith-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-faith-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gold-50 border border-gold-200 rounded-2xl p-12 text-center"
                >
                  <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-faith-900 mb-2">Message Sent!</h3>
                  <p className="text-faith-700">
                    Thank you for reaching out. We'll get back to you soon. God bless!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-faith-700 font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        className="w-full border border-faith-200 rounded-xl px-4 py-3 text-faith-900 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-faith-700 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full border border-faith-200 rounded-xl px-4 py-3 text-faith-900 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-faith-700 font-medium mb-2">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      className="w-full border border-faith-200 rounded-xl px-4 py-3 text-faith-900 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition-all"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>

                  <div>
                    <label className="block text-faith-700 font-medium mb-2">Subject</label>
                    <select
                      required
                      className="w-full border border-faith-200 rounded-xl px-4 py-3 text-faith-900 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="volunteer">I want to volunteer</option>
                      <option value="donate">Make a donation</option>
                      <option value="prayer">Prayer request</option>
                      <option value="partnership">Partnership inquiry</option>
                      <option value="music">Music Ministry inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-faith-700 font-medium mb-2">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full border border-faith-200 rounded-xl px-4 py-3 text-faith-900 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition-all resize-none"
                      placeholder="Share your thoughts with us..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-gold-500/30 transition-all"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid gap-6">
                <div className="bg-gold-50 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-faith-900 mb-1">Email Us</h3>
                    <a href="mailto:info@impactinglives.org" className="text-gold-600 hover:text-gold-700 transition-colors">
                      info@impactinglives.org
                    </a>
                    <p className="text-faith-500 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="bg-faith-50 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-14 h-14 bg-faith-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-faith-900 mb-1">Call Us</h3>
                    <a href="tel:+1234567890" className="text-faith-700 hover:text-faith-800 transition-colors">
                      +1 (234) 567-890
                    </a>
                    <p className="text-faith-500 text-sm mt-1">Mon-Fri, 9am-5pm</p>
                  </div>
                </div>

                <div className="bg-gold-50 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-14 h-14 bg-faith-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-faith-900 mb-1">Visit Us</h3>
                    <p className="text-faith-700">Community Center, City Name</p>
                    <p className="text-faith-500 text-sm mt-1">Sunday services at 10am</p>
                  </div>
                </div>

                <div className="bg-faith-50 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-faith-900 mb-1">Office Hours</h3>
                    <p className="text-gold-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-faith-500 text-sm mt-1">Sunday: After service</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-faith-900 rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-white mb-6">
                  Follow Us
                </h3>
                <p className="text-faith-300 mb-6">
                  Stay connected with our community through social media.
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, label: 'Facebook', color: 'hover:bg-gold-500', href: 'https://www.facebook.com/rumbikachembere/' },
                    { icon: Instagram, label: 'Instagram', color: 'hover:bg-faith-600', href: 'https://www.instagram.com/rumbikachembere' },
                    { icon: Youtube, label: 'YouTube', color: 'hover:bg-gold-600', href: 'https://www.youtube.com/@rumbikachembere' },
                    { icon: Music2, label: 'TikTok', color: 'hover:bg-faith-700', href: 'https://www.tiktok.com/rumbidzaikachembere' },
                    { icon: Disc3, label: 'Spotify', color: 'hover:bg-emerald-500', href: 'https://open.spotify.com/artist/4P2JZmJInzPJuyAMSocqrj' },
                    { icon: Apple, label: 'Apple Music', color: 'hover:bg-gray-300/70', href: 'https://music.apple.com/gb/artist/rumbi-kachembere/1741061176' },
                  ].map(({ icon: Icon, label, color, href }) => (
                    <a
                      key={label}
                      href={href}
                      className={`w-14 h-14 bg-white/10 ${color} rounded-xl flex items-center justify-center transition-colors group`}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-24 bg-gradient-to-r from-gold-500 to-gold-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Support Our Mission
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
              Your generous donation helps us continue our work in the community. 
              Every contribution makes a difference in someone's life.
            </p>

            <div className="bg-white rounded-3xl p-8 max-w-xl mx-auto">
              <h3 className="font-display text-2xl font-bold text-faith-900 mb-6">
                Make a Donation
              </h3>
              
              <div className="grid grid-cols-4 gap-3 mb-6">
                {['$10', '$25', '$50', '$100'].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setDonationAmount(amount)}
                    className={`py-3 rounded-xl font-semibold transition-all ${
                      donationAmount === amount
                        ? 'bg-gold-500 text-white'
                        : 'bg-gold-100 text-gold-700 hover:bg-gold-200'
                    }`}
                  >
                    {amount}
                  </button>
                ))}
              </div>
              
              <div className="mb-6">
                <label className="block text-faith-600 text-sm mb-2">Or enter custom amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-faith-400">$</span>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full border border-faith-200 rounded-xl pl-8 pr-4 py-3 text-faith-900 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20"
                    onChange={(e) => setDonationAmount(e.target.value ? `$${e.target.value}` : null)}
                  />
                </div>
              </div>
              
              <button className="w-full bg-gold-500 hover:bg-gold-600 text-white py-4 rounded-xl font-bold shadow-lg transition-colors">
                Donate {donationAmount || 'Now'}
              </button>
              
              <p className="text-faith-500 text-sm mt-4">
                All donations are secure and encrypted. Thank you for your generosity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-faith-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
              FAQ
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-faith-900">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'How can I volunteer with ImpactingLives?',
                a: 'We welcome volunteers in all our ministries. Simply fill out the contact form above or reach out via email, and we\'ll connect you with opportunities that match your interests and skills.'
              },
              {
                q: 'Where do my donations go?',
                a: 'All donations are used to support our various ministries including children\'s programs, youth initiatives, women\'s support, and community outreach. We maintain full transparency in our use of funds.'
              },
              {
                q: 'How can I request prayer support?',
                a: 'You can submit prayer requests through our contact form. Select "Prayer request" as the subject, and our prayer team will lift you up in prayer.'
              },
              {
                q: 'How can I listen to your music?',
                a: 'Our music is available on major streaming platforms. Visit our Music Ministry page for links and more information about our albums and singles.'
              },
              {
                q: 'Do you offer partnership opportunities?',
                a: 'Yes! We partner with churches, organizations, and businesses that share our vision. Contact us to discuss partnership opportunities.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-semibold text-faith-900 mb-2">{faq.q}</h3>
                <p className="text-faith-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
