<template>
  <div v-if="displayCart" class="product-cart">
    <div class="d-flex">
      <div class="cart-overlay" @click="$emit('close-cart')"></div>
      <div class="cart-content">
        <div>
          <div class="cart-header text-center">
            <div class="cart-toggle-wrapper" @click="$emit('close-cart')">
              <div class="cart__close-cart-toggle">
                <close-cart-icon />
              </div>
            </div>
            <div class="cart-header__text">
              <p>Your Cart</p>
            </div>
            <div></div>
          </div>
          <div class="currency-filter cursor-pointer mb-3">
            <select v-model="selectedCurrency">
              <option disabled value="">Select a currency</option>
              <option v-for="(currency, index) in allCurrencies" :key="index">{{
                currency
              }}</option>
            </select>
          </div>
          <div class="cart-items">
            <cart-item
              v-for="product in cartItems"
              :key="product.id"
              :product="product"
              :currency="currency"
              @remove-cart-item="removeCartItem($event)"
              @increase-product-quantity="
                $emit('increase-product-quantity', $event)
              "
              @decrease-product-quantity="
                $emit('decrease-product-quantity', $event)
              "
            />
          </div>
        </div>
        <div class="cart-footer">
          <span class="hr"></span>
          <div class="cart-subtotal">
            <p>Subtotal</p>
            <p>{{ currency }} {{ cartTotal }}</p>
          </div>
          <div class="subscription-button-wrapper">
            <button class="button subscribe">
              MAKE THIS A SUBSCRIPTION (SAVE 20%)
            </button>
          </div>
          <div class="checkout-button-wrapper">
            <button class="button checkout">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseCartIcon from "./CloseCartIconSvg";
import CartItem from "./CartItem";
export default {
  props: { displayCart: Boolean, currency: String },
  components: {
    CloseCartIcon,
    CartItem,
  },
  data() {
    return {
      selectedCurrency: null,
    };
  },
  watch: {
    selectedCurrency() {
      this.$emit("change-currency", this.selectedCurrency);
    },
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartTotal() {
      let total = 0;
      this.$store.getters.cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    },
    allCurrencies() {
      return this.$store.getters.allCurrencies;
    },
  },
  methods: {
    removeCartItem(productId) {
      this.$emit("remove-cart-item", productId);
    },
  },
};
</script>

<style scoped>
.product-cart {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 999;
}
.cart-overlay {
  width: 60%;
  background: rgba(0, 0, 0, 0.4);
  animation: slideInRight 0.5s linear;
}
.cart-content {
  /* position: relative; */
  padding: 1rem 1.5rem;
  width: 40%;
  background: #f2f2f0;
  height: 100vh;
  animation: slideInRight 0.5s linear;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}
.cart-header__text p {
  margin-bottom: 0;
}
.cart__close-cart-toggle {
  border-radius: 50%;
  border: 1px solid rgb(198, 204, 199);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.cart-footer {
  justify-self: flex-end;
  /* position: absolute;
  bottom: 1rem;
  right: 2rem;
  left: 2rem; */
}
.cart-subtotal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}
.button {
  width: 100%;
  padding: 1rem 0;
  transition: all ease 0.5s;
}
.button:hover {
  transform: scale(1.01);
}
.button.subscribe {
  border: 1px solid #2b2e2b;
  background-color: #fff;
  color: #2b2e2b;
}
.button.checkout {
  background-color: #4b5548;
  color: #fff;
  border: none;
  margin-top: 1rem;
}
.hr {
  display: block;
  background-color: #717b71;
  height: 0.05rem;
  width: 100%;
  margin: 1rem 0;
}
@keyframes slideInRight {
  0% {
    transform: translateX(100%);
    /* opacity: 0; */
  }
  100% {
    transform: translateX(0);
    /* opacity: 0.5; */
  }
}
select {
  width: 6rem;
  height: 2rem;
  border: none;
}
</style>
