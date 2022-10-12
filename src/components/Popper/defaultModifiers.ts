import { Modifier } from '@popperjs/core'

export default [
  {
    name: 'computeStyles',
    options: {
      roundOffsets: ({ x, y }: { x: number; y: number }) => ({
        x: Math.round(x),
        y: Math.round(y),
      }),
      adaptive: true,
      gpuAcceleration: true,
    },
  },
  {
    name: 'offset',
    options: {
      offset: [0, 2],
    },
  },
  {
    name: 'preventOverflow',
    options: {
      padding: 8,
    },
  },
] as Array<Partial<Modifier<any, any>>>
