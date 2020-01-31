// https://gist.githubusercontent.com/mattdesl/1e9ab019534838e8c870ae06371be469/raw/3a23b4978db0ed340c8aebb9468b75737563199f/sketch.ts
import canvasSketch from 'canvas-sketch'

const settings = {
  duration: 5,
  animate: true,
  dimensions: [512, 512]
}

interface Props {
  context: CanvasRenderingContext2D
  width: number
  height: number
  time: number
  playhead: number
}

const sketch = () => {
  return ({ context, width, height, playhead }: Props) => {
    context.fillStyle = 'hsl(0, 0%, 95%)'
    context.fillRect(0, 0, width, height)

    const x: number = width / 2
    const y: number = height / 2
    const radius: number = width * 0.25
    const start: number = Math.sin(playhead * Math.PI * 2) * Math.PI
    const end: number =
      start +
      Math.PI / 2 +
      Math.sin(playhead * Math.PI * 2 + Math.PI / 2) * Math.PI * 0.4
    const thickness: number =
      width * 0.01 +
      (Math.sin(playhead * Math.PI * 2) * 0.5 + 0.5) * width * 0.05

    context.beginPath()
    context.arc(x, y, radius, start, end, false)
    context.lineWidth = thickness
    context.lineJoin = 'round'
    context.lineCap = 'round'
    context.strokeStyle = 'tomato'
    context.stroke()
  }
}

canvasSketch(sketch, settings)
