// const { defineStore } = Pinia;
import { defineStore } from "pinia";
import productsStore from "./productsStore.js";

export default defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(productId, qty = 1) {
      // 取得已經有加入購物車的項目
      const currentCart = this.cart.find((item) => {
        return item.productId === productId;
      });
      // console.log(productId, qty);

      if (currentCart) {
        currentCart.qty += qty;
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty,
        });
        // console.log(this.cart);
      }
    },
    setCartQty(id, evt) {
      console.log(id, evt.target.value);
      const currentCart = this.cart.find((item) => item.id === id);
      currentCart.qty = Number(evt.target.value);
    },
    removeCartItem(removeId) {
      const index = this.cart.findIndex((item) => item.id === removeId);
      this.cart.splice(index, 1);
    },
  },
  getters: {
    cartList: ({ cart }) => {
      //1. 購物車的品項資訊，需要整合產品資訊
      //2. 必須計算小計金額
      //3. 必須提供總金額
      const { products } = productsStore();

      //購物車的品項
      const carts = cart.map((item) => {
        //取出單一產品的產品資訊
        const product = products.find(
          (product) => product.id === item.productId
        );
        return {
          // 購物車的某單一品項
          ...item,
          // 產品資訊
          product,
          // 小計金額
          subTotal: product.price * item.qty,
        };
      });
      console.log(carts);

      //總金額
      const total = carts.reduce((acc, cur) => {
        return acc + cur.subTotal;
      }, 0);

      return {
        carts, //列表
        total,
      };
    },
  },
});
