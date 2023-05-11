import React, { useState } from 'react'
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa'
import clsx from 'clsx'
import copy from 'copy-to-clipboard'

export type CopyToClipboardFromInputProps = {
  value: string
  className?: string
}

const CopyToClipboardFromInput: React.FC<CopyToClipboardFromInputProps> = ({ value, className }) => {
  const [hasCopied, setHasCopied] = useState(false)

  return (
    <div className={clsx('flex w-full space-x-2 relative', className)}>
      <input value={value} type='text' disabled className='w-full h-8 px-2 bg-gray-100 rounded-lg' />
      <button
        type='button'
        className={clsx('flex items-center justify-center w-8 h-8 absolute right-0 rounded-tr-lg rounded-br-lg', {
          'bg-emerald-600 hover:text-white text-white': hasCopied,
          'hover:text-gray-800 hover:bg-gray-200 text-gray-900': !hasCopied,
        })}
        onClick={() => {
          copy(value)
          setHasCopied(true)

          setTimeout(() => {
            setHasCopied(false)
          }, 2000)
        }}
      >
        {hasCopied ? <FaClipboardCheck /> : <FaClipboard />}
      </button>
    </div>
  )
}

export default CopyToClipboardFromInput
