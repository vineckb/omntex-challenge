<template>
  <v-btn
    icon="mdi-plus"
    class="fab"
    color="primary"
    @click="$router.push('/new')"
  ></v-btn>
</template>

<style scoped>
.fab {
  position: fixed !important;
  bottom: 20px;
  right: 20px;
  text-decoration: none !important;
  cursor: pointer;
}
</style>
