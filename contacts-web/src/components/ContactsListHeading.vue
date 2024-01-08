<template>
  <div class="wrapper">
    <div class="headings" v-if="!picking.length">
      <p>Name</p>
      <p class="phone-column">Phone</p>
      <p class="email-column">E-mail</p>
    </div>
    <app-contact-list-actions-bar v-if="picking.length" />
  </div>
</template>

<script setup lang="ts">
import AppContactListActionsBar from '@/components/ContactListActionsBar.vue'
import { useContactsStore } from '@/stores/contacts'

const { picking } = useContactsStore()
</script>

<style scoped>
.wrapper {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin: 0 20px;
}

.headings {
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
