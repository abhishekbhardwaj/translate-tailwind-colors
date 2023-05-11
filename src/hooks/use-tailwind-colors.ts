import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)
const { colors } = fullConfig.theme as any

const useTailwindColors = () => {
  const singleColors: Record<string, string> = Object.keys(colors).reduce((acc, color) => {
    if (typeof colors[color] === 'string') {
      return {
        ...acc,
        [color]: colors[color],
      }
    }

    return acc
  }, {})

  const palettes: Record<
    string,
    {
      [key: number]: string
    }
  > = Object.keys(colors).reduce((acc, color) => {
    if (typeof colors[color] !== 'string') {
      return {
        ...acc,
        [color]: colors[color],
      }
    }

    return acc
  }, {})

  return {
    colors,
    singleColors,
    palettes,
  }
}

export default useTailwindColors
