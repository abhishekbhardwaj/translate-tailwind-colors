import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import clsx from 'clsx'

export type ScrollToTopArrowProps = {
  anchorId: string
  className?: string
}

const ScrollToTopArrow: React.FC<ScrollToTopArrowProps> = ({ anchorId, className }) => (
  <button
    type='button'
    className={clsx('fixed bottom-4 right-4 bg-gray-900 text-white rounded-full p-4 text-2xl', className)}
    onClick={() => {
      const anchor = document.getElementById(anchorId)
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' })
      }
    }}
  >
    <FaArrowUp />
  </button>
)

export default ScrollToTopArrow
