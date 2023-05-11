import React from 'react'

export type ColorBoxProps = {
  hex: string
}

const ColorBox: React.FC<ColorBoxProps> = ({ hex }) => (
  <div
    className='flex flex-col items-center justify-center w-full h-12 transition-colors duration-500 rounded shadow-inner xl:h-16'
    style={{ backgroundColor: hex }}
  />
)

export default ColorBox
