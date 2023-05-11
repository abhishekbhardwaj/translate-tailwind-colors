import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { colord, extend } from 'colord'
import cmykPlugin from 'colord/plugins/cmyk'
import hwbPlugin from 'colord/plugins/hwb'
import lchPlugin from 'colord/plugins/lch'

import ColorBox from '@/components/color-box'
import CopyValueToClipboard from '@/components/copy-value-to-clipboard'
import ScrollToTopArrow from '@/components/scroll-to-top-arrow'
import useTailwindColors from '@/hooks/use-tailwind-colors'

extend([cmykPlugin, hwbPlugin, lchPlugin])

const Home: NextPage = () => {
  const { palettes } = useTailwindColors()

  return (
    <div className='container mx-auto my-16 scroll-smooth'>
      <Head>
        <title>Tailwind Colors</title>
      </Head>

      <ScrollToTopArrow anchorId='top' className='' />
      <div className='prose lg:prose-lg max-w-none' id='top'>
        <h1>TailwindCSS Colors</h1>
        <p>
          The goal of this website is to list out all of the <a href='https://tailwindcss.com/'>TailwindCSS</a> colors
          in different CSS color formats. This is currently not very easy to do as{' '}
          <a href='https://tailwindcss.com/docs/customizing-colors'>TailwindCSS docs</a> just lists them out as HEX
          codes.
        </p>
        <p>
          If you have suggestions or improvements, feel free to make a PR at{' '}
          <a href='https://github.com/abhishekbhardwaj/translate-tailwind-colors'>
            https://github.com/abhishekbhardwaj/translate-tailwind-colors
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
        <h3>Navigate:</h3>
        <div className='grid grid-cols-11 gap-4'>
          {Object.keys(palettes).map((col) => {
            const val = palettes[col]
            return (
              <a key={col} href={`#${col}`} className='flex flex-col items-center no-underline group'>
                <ColorBox hex={val[500]} />
                <span className='font-mono text-sm transition-all group-hover:font-bold'>{col}</span>
              </a>
            )
          })}
        </div>
      </div>
      <div className='flex flex-col w-full mt-8 -mx-4 space-y-8'>
        {Object.keys(palettes).map((col) => {
          const val = palettes[col]

          return (
            <div key={col} id={col} className='flex flex-col w-full px-4 py-2 space-y-4'>
              <h2 className='text-xl font-semibold'>{col}</h2>
              <div className='relative overflow-x-auto'>
                <table className='w-full text-sm text-center text-gray-500'>
                  <thead className='text-xs text-gray-700 uppercase rounded-lg bg-gray-50'>
                    <tr>
                      <th scope='col' className='px-6 py-3'>
                        Shade
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        HEX
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        RGB
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        HSL
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        CMYK
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        HWB
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        LCH
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(val).map((shade) => {
                      const shadeVal = val[shade as any]

                      return (
                        // eslint-disable-next-line react/no-unknown-property
                        <tr key={`${col}-${shade}`} className='bg-white border-b border-gray-100'>
                          <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                            <ColorBox hex={shadeVal} />
                            <div className='font-mono'>{shade}</div>
                          </th>
                          <td className='px-6 py-4'>
                            <CopyValueToClipboard value={shadeVal} />
                          </td>
                          <td className='px-6 py-4'>
                            <CopyValueToClipboard value={colord(shadeVal).toRgbString()} />
                          </td>
                          <td className='px-6 py-4'>
                            <CopyValueToClipboard value={colord(shadeVal).toHslString()} />
                          </td>
                          <td className='px-6 py-4'>
                            <CopyValueToClipboard value={colord(shadeVal).toCmykString()} />
                          </td>
                          <td className='px-6 py-4'>
                            <CopyValueToClipboard value={colord(shadeVal).toHwbString()} />
                          </td>
                          <td className='px-6 py-4'>
                            <CopyValueToClipboard value={colord(shadeVal).toLchString()} />
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
