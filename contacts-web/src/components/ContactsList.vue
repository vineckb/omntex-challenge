<script setup lang="ts">
import { ContactType } from '@/models'
import ContactListItem from './ContactListItem.vue'
import { ref } from 'vue'

interface Props {
  items: ContactType[]
}

const { items } = defineProps<Props>()
const picking = ref<number[]>([])

function handleChangeSelected(item: ContactType) {
  console.log('handleChangeSelected', item)
  return (selected: boolean) => {
    if (selected) {
      if (picking.value.find((id) => id == item.id)) return

      picking.value.push(item.id)
    } else {
      const index = picking.value.findIndex((id) => item.id == id)

      if (index < 0) return

      picking.value.splice(index, 1)
    }
  }
}

function selectAll() {
  console.log(
    'selectall',
    items.map((item) => item.id)
  )
  picking.value = items.map((item) => item.id)
}
</script>

<template>
  <div
    v-if="picking.length > 0"
    style="display: flex; align-items: center; gap: 10px"
  >
    <v-menu location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" variant="outlined">
          <v-icon
            :icon="
              picking.length === items.length
                ? 'mdi-checkbox-marked'
                : 'mdi-minus-box-outline'
            "
          ></v-icon>
          <v-icon icon="mdi-menu-down"></v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>
            <v-btn variant="plain" @click="selectAll">Todos</v-btn>
          </v-list-item-title>
          <v-list-item-title>
            <v-btn variant="plain" @click="() => (picking = [])">Nenhum</v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <p>
      <strong>{{ picking.length }}</strong>
      {{ picking.length ? 'selecteds contacts' : 'selected contact' }}
    </p>
  </div>
  <v-list :class="'persons-list' + (!!picking.length ? ' picking' : '')">
    <contact-list-item
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :selected="!!picking.find((id) => item.id === id)"
      @changeSelected="(v) => handleChangeSelected(item)(v)"
    />
  </v-list>
</template>

<style>
.persons-list {
  .person-checkbox {
    display: none;
  }

  &.picking {
    .person-checkbox {
      display: grid !important;
    }

    .person-avatar {
      display: none !important;
    }
  }
}
</style>
