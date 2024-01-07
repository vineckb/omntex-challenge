<template>
  <v-layout class="wrapper">
    <app-header />

    <v-main>
      <app-contacts-list :items="items" />
    </v-main>
    <app-new-contact-fab />
  </v-layout>
  <router-view></router-view>
</template>

<script setup lang="ts">
import AppContactsList from '../components/ContactsList.vue'
import AppNewContactFab from '../components/NewContactFab.vue'
import AppHeader from '../components/Header.vue'

const items = [
  {
    id: 1,
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Brunch this weekend?',
    email: 'test@gmail.com',
    phone: '+55 41 999999999'
  },
  {
    id: 2,
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Summer BBQ',
    email: 'test@gmail.com',
    phone: '+55 41 999999999'
  },
  {
    id: 3,
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    title: 'Oui oui',
    email: 'test@gmail.com',
    phone: '+55 41 999999999'
  },
  {
    id: 4,
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    title: 'Birthday gift',
    email: 'test@gmail.com',
    phone: '+55 41 999999999'
  },
  {
    id: 5,
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    title: 'Recipe to try',
    email: 'test@gmail.com',
    phone: '+55 41 999999999'
  }
]
</script>
