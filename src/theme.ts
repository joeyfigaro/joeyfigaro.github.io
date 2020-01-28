// import styled, { CreateStyled } from '@emotion/styled'

type Theme = {
  fontWeights: number[]
  fontStyles: string[]
  fontSizes: number[]
  colors: {
    ash: string
    black: string
    white: string
    red: string
    purple: string
    yellow: string
    green: string
    blue: string
  }
}

export const theme = {
  fontWeights: [100, 200, 300, 400, 500, 600, 800],
  fontStyles: ['normal', 'italic'],
  fontSizes: [11, 12, 13, 14, 36, 56],
  colors: {
    ash: '#7e7e7e',
    black: '#0C0C0C',
    white: '#fefefe',
    red: '#FF5A79',
    purple: '#BB6BD9',
    yellow: '#FFED50',
    green: '#60FF70',
    blue: '#5A9CFF'
  }
}

// export default styled as CreateStyled<Theme>