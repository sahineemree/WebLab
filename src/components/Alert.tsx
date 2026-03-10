import type { ReactNode } from "react"
import { cn } from "../lib/cn"

type AlertVariant = "info" | "success" | "warning" | "error"

type AlertProps = {
  title: string
  children: ReactNode
  variant?: AlertVariant
}

const styles: Record<AlertVariant, string> = {
  info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-100",
  success:
    "border-green-200 bg-green-50 text-green-900 dark:border-green-900 dark:bg-green-950 dark:text-green-100",
  warning:
    "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-100",
  error:
    "border-red-200 bg-red-50 text-red-900 dark:border-red-900 dark:bg-red-950 dark:text-red-100",
}

export function Alert({ title, children, variant = "info" }: AlertProps) {
  return (
    <div role="alert" className={cn("rounded-2xl border p-4", styles[variant])}>
      <h3 className="mb-1 font-semibold">{title}</h3>
      <p className="text-sm">{children}</p>
    </div>
  )
}