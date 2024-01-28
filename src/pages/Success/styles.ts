import styled from 'styled-components'

export const Container = styled.section`
  padding: 5rem 0;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  img {
    align-self: end;
  }
`

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const OrderInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid transparent;
  border-radius: 6px 36px;
  background: ${(props) =>
    `linear-gradient(
        ${props.theme.colors.background},
        ${props.theme.colors.background}
      )
      padding-box,
    linear-gradient(
        to right,
        ${props.theme.colors.yellow},
        ${props.theme.colors.purple}
      )
      border-box`};
  padding: 2.5rem;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    span {
      display: block;
    }
  }
`

const ICON_COLORS = {
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
  purple: 'purple',
} as const

interface IconProps {
  bgColor: keyof typeof ICON_COLORS
}

export const Icon = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) =>
    props.theme.colors[ICON_COLORS[props.bgColor]]};

  svg {
    color: ${(props) => props.theme.colors.white};
  }
`
