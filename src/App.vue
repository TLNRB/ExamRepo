<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
/*----- Store Handling -----*/
import { useStoreNotes } from "./stores/storeNotes";
const storeNotes = useStoreNotes();

onMounted(() => {
  storeNotes.getNotes();
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
