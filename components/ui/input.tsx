import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full lg:w-1/2 rounded-md   px-3 py-2 text-sm text-white file:border-0  file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ",
          className
        )}
        style={{ border: '1px solid #8750F7', background: 'transparent' }} 
        ref={ref}
        autoComplete="off"
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
