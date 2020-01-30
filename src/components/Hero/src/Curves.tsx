import React from 'react'
import sketch from 'canvas-sketch'

import asciiPainter from '../../../generative/canvas-sketch/ascii-painter'

import styles from '../styles.module.scss'

const GenerativeASCII = () => {
  let canvasRef = null
  React.useEffect(() => {
    const painting = asciiPainter({
      marginMultiplier: 0.06
    })
    sketch(painting, { dimensions: [680, 420], canvas: canvasRef })
    console.log('calling canvas-sketch')
  }, [])

  return <canvas className={styles.ASCIICanvas} ref={cv => (canvasRef = cv)} />
}

export default GenerativeASCII
