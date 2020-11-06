<template>
  <nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">
      <img
        src="@/assets/logo.png"
        alt="Lumin logo"
        class="img-fluid app-logo"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Shop <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Learn</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#">Account</a>
          </li>
          <li class="cursor-pointer" @click="$emit('show-cart')">
            <img
              src="@/assets/images/cart-icon.png"
              alt="Cart Icon"
              class="img-fluid cart-icon"
            />
            <p class="cart-item-count">{{ cartItemsCount }}</p>
          </li>
        </ul>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  props: ["cartItemsCount"],
};
</script>

<style scoped>
.app-logo {
  width: 7rem;
}
.nav-item {
  padding-left: 2rem;
}
.nav-item a {
  font-size: 15px;
  color: #000000;
}
.cart-icon {
  width: 2rem;
  margin: 0 0.5rem 0 2rem;
}
.cart-item-count {
  margin-bottom: 0.75rem;
  display: inline-block;
  font-size: 1rem;
}
</style>
