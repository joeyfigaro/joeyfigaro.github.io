import { lerp } from 'canvas-sketch-util/math'
import random from 'canvas-sketch-util/random'

export default ({
  width = 480,
  count = 40,
  marginMultiplier = 0,
  maxColorRangeStart = 2,
  maxColorRangeEnd = 6,
  fontFamily = '"Andale Mono"',
  palette = [
    '#ff6b6b',
    '#48dbfb',
    '#c8d6e5',
    '#576574',
    '#8395a7',
    '#222f3e',
    '#0c0c0c'
  ],
  characters = '- -_',
  frequencyRangeStart = 0.04,
  frequencyRangeEnd = 1.28,
  spherePointScale = 0.08
}) => {
  const margin = width * marginMultiplier
  const maxColors = random.rangeFloor(maxColorRangeStart, maxColorRangeEnd)
  const chosenPalette = palette.slice(0, maxColors)
  const characterList = characters.split('')

  const createGrid = () => {
    const points = []
    const frequency = random.range(frequencyRangeStart, frequencyRangeEnd)
    const highFrequency = random.range(frequencyRangeStart, frequencyRangeEnd * Math.PI)

    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        let u = x / (count - 1)
        let v = y / (count - 1)

        const [dx, dy] = random.insideSphere(spherePointScale)
        u += dx
        v += dy / 2

        const n = random.noise3D(
          u * frequency,
          v * frequency,
          u * (frequency / 2 * 0.05)
        )

        const size = n * 0.5 + 0.64
        const baseSize = width * 0.08
        const sizeOffset = width * 0.04

        if (y % 6 === 0) {
          const h = random.noise3D(
            u * highFrequency,
            v * highFrequency,
            u * (highFrequency * 0.64)
          )
          const hSize = h * 0.5 + 0.64
          const hBaseSize = width * 0.08
          const hSizeOffset = width * 0.04

          points.push({
            color: '#ff9f43',
            size: Math.abs(
              hBaseSize * hSize +
                random.noise2D(hSize, h * hBaseSize, h) * hSizeOffset
            ),
            rotation: h * Math.PI * 0.16,
            character: random.pick(['—', '.', '-']),
            position: [u, v]
          })
        }

        points.push({
          color: random.pick(chosenPalette),
          size: Math.abs(
            baseSize * size + random.noise2D(size, n * baseSize, n) * sizeOffset
          ),
          rotation: n * Math.PI * 0.32,
          character: random.pick(characterList),
          position: [u, v]
        })
      }
    }
    return points
  }

  const grid = createGrid()

  return ({ context, width, height }) => {
    context.globalAlpha = 0.8
    context.fillStyle = '#0c0c0c'
    context.fillRect(0, 0, width, height)

    grid.forEach(({ position, rotation, size, color, character }) => {
      const [u, v] = position
      const x = lerp(margin, width - margin, u)
      const y = lerp(margin, height - margin, v)

      context.fillStyle = context.strokeStyle = color
      context.textAlign = 'right'
      context.textBaseline = 'middle'
      context.font = `${size}px ${fontFamily}`

      context.save()
      context.translate(x, y)
      context.rotate(rotation)
      context.fillText(character, 0, 0)
      context.restore()
    })
  }
}
