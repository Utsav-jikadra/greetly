import * as React from "react"
import { cn } from "../../lib/utils"

const iconVariants = {
  variant: {
    default: "text-text-primary",
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent-dark",
    white: "text-white",
  },
  size: {
    sm: "w-4 h-4",
    default: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
  },
  animation: {
    none: "",
    bounce: "animate-bounce",
    spin: "animate-spin",
    pulse: "animate-pulse-slow",
    float: "animate-float",
  }
}

const IconWrapper = React.forwardRef(({ 
  className,
  variant = "default",
  size = "default",
  animation = "none",
  background = false,
  children,
  ...props 
}, ref) => {
  const bgColors = {
    default: "bg-gray-100",
    primary: "bg-primary-light",
    secondary: "bg-secondary-light",
    accent: "bg-accent-light",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center",
        background && [
          bgColors[variant],
          "rounded-full p-2",
          "transition-all duration-300",
          "hover:scale-110"
        ],
        iconVariants.variant[variant],
        iconVariants.size[size],
        iconVariants.animation[animation],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
IconWrapper.displayName = "IconWrapper"

// Cheerful icon variants
const CheerfulIcon = React.forwardRef(({ 
  icon: Icon,
  variant = "primary",
  size = "xl",
  animation = "float",
  ...props 
}, ref) => {
  return (
    <IconWrapper
      ref={ref}
      variant={variant}
      size={size}
      animation={animation}
      background
      {...props}
    >
      <Icon />
    </IconWrapper>
  )
})
CheerfulIcon.displayName = "CheerfulIcon"

export { IconWrapper, CheerfulIcon } 