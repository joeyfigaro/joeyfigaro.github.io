import { lerp } from 'canvas-sketch-util/math'
import random from 'canvas-sketch-util/random'

export default ({
  width = 480,
  count = 40,
  marginMultiplier = 0,
  maxColorRangeStart = 2,
  maxColorRangeEnd = 6,
  fontFamily = '"Andale Mono"',
  palette = ['#aaa', '#666', '#333', '#222', '#111', '#0c0c0c'],
  characters = '—.-_',
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

    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        let u = x / (count - 1)
        let v = y / (count - 1)

        const [dx, dy] = random.insideSphere(spherePointScale)
        u += dx
        v += dy

        const n = random.noise3D(
          u * frequency,
          v * frequency,
          u * (frequency * 0.05)
        )
        const size = n * 0.5 + 0.5
        const baseSize = width * 0.08
        const sizeOffset = width * 0.04

        points.push({
          color: random.pick(chosenPalette),
          size: Math.abs(
            baseSize * size + random.noise2D(size, n * baseSize, n) * sizeOffset
          ),
          rotation: n * Math.PI * 0.8,
          character: random.pick(characterList),
          position: [u, v]
        })
      }
    }
    return points
  }

  const grid = createGrid()

  return ({ context, width, height }) => {
    context.globalAlpha = 1.0
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
