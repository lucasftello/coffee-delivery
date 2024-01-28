import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors['base-card']};
  padding: 0 1.5rem 1.25rem;
  border-radius: 6px 36px;
`

export const Image = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -1.25rem;
`

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  span {
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
    font-size: 0.625rem;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 8px;
  }
`

export const Title = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors['base-subtitle']};
  margin-bottom: 0.5rem;
`

export const Description = styled.span`
  display: block;
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${(props) => props.theme.colors['base-label']};
  text-align: center;
  margin-bottom: 2rem;
`

export const Buy = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Price = styled.div`
  span:nth-child(1) {
    font-size: 0.875rem;
    margin-right: 0.25rem;
  }

  span:nth-child(2) {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
  }
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors['purple-dark']};
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.purple};
      transition: background-color 0.2s;
    }

    svg {
      color: ${(props) => props.theme.colors['base-card']};
    }
  }
`
