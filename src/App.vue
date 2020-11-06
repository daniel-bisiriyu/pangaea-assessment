<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
* {
  font-family: "Playfair Display", serif;
}
.cursor-pointer {
  cursor: pointer;
}
button:focus,
select:focus {
  outline: none;
}
</style>
