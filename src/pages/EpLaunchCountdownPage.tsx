import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  ExternalLink,
  Music,
  Radio,
  Send,
  Sparkles,
} from 'lucide-react';
import epLaunchImg from '@/assets/EP_Launch_2026.jpeg';

const whatsAppLaunchLink = 'https://chat.whatsapp.com/EniYClMd4RN75YC5SQAqCS';

type LaunchEvent = {
  title: string;
  feature: string;
  dateLabel: string;
  dayStart: Date;
  dayEnd: Date;
};

type LaunchStatus = 'countdown' | 'launchDay' | 'complete';

const launchEvents: LaunchEvent[] = [
  {
    title: 'Hukuru Hwenyu',
    feature: 'ft PMP Choir',
    dateLabel: '8 May 2026',
    dayStart: new Date('2026-05-08T00:00:00+02:00'),
    dayEnd: new Date('2026-05-09T00:00:00+02:00'),
  },
  {
    title: 'Zvoda Ishe Remix',
    feature: 'ft Bethen Pasinawako Ngolomi',
    dateLabel: '15 May 2026',
    dayStart: new Date('2026-05-15T00:00:00+02:00'),
    dayEnd: new Date('2026-05-16T00:00:00+02:00'),
  },
  {
    title: 'Hondo Remix',
    feature: 'ft Caroline Muzambi',
    dateLabel: '22 May 2026',
    dayStart: new Date('2026-05-22T00:00:00+02:00'),
    dayEnd: new Date('2026-05-23T00:00:00+02:00'),
  },
];

function getLaunchStatus(event: LaunchEvent, now: Date): LaunchStatus {
  const nowTime = now.getTime();

  if (nowTime >= event.dayEnd.getTime()) {
    return 'complete';
  }

  if (nowTime >= event.dayStart.getTime()) {
    return 'launchDay';
  }

  return 'countdown';
}

