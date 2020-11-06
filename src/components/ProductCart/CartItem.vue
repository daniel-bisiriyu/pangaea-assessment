<template>
  <div class="cart-item">
    <div class="cart-item-header">
      <div class="product-name">
        <p>{{ product.title }}</p>
      </div>
      <div>
        <p class="remove-cart-item-button">X</p>
      </div>
    </div>
    <div class="product-image-wrapper">
      <img
        :src="product.image_url"
        alt="Product image"
        class="img-fluid product-image"
      />
    </div>
    <div class="cart-item__bottom-row">
      <div class="quantity-selector">
        <span>-</span>
        <span>1</span>
        <span>+</span>
      </div>
      <div class="product-price">
        <p>$ {{ product.price }}</p>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
.cart-item {
  background: #ffffff;
  border-radius: 3px;
  padding: 0.5rem 1rem 1.5rem;
}
.cart-item-header {
  display: flex;
  justify-content: space-between;
}
.remove-cart-item-button {
  font-family: sans-serif;
  cursor: pointer;
}
.quantity-selector {
  width: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem;
  border: 0.5px solid #bcbcbc;
}
.cart-item__bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-price p {
  margin-bottom: 0;
}
.product-image-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  margin-right: 3rem;
}
.product-image {
  width: 2.5rem;
}
</style>
