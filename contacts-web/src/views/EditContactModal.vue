<template>
  <v-dialog
    :model-value="true"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    persistent
  >
    <app-contact-form
      v-if="!isLoading"
      :default-values="data.data"
      title="Edit Contact"
      :handle-save="handleSave"
    />
  </v-dialog>
</template>

<script setup lang="ts">
import AppContactForm from '@/components/ContactForm.vue'
import type { FormModel } from '@/models'
import { fetchContact, updateContact } from '@/services/api'
import { useRoute, useRouter } from 'vue-router'

const { params } = useRoute()
const id = params.id as string

const router = useRouter()
const { data, isLoading } = fetchContact(id)
const { mutateAsync } = updateContact(id)

async function handleSave(data: FormModel) {
  await mutateAsync(data)
  router.push('/')
}
</script>
