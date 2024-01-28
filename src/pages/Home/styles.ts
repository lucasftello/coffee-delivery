import styled from 'styled-components'

export const Hero = styled.section`
  padding: 5.875rem 0;
  background-image: url('/images/hero-bg.png');
  background-repeat: repeat-x;
`

export const HeroContent = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  gap: 3.5rem;
`

export const HeroText = styled.div`
  flex: 1;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 900;
    color: ${(props) => props.theme.colors['base-title']};
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  > span {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
    line-height: 1.3;
  }
`

export const HeroInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 1.25rem 2.5rem;
  margin-top: 4.125rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const ICON_COLORS = {
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
  purple: 'purple',
  gray: 'base-text',
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

export const Coffees = styled.section`
  padding: 2rem 0;
`

export const CoffeesContent = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 3.375rem;
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
`
