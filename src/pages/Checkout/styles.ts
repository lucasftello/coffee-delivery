import styled from 'styled-components'

export const Container = styled.section`
  padding: 2.5rem 0;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  gap: 2rem;
`

export const Heading = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    span {
      color: ${(props) => props.theme.colors['base-subtitle']};
      line-height: 1.3;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.3;
    }
  }
`

export const CheckoutInfos = styled.div`
  flex: 1;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  margin-bottom: 0.75rem;
`

export const AddressHeader = styled(Heading)`
  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';

  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-gap: 16px 0.75rem;
`

export const Input = styled.input`
  height: 2.625rem;
  background-color: ${(props) => props.theme.colors['base-input']};
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 0.875rem;

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`

export const PaymentHeader = styled(Heading)`
  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface PaymentButtonProps {
  selected: boolean
}

export const PaymentButton = styled.label<PaymentButtonProps>`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors['purple-light']
      : props.theme.colors['base-button']};
  border: ${(props) =>
    props.selected ? `1px solid ${props.theme.colors.purple}` : 'none'};
  border-radius: 6px;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
    color: ${(props) => props.theme.colors['base-subtitle']};
    transition:
      background-color,
      color 0.2s;
  }

  input {
    position: absolute;
    visibility: hidden;
  }

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  span {
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`

export const CheckoutSummary = styled.div`
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const Summary = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 44px;
  padding: 2.5rem;
`

export const CartItem = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  padding-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }
`

export const Infos = styled.div`
  flex: 1;
  margin-right: 3.125rem;

  > span {
    display: block;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 0.5rem;
  }
`

export const Controls = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    height: 2.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4375rem;
    background-color: ${(props) => props.theme.colors['base-button']};
    border-radius: 6px;
    border: none;
    padding: 0 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors['base-hover']};
      color: ${(props) => props.theme.colors['base-subtitle']};
      transition:
        background-color,
        color 0.2s;
    }

    svg {
      color: ${(props) => props.theme.colors.purple};
    }

    span {
      font-size: 0.75rem;
      text-transform: uppercase;
    }
  }
`

export const Price = styled.span`
  font-weight: bold;
`

export const SummaryItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const SummaryInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span:first-child {
      font-size: 0.875rem;
    }

    span:last-child {
      font-size: 1rem;
    }
  }

  div:last-child {
    span {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.white};
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors['yellow-dark']};
    transition: background-color 0.2s;
  }
`

export const CartEmpty = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background-color: ${(props) => props.theme.colors.purple};
    color: ${(props) => props.theme.colors.white};
    font-size: 1.125rem;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 6px;
    text-decoration: none;
  }
`
