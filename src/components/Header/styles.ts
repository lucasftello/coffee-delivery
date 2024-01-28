import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  padding: 2rem 0;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Location = styled.div`
  height: 2.375rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme.colors['purple-light']};
  padding: 0 0.5rem;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['purple-dark']};
  }
`

export const CartButton = styled(NavLink)`
  height: 2.375rem;
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors['yellow-light']};
  padding: 0 0.5rem;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const Counter = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors['yellow-dark']};
  color: ${(props) => props.theme.colors.white};
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 50%;
`
