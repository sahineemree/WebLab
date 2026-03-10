import type { InputHTMLAttributes } from "react"
import { cn } from "../lib/cn"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  hint?: string
  error?: string
}

export function Input({ label, hint, error, id, className, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-slate-900 dark:text-slate-100">
        {label}
      </label>

      <input
        id={id}
        className={cn(
          "w-full rounded-xl border px-4 py-3 text-sm transition-colors outline-none",
          "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400",
          "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
          "dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500",
          error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "",
          className
        )}
        {...props}
      />

      {error ? (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      ) : hint ? (
        <p className="text-sm text-slate-500 dark:text-slate-400">{hint}</p>
      ) : null}
    </div>
  )
}