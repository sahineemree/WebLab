import type { ReactNode } from "react"
import { cn } from "../lib/cn"

type CardVariant = "elevated" | "outlined" | "filled"

type CardProps = {
  title?: string
  children: ReactNode
  className?: string
  variant?: CardVariant
}

const variantClasses: Record<CardVariant, string> = {
  elevated:
    "bg-white shadow-lg shadow-slate-200/60 dark:bg-slate-900 dark:shadow-black/20",
  outlined:
    "bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-700",
  filled:
    "bg-slate-100 border border-slate-200 dark:bg-slate-800 dark:border-slate-700",
}

export function Card({
  title,
  children,
  className,
  variant = "elevated",
}: CardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl p-6 transition-colors",
        variantClasses[variant],
        className
      )}
    >
      {title ? <h3 className="mb-3 text-xl font-semibold">{title}</h3> : null}
      <div className="space-y-3 text-slate-700 dark:text-slate-300">{children}</div>
    </article>
  )
}