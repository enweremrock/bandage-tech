import { CartItemProps } from "./cart";

export const cart = {
  getCartItemIndex: (item: CartItemProps, cart: CartItemProps[]) => {
    return cart.findIndex((cartItem) => cartItem.id === item.id);
  },
  addToCart: (item: CartItemProps, cartArr: CartItemProps[]) => {
    const productInCartIdx = cart.getCartItemIndex(item, cartArr);

    if (productInCartIdx === -1) {
      cartArr.push({ ...item, totalPrice: item.price });
    } else {
      cartArr[productInCartIdx].quantity += item.quantity;

      cart.calculateTotalPrice(productInCartIdx, cartArr);
    }
  },

  calculateTotalPrice: (index: number, cartArr: CartItemProps[]) => {
    cartArr[index].totalPrice = cartArr[index].quantity * cartArr[index].price;
  },

  decreaseQuantity: (item: CartItemProps, cartArr: CartItemProps[]) => {
    const productInCartIdx = cart.getCartItemIndex(item, cartArr);

    if (productInCartIdx > -1) {
      if (cartArr[productInCartIdx].quantity > 1) {
        cartArr[productInCartIdx].quantity--;
        cart.calculateTotalPrice(productInCartIdx, cartArr);
      } else {
        cartArr.splice(productInCartIdx, 1);
      }
    }
  },

  removeFromCart: (item: CartItemProps, cartArr: CartItemProps[]) => {
    const productInCartIdx = cart.getCartItemIndex(item, cartArr);
    if (productInCartIdx > -1) {
      cartArr.splice(productInCartIdx, 1);
    }
  },
};
