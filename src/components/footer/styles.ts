import { tv } from 'tailwind-variants'

export const container = tv({
  base: /*tw:*/ 'flex flex-col items-center gap-10 p-11',
  variants: {
    theme: {
      transition: /*tw:*/ 'text-white',
      dark: /*tw:*/ 'text-dark-foreground',
      'blue-room': /*tw:*/ 'text-blue-room',
      train: /*tw:*/ 'text-train',
      nirvana: /*tw:*/ 'text-nirvana',
      waterfall: /*tw:*/ 'text-waterfall',
      light: /*tw:*/ 'text-light-foreground',
      'camping-fire': /*tw:*/ 'text-camping-fire'
    }
  }
})

export const version = tv({
  variants: {
    theme: {
      transition: /*tw:*/ 'text-white/60 hover:text-white active:text-white',
      dark: /*tw:*/ 'text-dark-foreground/60 hover:text-dark-foreground active:text-dark-foreground',
      'blue-room':
        /*tw:*/ 'text-blue-room/60 hover:text-blue-room active:text-blue-room',
      train: /*tw:*/ 'text-train/60 hover:text-train active:text-train',
      nirvana: /*tw:*/ 'text-nirvana/60 hover:text-nirvana active:text-nirvana',
      waterfall:
        /*tw:*/ 'text-waterfall/60 hover:text-waterfall active:text-waterfall',
      light:
        /*tw:*/ 'text-light-foreground/60 hover:text-light-foreground active:text-light-foreground',
      'camping-fire':
        /*tw:*/ 'text-camping-fire/60 hover:text-camping-fire active:text-camping-fire'
    }
  }
})
