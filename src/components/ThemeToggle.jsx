import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className="inline-flex items-center rounded-full p-1 border"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
    >
      {['light', 'dark'].map((mode) => {
        const active = theme === mode
        return (
          <button
            key={mode}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setTheme(mode)}
            className="relative px-3.5 py-1.5 rounded-full text-xs font-medium capitalize focus-visible:outline-none"
            style={{
              color: active ? 'var(--accent-text)' : 'var(--text-secondary)',
              background: active ? 'var(--accent)' : 'transparent',
              transition: 'background-color 280ms ease, color 280ms ease',
            }}
          >
            {mode}
          </button>
        )
      })}
    </div>
  )
}
