<template>
  <v-app-bar color="primary" :elevation="2">
    <v-app-bar-title>My Contacts</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-magnify"></v-btn>

      <v-menu location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon="mdi-dots-vertical"></v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>Lixeira</v-list-item-title>
            <v-list-item-title>Configurações</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts"></script>
