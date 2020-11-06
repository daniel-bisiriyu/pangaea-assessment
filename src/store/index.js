import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProducts: [],
    cartItems: [],
    displayCart: false,
    cartTotal: "",
    currency: "",
    allCurrencies: [],
  },
  getters: {
    allProducts(state) {
      return state.allProducts;
    },
    cartItems(state) {
      return state.cartItems;
    },
    cartTotal(state) {
      for (var i = 0; i < state.cartItems.length; i++) {
        state.cartTotal += state.cartItems[i].price;
      }
      return state.cartTotal;
    },
    allCurrencies(state) {
      return state.allCurrencies;
    },
  },
  mutations: {
    SAVE_ITEM_TO_CART(state, product) {
      Vue.set(product, "quantity", 1);
      state.cartItems.push(product);
    },
    INCREMENT_PRODUCT_QUANTITY(state, itemIndex) {
      state.cartItems[itemIndex].quantity++;
      state.displayCart = true;
    },
    DECREMENT_PRODUCT_QUANTITY(state, itemIndex) {
      state.cartItems[itemIndex].quantity--;
      state.displayCart = true;
    },
    REMOVE_CART_ITEM(state, productId) {
      let filteredCart = state.cartItems.filter((item) => {
        return item.id != productId;
      });
      state.cartItems = filteredCart;
    },
    SAVE_CURRENCY(state, currency) {
      state.currency = currency;
    },
    SAVE_ALL_CURRENCIES(state, currencies) {
      state.allCurrencies = currencies;
    },
    UPDATE_CART_ITEMS_CURRENCY(state) {
      state.cartItems.forEach((item) => {
        let product = state.allProducts.filter((product) => {
          return product.id == item.id;
        });
        console.log(product);
        item.price = product[0].price;
      });
    },
    SAVE_ALL_PRODUCTS(state, payload) {
      state.allProducts = payload;
    },
  },
  actions: {
    saveAllProducts({ commit }, payload) {
      commit("SAVE_ALL_PRODUCTS", payload);
    },
    saveItemToCart({ commit }, product) {
      commit("SAVE_ITEM_TO_CART", product);
    },
    incrementProductQuantity({ commit }, itemIndex) {
      commit("INCREMENT_PRODUCT_QUANTITY", itemIndex);
    },
    decrementProductQuantity({ commit }, itemIndex) {
      commit("DECREMENT_PRODUCT_QUANTITY", itemIndex);
    },
    removeCartItem({ commit }, productId) {
      commit("REMOVE_CART_ITEM", productId);
    },
    saveCurrency({ commit }, currency) {
      commit("SAVE_CURRENCY", currency);
    },
    saveAllCurrencies({ commit }, currencies) {
      commit("SAVE_ALL_CURRENCIES", currencies);
    },
    updateCartItemsCurrency({ commit }) {
      commit("UPDATE_CART_ITEMS_CURRENCY");
    },
  },
  modules: {},
});
