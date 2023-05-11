import React, { ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import clsx from 'clsx'

export type TooltipProps = {
  delayDuration?: TooltipPrimitive.TooltipProviderProps['delayDuration']
  asChild?: boolean
  content: ReactNode | string
  children: ReactNode
  className?: string
  arrow?: boolean
} & TooltipPrimitive.TooltipContentProps

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  delayDuration = 100,
  asChild = false,
  className = '',
  sideOffset = 4,
  arrow = true,
  ...props
}) => (
  <TooltipPrimitive.Provider delayDuration={delayDuration}>
    <TooltipPrimitive.Root>
      <TooltipPrimitive.TooltipTrigger asChild={asChild}>{children}</TooltipPrimitive.TooltipTrigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          sideOffset={sideOffset}
          className={clsx(
            'animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 z-50 overflow-hidden rounded-md border border-slate-100 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-md dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400',
            {
              [className]: !!className,
            },
          )}
          {...props}
        >
          {content}
          {!!arrow && <TooltipPrimitive.Arrow className='fill-white' />}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
)

export default Tooltip
