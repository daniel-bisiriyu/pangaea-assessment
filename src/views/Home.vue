<template>
  <div class="home">
    <products-page />
  </div>
</template>

<script>
import ProductsPage from "@/components/ProductsPage/Index";
export default {
  name: "Home",
  components: {
    ProductsPage,
  },
};
</script>
