const usePrice = (cartItems) => {
  const quantity = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);

  const round2 = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

  const itemsPrice = round2(quantity);
  const taxPrice = round2(itemsPrice * 0.15);
  const shippingPrice = itemsPrice > 200 ? 0 : 15
  const totalPrice = round2(itemsPrice + shippingPrice
    + taxPrice)

  return { itemsPrice, shippingPrice, taxPrice, totalPrice }
}

export default usePrice;