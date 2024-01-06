<template>
  <v-dialog
    :model-value="true"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    persistent
  >
    <template v-slot:activator="{ props }">
      <v-btn color="primary" dark v-bind="props"> Open Dialog </v-btn>
    </template>
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="() => $router.push('/')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Edit Contact</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn variant="text" @click="handleSave">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-col>
        <app-avatar :name="name" :size="100" />
        <v-form @submit.prevent>
          <v-text-field v-model="name" label="Contact Name"></v-text-field>
          <v-select label="Type"></v-select>
        </v-form>
        <v-btn color="error" block>
          <v-icon>mdi-trash-can-outline</v-icon>
          Delete Contact
        </v-btn>
      </v-col>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppAvatar from '@/components/Avatar.vue'

const name = ref<string>('Vinicius Borges')

function handleSave() {
  console.log('save')
}

function handleClose() {
  console.log('close')
}
</script>
