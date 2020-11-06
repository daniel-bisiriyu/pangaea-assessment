<template>
  <div class="products-page">
    <app-navbar :cartItemsCount="cartItems.length" />
    <div class="products-wrapper">
      <div class="products-header">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-6 col-12">
              <h1>All Products</h1>
              <p>A 360&#176; look at Lumin</p>
            </div>
          </div>
        </div>
      </div>
      <div class="products-list-wrapper">
        <div class="products-list">
          <div
            class="single-product text-center mb-5"
            v-for="product in products"
            :key="product.id"
          >
            <div class="product-image">
              <img
                :src="product.image_url"
                :alt="product.title"
                class="img-fluid product-img"
              />
            </div>
            <div class="product-information">
              <p class="product-title">{{ product.title }}</p>
              <p>From {{ currency }} {{ product.price }}</p>
            </div>
            <div class="add-to-cart">
              <button class="add-to-cart__btn" @click="addToCart(product)">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <product-cart
      :displayCart="displayCart"
      @close-cart="displayCart = false"
      :cartItems="cartItems"
      :currency="currency"
      @remove-cart-item="removeCartItem($event)"
      @increase-product-quantity="increaseProductQuantity($event)"
      @decrease-product-quantity="decreaseProductQuantity($event)"
    />
  </div>
</template>

<script>
import AppNavbar from "../Layouts/Navbar";
import { productsMixin } from "@/mixins/productsMixin";
import ProductCart from "../ProductCart/Index";
export default {
  components: {
    AppNavbar,
    ProductCart,
  },
  data() {
    return {
      products: [],
      displayCart: false,
      cartItems: [],
      indexOfItemInCart: null,
    };
  },
  mixins: [productsMixin],
  mounted() {
    this.saveProducts();
  },
  methods: {
    async saveProducts() {
      const response = await this.getProducts();
      console.log(response);
      this.products = response.data.products;
    },
    addToCart(product) {
      let productIsInCart = this.productInCart(product.id);
      if (productIsInCart) {
        this.cartItems[this.indexOfItemInCart].quantity++;
        this.displayCart = true;
        this.indexOfItemInCart = null;
      } else {
        product.quantity = 1;
        this.cartItems.push(product);
        this.displayCart = true;
      }
    },
    productInCart(productId) {
      for (var i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == productId) {
          this.indexOfItemInCart = i;
          return true;
        }
      }
      return false;
    },
    removeCartItem(productId) {
      let filteredCart = this.cartItems.filter((item) => {
        return item.id != productId;
      });
      this.cartItems = filteredCart;
    },
    decreaseProductQuantity(productId) {
      this.productInCart(productId);
      this.cartItems[this.indexOfItemInCart].quantity--;
    },
    increaseProductQuantity(productId) {
      this.productInCart(productId);
      this.cartItems[this.indexOfItemInCart].quantity++;
    },
  },
};
</script>

<style scoped>
.products-header {
  padding: 5rem 0;
}
.products-list-wrapper {
  background: #e1e6e2;
  padding: 3rem 0;
}
.products-list {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
.single-product {
  width: 33%;
  margin-bottom: 3rem;
}
.add-to-cart__btn {
  background-color: #4b5548;
  border: none;
  color: #fff;
  padding: 0.5rem 0.75rem;
  border-radius: 1px;
  transition: all ease 0.5s;
}
.add-to-cart__btn:hover {
  transform: scale(1.02);
}
.product-img {
  width: 10rem;
  height: 7rem;
  margin-bottom: 4rem;
}
.product-title {
  font-size: 0.9rem;
  margin-bottom: 0;
}
@media screen and (max-width: 768px) {
  .single-product {
    width: 50%;
  }
}
</style>
