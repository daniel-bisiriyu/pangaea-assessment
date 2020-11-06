<template>
  <div class="cart-item">
    <div class="cart-item-header">
      <div class="product-name">
        <p>{{ product.title }}</p>
      </div>
      <div>
        <p
          class="remove-cart-item-button cursor-pointer"
          @click="$emit('remove-cart-item', product.id)"
        >
          X
        </p>
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
        <span @click="decreaseProductQuantity(product.id)">-</span>
        <span>{{ product.quantity }}</span>
        <span @click="increaseProductQuantity(product.id)">+</span>
      </div>
      <div class="product-price">
        <p>{{ currency }} {{ product.price * product.quantity }}</p>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "currency"],
  methods: {
    increaseProductQuantity(productId) {
      this.$emit("increase-product-quantity", productId);
    },
    decreaseProductQuantity(productId) {
      if (product.quantity == 1) {
        this.$emit("remove-cart-item", productId);
      } else {
        this.$emit("decrease-product-quantity", productId);
      }
    },
  },
};
</script>

<style scoped>
.cart-item {
  background: #ffffff;
  border-radius: 3px;
  padding: 0.5rem 1rem 1.5rem;
  margin-bottom: 1rem;
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
.quantity-selector span {
  cursor: pointer;
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
