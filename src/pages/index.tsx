import React from 'react'
import { NextPage } from 'next'
import { colord, extend } from 'colord'
import cmykPlugin from 'colord/plugins/cmyk'
import hwbPlugin from 'colord/plugins/hwb'
import lchPlugin from 'colord/plugins/lch'
import resolveConfig from 'tailwindcss/resolveConfig'

import ColorBox from '@/components/color-box'

import tailwindConfig from '../../tailwind.config'

extend([cmykPlugin, hwbPlugin, lchPlugin])

const fullConfig = resolveConfig(tailwindConfig)

const Home: NextPage = () => (
  <div className='mx-4 my-16'>
    <div className='prose lg:prose-lg max-w-none'>
      <h1>TailwindCSS Colors</h1>
      <p>
        The goal of this website is to list out all of the <a href='https://tailwindcss.com/'>TailwindCSS</a> colors in
        all different CSS color formats. This is currently not possible to do easily and{' '}
        <a href='https://tailwindcss.com/docs/customizing-colors'>TailwindCSS docs</a> just lists them out as HEX codes.
      </p>
      <p>
        If you have suggestions or improvements, feel free to make a PR at{' '}
        <a href='https://github.com/abhishekbhardwaj/tailwind-colors'>
          https://github.com/abhishekbhardwaj/tailwind-colors
        </a>
        .
      </p>
      <h3>For custom colors:</h3>
      <ol>
        <li>
          <a href='https://palettte.app/'>Palettte</a> - A detailed tutorial to use this is available{' '}
          <a href='https://gabrielschneider.de/palettte-app/'>here</a>.
        </li>
        <li>
          <a href='https://colorbox.io/'>ColorBox</a>.
        </li>
        <li>
          <a href='https://www.tints.dev/'>Tints</a> - custom palette generator from one color.
        </li>
      </ol>
    </div>
    <div className='flex flex-col w-full gap-4 mt-8 -mx-4'>
      {Object.keys((fullConfig.theme as any)?.colors || {}).map((col) => {
        const val = (fullConfig.theme as any)?.colors?.[col]

        if (typeof val === 'string') {
          // return (
          //   <div key={col} className='px-4 py-2'>
          //     <h2 className='text-sm font-bold'>{col}</h2>
          //     <div
          //       className='flex flex-col items-center justify-center w-full h-12 transition-colors duration-500 rounded shadow-inner xl:h-16'
          //       style={{ backgroundColor: val }}
          //     />
          //   </div>
          // )
          return null
        }

        return (
          <div key={col} className='px-4 py-2'>
            <h2 className='text-sm font-bold'>{col}</h2>
            <div className='flex w-full gap-2'>
              {Object.keys(val).map((shade) => {
                const shadeVal = val[shade]
                return (
                  <div key={shade} className='flex flex-col flex-1 gap-2 sm:gap-1'>
                    <ColorBox hex={shadeVal} />
                    <div className='flex flex-col justify-between px-1 text-right rotate-90 sm:rotate-0 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center'>
                      <div className='font-mono'>{shade}</div>
                    </div>
                    <div className='flex flex-col space-y-2'>
                      <div>
                        <span className='font-mono font-bold'>HEX</span>
                        <span>{shadeVal}</span>
                      </div>
                      <div>
                        <span className='font-mono font-bold'>RGB</span>
                        <span>{colord(shadeVal).toRgbString()}</span>
                      </div>
                      <div>
                        <span className='font-mono font-bold'>HSL</span>
                        <span>{colord(shadeVal).toHslString()}</span>
                      </div>
                      <div>
                        <span className='font-mono font-bold'>CMYK</span>
                        <span>{colord(shadeVal).toCmykString()}</span>
                      </div>
                      <div>
                        <span className='font-mono font-bold'>HWB</span>
                        <span>{colord(shadeVal).toHwbString()}</span>
                      </div>
                      <div>
                        <span className='font-mono font-bold'>LCH</span>
                        <span>{colord(shadeVal).toLchString()}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  </div>
)

export default Home
