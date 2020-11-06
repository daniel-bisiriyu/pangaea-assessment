<template>
  <div class="products-page">
    <app-navbar />
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
              <button class="add-to-cart__btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <product-cart
      :displayCart="false"
      @close-cart="displayCart = false"
      :cartProducts="cartProducts"
    />
  </div>
</template>

<script>
import AppNavbar from "../Layouts/Navbar";
import { productsMixin } from "@/mixins/productsMixin";
import ProductCart from "../ProductCart/Index";
// import gql from "graphql-tag";
// const GET_PRODUCTS = gql`
//   query getProducts {
//     products {
//       id
//       title
//       image_url
//     }
//   }
// `;
export default {
  components: {
    AppNavbar,
    ProductCart,
  },
  data() {
    return {
      products: [],
      displayCart: false,
      cartProducts: [],
    };
  },
  //   apollo: {
  //     products: {
  //       query: GET_PRODUCTS,
  //     },
  //   },
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
  width: 8rem;
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
