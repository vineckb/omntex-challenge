<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-list-item
    class="contact-list-item"
    variant="plain"
    @click="$router.push(`/contact/${item.id}`)"
  >
    <v-list-item-title>
      <app-avatar
        :name="item.name"
        :size="30"
        style="margin-right: 10px"
        class="person-avatar"
      />
      <v-checkbox
        :model-value="selected"
        color="primary"
        density="compact"
        style="margin: 0 11px 0 1px"
        hide-details
        :ripple="true"
        class="person-checkbox"
        @click.stop
        @change="(e: any) => handleSelectedChange(e.target.checked)"
      ></v-checkbox>
      <p>{{ item.name }}</p>
    </v-list-item-title>
    <p class="contact-phone">{{ item.phone }}</p>
    <p class="contact-email">{{ item.email }}</p>
  </v-list-item>
</template>

<script setup lang="ts">
import type { ContactType } from '@/models'
import AppAvatar from '@/components/Avatar/index.vue'
import { useContactsStore } from '@/stores/contacts'

interface Props {
  item: ContactType
}

const { item } = defineProps<Props>()

const { picking, add, remove } = useContactsStore()
const selected = !!picking.find((id) => item.id === id)

function handleSelectedChange(value: boolean) {
  if (value) {
    add(item.id)
  } else {
    remove(item.id)
  }
}
</script>

<style>
.v-list-item.contact-list-item {
  height: 56px;
  align-items: center;

  .v-list-item__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    @media only screen and (max-width: 720px) {
      grid-template-columns: 1fr 1fr;

      .contact-email {
        display: none;
      }
    }

    @media only screen and (max-width: 520px) {
      grid-template-columns: 1fr;

      .contact-phone {
        display: none;
      }
    }
  }

  .v-list-item-title {
    display: flex;
    align-items: center;

    .person-checkbox,
    .person-avatar {
      flex-grow: 0;
    }
  }

  &:hover .person-checkbox {
    display: grid;
  }

  &:hover .person-avatar {
    display: none;
  }
}
</style>
