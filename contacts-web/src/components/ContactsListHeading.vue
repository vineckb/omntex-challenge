<template>
  <div class="wrapper">
    <p>Name</p>
    <p class="phone-column">Phone</p>
    <p class="email-column">E-mail</p>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 36px 10px 0;

  @media only screen and (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
    .email-column {
      display: none;
    }
  }

  @media only screen and (max-width: 520px) {
    grid-template-columns: 1fr 1fr;

    .phone-column {
      display: none;
    }
  }
}
</style>
