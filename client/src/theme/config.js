export const theme = {
  colors: {
    primary: '#60A5FA',    // Sky Blue
    secondary: '#FFB86C',  // Soft Yellow
    accent: '#F472B6',     // Accent Pink
    background: {
      primary: '#F0F9FF',  // Light Sky Blue
      white: '#FFFFFF'
    },
    text: {
      primary: '#1F2937',
      secondary: '#4B5563'
    }
  },
  fonts: {
    sans: 'Inter, Poppins, system-ui, -apple-system, sans-serif'
  },
  animations: {
    // Common animation variants
    fadeUpVariant: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.7,
          type: "spring",
          stiffness: 50
        }
      }
    },
    staggerChildren: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2
        }
      }
    },
    cardHover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    buttonHover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  },
  gradients: {
    primary: 'bg-gradient-to-b from-[#F0F9FF] to-white',
    card: 'bg-gradient-to-br from-white to-[#F0F9FF]/30',
    button: 'bg-gradient-to-r from-[#60A5FA] to-[#3B82F6]',
    accent: 'bg-gradient-to-r from-[#F472B6] to-[#EC4899]'
  },
  spacing: {
    section: 'py-24',
    container: 'px-4 mx-auto max-w-7xl'
  },
  borderRadius: {
    sm: 'rounded-lg',
    default: 'rounded-2xl',
    full: 'rounded-full'
  },
  shadows: {
    card: 'shadow-lg hover:shadow-xl transition-shadow duration-300',
    button: 'shadow-md hover:shadow-lg transition-shadow duration-300'
  },
  buttons: {
    base: 'font-medium transition-all duration-300',
    sizes: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    },
    variants: {
      primary: 'bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] text-white hover:from-[#3B82F6] hover:to-[#2563EB]',
      secondary: 'bg-gradient-to-r from-[#FFB86C] to-[#F59E0B] text-white hover:from-[#F59E0B] hover:to-[#D97706]',
      accent: 'bg-gradient-to-r from-[#F472B6] to-[#EC4899] text-white hover:from-[#EC4899] hover:to-[#DB2777]',
      outline: 'border-2 bg-transparent hover:bg-opacity-10'
    }
  },
  cards: {
    base: 'overflow-hidden transition-all duration-300',
    variants: {
      primary: 'bg-white',
      gradient: 'bg-gradient-to-br from-white to-[#F0F9FF]/30'
    }
  }
}; 