function getCountdownParts(target: Date, now: Date) {
  const totalSeconds = Math.max(0, Math.floor((target.getTime() - now.getTime()) / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

function formatTimePart(value: number) {
  return String(value).padStart(2, '0');
}

function CountdownUnit({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-0 rounded-xl border border-[#f6c857]/30 bg-[#e1e2e0]/10 px-2 py-2 text-center shadow-lg shadow-[#4e2a1e]/15 sm:px-3 sm:py-3 lg:px-2 lg:py-2 xl:px-3 xl:py-3">
      <div className="font-display text-xl font-black leading-none text-[#01ff01] sm:text-3xl lg:text-2xl xl:text-3xl">
        {formatTimePart(value)}
      </div>
      <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#e1e2e0]/80">
        {label}
      </div>
    </div>
  );
}

export function EpLaunchCountdownPage() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const tickTimer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(tickTimer);
  }, []);

  const launchStates = useMemo(
    () =>
      launchEvents.map((event) => {
        const status = getLaunchStatus(event, now);

        return {
          event,
          status,
          countdown: getCountdownParts(event.dayStart, now),
        };
      }),
    [now]
  );

  const activeLaunches = launchStates.filter((launch) => launch.status !== 'complete');
  const displayedLaunches = launchStates;
  const nextLaunch = activeLaunches[0] ?? launchStates[launchStates.length - 1];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#160d13] text-white lg:h-screen lg:overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(25,135,149,0.36), transparent 34%, rgba(78,42,30,0.72) 68%, rgba(149,148,61,0.28)), radial-gradient(circle at center, rgba(246,200,87,0.18), transparent 58%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            'radial-gradient(#e1e2e0 1px, transparent 1px), radial-gradient(#6edf58 1px, transparent 1px)',
          backgroundPosition: '0 0, 18px 22px',
          backgroundSize: '42px 42px, 76px 76px',
        }}
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#01ff01] to-transparent" />

      <Link
        to="/"
        className="fixed left-4 top-4 z-30 inline-flex items-center gap-2 rounded-full border border-[#f6c857]/45 bg-[#e1e2e0]/12 px-4 py-2 text-sm font-black text-[#e1e2e0] shadow-2xl shadow-[#4e2a1e]/25 backdrop-blur-xl transition-colors hover:border-[#01ff01]/70 hover:text-white sm:left-6 sm:top-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back Home
      </Link>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-20 sm:px-6 lg:h-screen lg:min-h-0 lg:px-8 lg:pb-10 lg:pt-5">
        <section className="grid gap-7 lg:min-h-0 lg:flex-1 lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#01ff01]/15 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#6edf58] ring-1 ring-[#01ff01]/35">
                <Sparkles className="h-4 w-4" />
                EP Launch Control
              </span>
              <h1 className="mt-5 font-display text-5xl font-black leading-none text-white sm:text-6xl lg:mt-4 lg:text-[clamp(3.2rem,5.5vw,5.9rem)]">
                Gospel Time
                <span className="block text-[#f6c857]">Countdown</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#e1e2e0] lg:mt-3 lg:text-base">
                Three launch moments. One EP journey. Join the WhatsApp group now for
                announcements, reminders, and every launch moment at UK 7PM / ZIM 8PM.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:mt-4">
                {[
                  { icon: CalendarDays, label: 'Next signal', value: nextLaunch.event.dateLabel },
                  { icon: Clock, label: 'Launch time', value: 'UK 7PM / ZIM 8PM' },
                  { icon: Radio, label: 'WhatsApp group', value: 'Open now' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#f6c857]/25 bg-[#198795]/25 p-4 backdrop-blur-xl lg:p-3 xl:p-4"
                  >
                    <item.icon className="h-5 w-5 text-[#01ff01]" />
                    <div className="mt-3 text-[10px] font-bold uppercase tracking-wider text-[#9a9baf]">
                      {item.label}
                    </div>
                    <div className="mt-1 text-sm font-black text-white">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-4">
                <a
                  href={whatsAppLaunchLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#01ff01] px-7 py-3 font-black text-[#4e2a1e] shadow-xl shadow-[#01ff01]/20 transition-transform hover:-translate-y-0.5"
                >
                  <Send className="h-5 w-5" />
                  Join WhatsApp Group
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link
                  to="/ministries/music"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#6edf58]/45 bg-[#198795]/35 px-7 py-3 font-bold text-[#e1e2e0] transition-colors hover:bg-[#198795]/55"
                >
                  <Music className="h-5 w-5" />
                  Listen to Music
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotateY: -14, y: 28 }}
              animate={{ opacity: 1, rotateY: 0, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative mx-auto w-full max-w-[560px] [perspective:1500px]"
              style={{ maxWidth: 'min(560px, 54vh)' }}
            >
              <div className="absolute -inset-4 rounded-[2rem] border border-[#01ff01]/25" />
              <div className="absolute -inset-8 rotate-3 rounded-[2.4rem] border border-[#f6c857]/20" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-[#f6c857]/45 bg-[#e1e2e0]/10 p-2 shadow-2xl shadow-[#4e2a1e]/50 backdrop-blur">
                <img
                  src={epLaunchImg}
                  alt="EP Launch 2026 announcement"
                  className="aspect-square w-full rounded-[1.25rem] object-cover"
                />
              </div>
            </motion.div>
        </section>

        <section className="relative z-10 mt-5 lg:-mt-3 xl:-mt-4">
          <div className="grid gap-4 lg:grid-cols-3 lg:gap-4">
            {displayedLaunches.map(({ event, status, countdown }, index) => (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-3xl border border-[#f6c857]/30 bg-[#e1e2e0]/10 p-5 shadow-2xl shadow-[#4e2a1e]/25 backdrop-blur-xl lg:p-4 xl:p-5"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#01ff01] via-[#f6c857] to-[#198795]" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex flex-wrap gap-1 rounded-full bg-[#4e2a1e]/65 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#f6c857]">
                      <span>{event.dateLabel}</span>
                      {status === 'complete' && <span className="text-[#01ff01]">PastEvent!!</span>}
                    </div>
                    <h2 className="mt-4 font-display text-3xl font-black leading-tight text-white lg:mt-3 lg:text-2xl xl:text-3xl">
                      {event.title}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-[#e1e2e0]/80">{event.feature}</p>
                  </div>
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#01ff01] text-[#4e2a1e]">
                    <Radio className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-7 lg:mt-5">
                  {status === 'countdown' && (
                    <div className="grid grid-cols-4 gap-2">
                      <CountdownUnit label="Days" value={countdown.days} />
                      <CountdownUnit label="Hours" value={countdown.hours} />
                      <CountdownUnit label="Mins" value={countdown.minutes} />
                      <CountdownUnit label="Secs" value={countdown.seconds} />
                    </div>
                  )}

                  {status === 'launchDay' && (
                    <div className="rounded-2xl border border-[#01ff01]/45 bg-[#01ff01]/15 p-5 text-center">
                      <div className="text-xs font-black uppercase tracking-[0.28em] text-[#6edf58]">
                        Signal locked
                      </div>
                      <div className="mt-2 font-display text-4xl font-black text-[#01ff01]">
                        LAUNCH DAY!!!
                      </div>
                    </div>
                  )}

                  {status === 'complete' && (
                    <div className="rounded-2xl border border-[#9a9baf]/30 bg-[#9a9baf]/10 p-5 text-center">
                      <div className="text-xs font-black uppercase tracking-[0.28em] text-[#9a9baf]">
                        Transmission complete
                      </div>
                      <div className="mt-2 font-display text-3xl font-black text-white">
                        Launched
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-5 lg:mt-4">
                  <a
                    href={whatsAppLaunchLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-[#01ff01] px-5 py-3 text-sm font-black text-[#4e2a1e] transition-transform hover:-translate-y-0.5"
                  >
                    <Send className="h-4 w-4" />
                    Join the WhatsApp group
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-20 overflow-hidden border-y border-[#f6c857]/30 bg-[#198795]/90 py-2 shadow-2xl shadow-[#4e2a1e]/35 backdrop-blur">
        <motion.div
          className="flex w-max items-center gap-8 whitespace-nowrap text-sm font-black uppercase tracking-[0.18em] text-[#e1e2e0]"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(2)].map((_, index) => (
            <span key={index} className="flex items-center gap-8">
              <span className="text-[#f6c857]">Join The WhatsApp Group</span>
              <span>Tap the WhatsApp button to join the EP Launch 2026 group</span>
              <span className="text-[#01ff01]">Get reminders, updates, and launch moments with the Impacting Lives family</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
