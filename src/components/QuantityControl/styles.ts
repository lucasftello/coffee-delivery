import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors['base-button']};
`

export const Button = styled.button`
  width: 1.75rem;
  height: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${(props) => props.theme.colors.purple};
  border: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors['purple-dark']};
    transition: color 0.2s;
  }
`

export const Counter = styled.label`
  width: 1.25rem;
  height: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${(props) => props.theme.colors['base-title']};
`
