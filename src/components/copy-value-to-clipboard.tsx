import React, { useState } from 'react'
import clsx from 'clsx'
import copy from 'copy-to-clipboard'

import Tooltip from './tooltip'

export type CopyValueToClipboardProps = {
  value: string
  className?: string
}

const CopyValueToClipboard: React.FC<CopyValueToClipboardProps> = ({ value, className }) => {
  const [hasCopied, setHasCopied] = useState(false)

  return (
    <Tooltip content='Click to copy!' asChild>
      <button
        type='button'
        className={clsx(
          'group w-full text-center space-x-2 p-2 relative hover:cursor-pointer transition-all',
          {
            'bg-green-50 rounded': hasCopied,
          },
          className,
        )}
        onClick={() => {
          copy(value)
          setHasCopied(true)

          setTimeout(() => {
            setHasCopied(false)
          }, 2000)
        }}
      >
        <span>{value}</span>
      </button>
    </Tooltip>
  )
}

export default CopyValueToClipboard
