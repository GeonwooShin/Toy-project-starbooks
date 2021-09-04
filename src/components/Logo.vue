<template>
  <RouterLink
    to="/"
    class="logo">
    <span>Star</span>Books
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main";
.logo {
  font-family: 'Fredoka One', cursive;
  font-size: 20px;
  color: $yellow;
  text-decoration: none;
//   position: absolute;
//   left: 200px;
  &:hover {
    color: $yellow;
  }
  span {
    color: $white;
  }
}
</style>