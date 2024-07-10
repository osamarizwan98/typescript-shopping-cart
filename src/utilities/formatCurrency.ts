<<<<<<< HEAD
const currencyFormatter = new Intl.NumberFormat(undefined, {
=======
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
>>>>>>> c74ebfa005eb97f19494a718c2207cc384fa7fad
    currency: "USD",
    style: "currency"
})

<<<<<<< HEAD
export function formatCurrency(number: number){
    return currencyFormatter.format(number)
=======

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number)
>>>>>>> c74ebfa005eb97f19494a718c2207cc384fa7fad
}