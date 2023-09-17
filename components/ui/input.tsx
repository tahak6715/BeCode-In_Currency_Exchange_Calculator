

import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onChange, value , ...props}, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-[260px] ml-[200px] rounded-md border border-slate-200 border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500  focus:outline-none shadow-xl font-bold ",
          className
        )}
        ref={ref}
        value={value}
        onChange={onChange}
        
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
