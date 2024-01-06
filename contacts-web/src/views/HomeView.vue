<template>
  <v-layout class="wrapper">
    <app-header />

    <v-main>
      <app-contacts-list :items="items" />
    </v-main>
    <v-btn icon="mdi-plus" class="fab" color="primary"></v-btn>
    <router-view></router-view>
  </v-layout>
</template>

<script lang="ts">
import AppContactsList from '../components/ContactsList.vue'
import AppHeader from '../components/Header.vue'

export default {
  components: { AppContactsList, AppHeader },
  data: () => ({
    picking: false,
    items: [
      {
        id: 1,
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?'
      },
      {
        id: 2,
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ'
      },
      {
        id: 3,
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui'
      },
      {
        id: 4,
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift'
      },
      {
        id: 5,
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try'
      }
    ]
  }),
  methods: {
    handleClick(item) {
      console.log('click', item.id)
    }
  }
}
</script>

<style>
.fab {
  position: fixed !important;
  bottom: 20px;
  right: 20px;
}
</style>
