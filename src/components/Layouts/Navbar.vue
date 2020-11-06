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
          <li>
            <img
              src="@/assets/images/cart-icon.png"
              alt="Cart Icon"
              class="img-fluid cart-icon"
            />
          </li>
        </ul>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
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
  margin: 0 2rem;
}
</style>
