<template>
  <v-card>
    <v-form v-model="valid" @submit.prevent="handleSubmit">
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="() => $router.push('/')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>
          {{ title }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn variant="text" type="submit" :loading="isLoading">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-col style="text-align: center">
        <app-avatar :name="name" :size="100" style="margin: 20px" />
        <v-text-field
          :rules="[
            (value: string) => {
              if (value) return true

              return 'Name is required.'
            }
          ]"
          v-model="name"
          label="Contact Name"
        ></v-text-field>
        <v-text-field v-model="alias" label="Alias"></v-text-field>
        <v-text-field v-model="phone" label="Phone"></v-text-field>
        <v-text-field v-model="email" label="E-mail"></v-text-field>
        <v-btn v-if="defaultValues" color="error" block>
          <v-icon>mdi-trash-can-outline</v-icon>
          Delete Contact
        </v-btn>
      </v-col>
    </v-form>
  </v-card>
</template>

<script setup lang="ts">
import AppAvatar from '@/components/Avatar.vue'
import type { FormModel } from '@/models'
import { ref } from 'vue'

interface Props {
  defaultValues?: FormModel
  title: string
  handleSave: (data: FormModel) => void
}
const { defaultValues, title, handleSave } = defineProps<Props>()

const isLoading = ref<boolean>(false)

const name = ref<string>(defaultValues?.name || '')
const alias = ref<string>(defaultValues?.alias || '')
const email = ref<string>(defaultValues?.email || '')
const phone = ref<string>(defaultValues?.phone || '')

const valid = ref<boolean>(false)

async function handleSubmit() {
  if (!valid.value) return
  isLoading.value = true

  await handleSave({
    name: name.value,
    alias: alias.value,
    email: email.value,
    phone: phone.value
  } as FormModel)
  isLoading.value = false
}
</script>
