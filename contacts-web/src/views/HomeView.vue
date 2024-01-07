<template>
  <v-layout class="wrapper">
    <app-header />

    <v-main v-if="!isLoading">
      <app-contacts-list :items="data.data as unknown as ContactType[]" />
    </v-main>
    <app-new-contact-fab />
  </v-layout>
  <router-view></router-view>
</template>

<script setup lang="ts">
import AppContactsList from '../components/ContactsList.vue'
import AppNewContactFab from '../components/NewContactFab.vue'
import AppHeader from '../components/Header.vue'
import { fetchContacts } from '@/services/api'
import type { ContactType } from '@/models'

const { data, isLoading } = fetchContacts()
</script>
