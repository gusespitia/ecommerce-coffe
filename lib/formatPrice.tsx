export function formatPrice(price: number) {
  const priceFormatted = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: 'symbol',
  })
const finalPrice = priceFormatted.format(price)
  return finalPrice
}