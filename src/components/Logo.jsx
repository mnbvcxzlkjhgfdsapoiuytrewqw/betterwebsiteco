import { useTheme } from '../context/ThemeContext'
import logoDark from '../assets/logo-dark.png'
import logoLight from '../assets/logo-light.png'

export default function Logo({ className = 'h-8 w-8' }) {
  const { theme } = useTheme()
  const src = theme === 'dark' ? logoDark : logoLight
  return (
    <img
      src={src}
      alt="Better Website Co."
      className={`${className} object-contain select-none`}
      draggable={false}
    />
  )
}
