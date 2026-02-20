from pathlib import Path
path = Path('src/components/Layout.tsx')
text = path.read_text()
marker = "{/* Bottom Bar */}"
if marker not in text:
    raise SystemExit('marker not found')
start = text.index(marker)
div_start = text.index('<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-faith-500 text-sm">', start)
end = text.index('</div>', div_start)
end += len('</div>')
new_block = '''{marker}
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
          </div>'''.replace('{marker}', marker)
path.write_text(text[:start] + new_block + text[end:])
