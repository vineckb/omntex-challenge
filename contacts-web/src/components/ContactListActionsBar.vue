<template>
  <div v-if="picking.length > 0" class="header-actions">
    <v-menu location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" variant="outlined" color="primary">
          <v-icon
            :icon="
              ids && ids.length === picking.length
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
            <v-btn variant="plain" @click="selectAll">All</v-btn>
          </v-list-item-title>
          <v-list-item-title>
            <v-btn variant="plain" @click="clearSelection">None</v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <p class="selection-text">
      <strong>{{ picking.length }}</strong> contact{{
        picking.length > 1 ? 's' : ''
      }}
      selected
    </p>

    <app-move-to-trash-button :ids="picking" @click="clearSelection" />
  </div>
</template>

<script setup lang="ts">
import { useContactsStore } from '@/stores/contacts'
import AppMoveToTrashButton from '@/components/MoveToTrashButton.vue'

const { picking, clearSelection, ids, selectAll } = useContactsStore()
</script>

<style scoped>
.header-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 20px 10px 0;
}

.selection-text {
  margin-left: 0;
  margin-right: auto;
}
</style>
