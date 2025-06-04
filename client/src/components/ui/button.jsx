import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full font-medium transition-all duration-300",
    "focus-ring disabled:pointer-events-none disabled:opacity-50",
    "hover-lift"
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "gradient-primary text-white",
          "shadow-lg hover:shadow-xl hover:shadow-primary/25"
        ].join(" "),
        secondary: [
          "gradient-secondary text-white",
          "shadow-lg hover:shadow-xl hover:shadow-secondary/25"
        ].join(" "),
        accent: [
          "gradient-accent text-white",
          "shadow-lg hover:shadow-xl hover:shadow-accent/25"
        ].join(" "),
        outline: [
          "border-2 border-primary bg-white text-primary",
          "hover:bg-primary-light hover:border-primary-hover hover:text-primary-hover"
        ].join(" "),
        ghost: [
          "text-primary hover:bg-primary-light",
          "hover:text-primary-hover"
        ].join(" "),
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-hover",
      },
      size: {
        default: "h-11 px-6 py-2 text-base",
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-12 px-8 py-3 text-lg",
        icon: "h-11 w-11 p-2",
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
