import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, ChevronDown, Megaphone } from 'lucide-react';
import rumbiLogo from '@/assets/RumbiLogo.jpeg';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Ministries', 
    href: '/ministries',
    submenu: [
      { name: 'Music Ministry', href: '/ministries/music' },
      { name: "Children's Sanctuary", href: '/ministries/children' },
      { name: 'Youth Haven', href: '/ministries/youth' },
      { name: "Women's Lift", href: '/ministries/women' },
      { name: 'Faith Moments', href: '/ministries/faith' },
    ]
  },
  { name: 'Impact', href: '/impact' },
  { name: 'Contact', href: '/contact' },
];

const launchReminderMessages = [
  {
    title: 'EP Launch 2026',
    body: 'Gospel Time is here. Catch Hukuru Hwenyu, Zvoda Ishe Remix and Hondo Remix.',
    meta: 'UK 7PM / ZIM 8PM',
  },
  {
    title: 'WhatsApp Launch',
    body: 'Join the EP launch moments and celebrate the new worship releases.',
    meta: '8 May 2026',
  },
  {
    title: 'New Music Reminder',
    body: 'Hukuru Hwenyu is leading the EP launch. Tap for details soon.',
    meta: 'EP Launch 2026',
  },
];

const getRandomDelay = (minSeconds: number, maxSeconds: number) =>
  Math.round((Math.random() * (maxSeconds - minSeconds) + minSeconds) * 1000);

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isLaunchReminderVisible, setIsLaunchReminderVisible] = useState(false);
  const [launchReminderIndex, setLaunchReminderIndex] = useState(0);
  const showReminderTimerRef = useRef<number | null>(null);
  const hideReminderTimerRef = useRef<number | null>(null);
  const location = useLocation();
  const isLaunchCountdownPage = location.pathname === '/ep-launch';

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  function showLaunchReminder() {
    setLaunchReminderIndex(Math.floor(Math.random() * launchReminderMessages.length));
    setIsLaunchReminderVisible(true);

    if (hideReminderTimerRef.current) {
      window.clearTimeout(hideReminderTimerRef.current);
    }

    hideReminderTimerRef.current = window.setTimeout(() => {
      setIsLaunchReminderVisible(false);
      scheduleLaunchReminder(18, 42);
    }, 9000);
  }

  function scheduleLaunchReminder(minSeconds = 6, maxSeconds = 16) {
    if (showReminderTimerRef.current) {
      window.clearTimeout(showReminderTimerRef.current);
    }

    showReminderTimerRef.current = window.setTimeout(() => {
      showLaunchReminder();
    }, getRandomDelay(minSeconds, maxSeconds));
  }

  useEffect(() => {
    const clearReminderTimers = () => {
      if (showReminderTimerRef.current) {
        window.clearTimeout(showReminderTimerRef.current);
      }
      if (hideReminderTimerRef.current) {
        window.clearTimeout(hideReminderTimerRef.current);
      }
    };

    if (isLaunchCountdownPage) {
      setIsLaunchReminderVisible(false);
      clearReminderTimers();
      return clearReminderTimers;
    }

    scheduleLaunchReminder();

    return clearReminderTimers;
  }, [isLaunchCountdownPage]);

  const dismissLaunchReminder = () => {
    if (hideReminderTimerRef.current) {
      window.clearTimeout(hideReminderTimerRef.current);
    }
    setIsLaunchReminderVisible(false);

    if (showReminderTimerRef.current) {
      window.clearTimeout(showReminderTimerRef.current);
    }

    scheduleLaunchReminder(24, 56);
  };

  const openLaunchReminderPage = () => {
    if (hideReminderTimerRef.current) {
      window.clearTimeout(hideReminderTimerRef.current);
    }

    setIsLaunchReminderVisible(false);
    scheduleLaunchReminder(32, 72);
  };

  const launchReminder = launchReminderMessages[launchReminderIndex];

  if (isLaunchCountdownPage) {
    return (
      <div className="min-h-screen bg-[#160d13]">
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="sticky top-0 z-50 shadow-xl bg-white lg:bg-faith-900 lg:[background:linear-gradient(90deg,#ffffff_0%,#ffffff_32%,#14061d_55%,#14061d_100%)]"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center justify-center" style={{ width: 240, height: 48 }}>
            <img
              src={rumbiLogo}
              alt="ImpactingLives logo"
              className="h-full w-full object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <>
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        isActive(link.href) 
                          ? 'text-gold-400' 
                          : 'text-white/90 hover:text-gold-400'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-2xl py-2 min-w-[200px] border border-gold-100">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.href}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              location.pathname === sublink.href
                                ? 'bg-gold-50 text-gold-600'
                                : 'text-faith-700 hover:bg-gold-50 hover:text-gold-600'
                            }`}
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className={`relative text-sm font-medium transition-colors group ${
                      isActive(link.href)
                        ? 'text-gold-400'
                        : 'text-white/90 hover:text-gold-400'
                    }`}
                  >
                    {link.name}
                    {isActive(link.href) && (
                      <motion.span 
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-400 rounded-full"
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="bg-gold-500 hover:bg-gold-400 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-gold-500/30 transition-colors"
            >
              Support Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-faith-900"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-faith-800 border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.submenu ? (
                      <>
                        <button
                          onClick={() => setOpenSubmenu(openSubmenu === link.name ? null : link.name)}
                          className={`w-full flex items-center justify-between py-3 font-medium transition-colors ${
                            isActive(link.href) ? 'text-gold-400' : 'text-white hover:text-gold-400'
                          }`}
                        >
                          {link.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === link.name ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {openSubmenu === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 border-l-2 border-gold-500/30 ml-2 space-y-1">
                                {link.submenu.map((sublink) => (
                                  <Link
                                    key={sublink.name}
                                    to={sublink.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block py-2 text-sm transition-colors ${
                                      location.pathname === sublink.href
                                        ? 'text-gold-400'
                                        : 'text-faith-300 hover:text-gold-400'
                                    }`}
                                  >
                                    {sublink.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 font-medium transition-colors ${
                          isActive(link.href) ? 'text-gold-400' : 'text-white hover:text-gold-400'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-gold-500 hover:bg-gold-400 text-white px-6 py-3 rounded-full text-center font-semibold mt-4 transition-colors"
                >
                  Support Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {isLaunchReminderVisible && (
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 22, scale: 0.96 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed bottom-4 left-3 right-3 z-[60] mx-auto max-w-md sm:bottom-5 sm:left-auto sm:right-5"
          >
            <Link
              to="/ep-launch"
              onClick={openLaunchReminderPage}
              className="group flex items-center gap-3 rounded-2xl border px-3.5 py-3 pr-11 shadow-2xl backdrop-blur-xl transition-transform hover:-translate-y-0.5 sm:px-4"
              style={{
                background:
                  'linear-gradient(135deg, rgba(25,135,149,0.96), rgba(78,42,30,0.96))',
                borderColor: 'rgba(246,200,87,0.62)',
                boxShadow: '0 18px 42px rgba(78,42,30,0.28)',
              }}
              aria-label={`${launchReminder.title}: ${launchReminder.body}`}
            >
              <span
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: '#01ff01', color: '#4e2a1e' }}
              >
                <Megaphone className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className="block text-[11px] font-bold uppercase tracking-wider"
                  style={{ color: '#f6c857' }}
                >
                  {launchReminder.meta}
                </span>
                <span className="block truncate text-sm font-bold text-white sm:text-[15px]">
                  {launchReminder.title}
                </span>
                <span className="line-clamp-2 text-xs leading-snug sm:text-sm" style={{ color: '#e1e2e0' }}>
                  {launchReminder.body}
                </span>
              </span>
              <span
                className="hidden text-xs font-bold transition-transform group-hover:translate-x-0.5 sm:block"
                style={{ color: '#6edf58' }}
              >
                View
              </span>
            </Link>
            <button
              type="button"
              onClick={dismissLaunchReminder}
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full transition-colors"
              style={{ backgroundColor: 'rgba(225,226,224,0.16)', color: '#e1e2e0' }}
              aria-label="Close launch reminder"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-faith-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-full bg-gold-500">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="font-display text-xl font-semibold text-white">
                  ImpactingLives
                </span>
              </Link>
              <p className="text-faith-400 max-w-md leading-relaxed">
                A faith-driven community outreach bringing hope, healing, and empowerment 
                to individuals and communities through God's love.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Ministries', href: '/ministries' },
                  { name: 'Our Impact', href: '/impact' },
                  { name: 'Contact', href: '/contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-faith-400 hover:text-gold-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ministries */}
            <div>
              <h4 className="font-semibold text-white mb-4">Ministries</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Music Ministry', href: '/ministries/music' },
                  { name: "Children's Sanctuary", href: '/ministries/children' },
                  { name: 'Youth Haven', href: '/ministries/youth' },
                  { name: "Women's Lift", href: '/ministries/women' },
                  { name: 'Faith Moments', href: '/ministries/faith' },
                ].map((ministry) => (
                  <li key={ministry.name}>
                    <Link 
                      to={ministry.href} 
                      className="text-faith-400 hover:text-gold-400 transition-colors"
                    >
                      {ministry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scripture */}
          <div className="text-center py-8 border-y border-white/10 mb-8">
            <p className="font-display text-xl text-gold-400 italic">
              "Let your light shine before others, that they may see your good deeds 
              and glorify your Father in heaven."
            </p>
            <p className="text-faith-500 mt-2">— Matthew 5:16</p>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-faith-500 text-sm">
            <p>
              © {new Date().getFullYear()} ImpactingLives. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-gold-500" /> for His glory
            </p>
            <a
              href="https://www.kypextech.co.za/"
              target="_blank"
              rel="noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors animate-pulse"
            >
              website by kypextech
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
