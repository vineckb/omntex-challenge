<template>
  <v-list-item
    class="contact-list-item"
    variant="plain"
    @click="$router.push(`/contact/${item.id}`)"
  >
    <template v-slot:prepend>
      <v-icon
        size="30"
        style="margin: 0 5px"
        icon="mdi-account"
        class="person-avatar"
      ></v-icon>
      <v-checkbox
        :model-value="selected"
        color="primary"
        hide-details
        :ripple="true"
        class="person-checkbox"
        @click.stop
        @change="(e) => handleSelectedChange(e.target.checked)"
      ></v-checkbox>
    </template>
    <v-list-item-title>{{ item.title }}</v-list-item-title>
  </v-list-item>
</template>

<script setup lang="ts">
import { ContactType } from '../models'

interface Props {
  item: ContactType
  selected: boolean
}

const { item } = defineProps<Props>()

const emit = defineEmits(['changeSelected'])

function handleSelectedChange(value: boolean) {
  emit('changeSelected', value)
  console.log('changeChecked', value, item.id)
}
</script>

<style>
.v-list-item.contact-list-item {
  height: 56px;
  align-items: center;
  display: flex;

  &:hover .person-checkbox {
    display: grid;
  }

  &:hover .person-avatar {
    display: none;
  }
}
</style>
