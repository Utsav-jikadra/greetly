import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-text-light hover:bg-primary-hover shadow-primary/25 hover:shadow-primary/50",
        destructive: "bg-error text-text-light hover:bg-error-dark shadow-error/25 hover:shadow-error/50",
        outline: "border-2 border-primary bg-background-card hover:bg-primary hover:text-text-light",
        secondary: "bg-secondary text-text-light hover:bg-secondary-hover shadow-secondary/25 hover:shadow-secondary/50",
        ghost: "hover:bg-background hover:text-text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-accent-dark text-text-light hover:bg-accent-hover shadow-accent/25 hover:shadow-accent/50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
