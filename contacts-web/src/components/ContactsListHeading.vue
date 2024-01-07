<template>
  <div class="wrapper">
    <div class="headings" v-if="!picking.length">
      <p>Name</p>
      <p class="phone-column">Phone</p>
      <p class="email-column">E-mail</p>
    </div>
    <div v-if="picking.length > 0" class="header-actions">
      <v-menu location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" variant="outlined" color="primary">
            <v-icon
              :icon="
                allSelected ? 'mdi-checkbox-marked' : 'mdi-minus-box-outline'
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
      <p>
        <strong>{{ picking.length }}</strong> contact{{
          picking.length > 1 ? 's' : ''
        }}
        selected
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  picking: number[]
  clearSelection: () => void
  selectAll: () => void
  allSelected: boolean
}

const { picking, selectAll, clearSelection } = defineProps<Props>()
</script>

<style scoped>
.wrapper {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin: 0 20px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 10px 0;
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
