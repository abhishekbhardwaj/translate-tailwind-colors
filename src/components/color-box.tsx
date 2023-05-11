import React from 'react'
import clsx from 'clsx'

export type ColorBoxProps = {
  hex: string
  className?: string
}

const ColorBox: React.FC<ColorBoxProps> = ({ className, hex }) => (
  <div
    className={clsx(
      'flex flex-col items-center justify-center w-full h-8 transition-colors duration-500 rounded shadow-inner',
      className,
    )}
    style={{ backgroundColor: hex }}
  />
)

export default ColorBox
