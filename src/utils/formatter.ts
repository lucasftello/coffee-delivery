export function priceFormatter(price: number) {
  return price.toLocaleString('pt-br', { minimumFractionDigits: 2 })
}
