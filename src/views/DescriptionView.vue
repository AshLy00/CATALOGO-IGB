<script setup>
import DescriptionCard from "../components/product/DescriptionCard.vue";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { database } from "../database";

const route = useRoute();
const projectId = ref(route.params.projectId);
const selectedProject = ref(null);

// Fetch the data or set selectedProject here
onMounted(() => {
  selectedProject.value = database.find(
    (project) => project.id === projectId.value
  );
});

// Check if selectedProject is not null before accessing its properties
const SelectedProject = computed(() => {
  return selectedProject.value || {};
});
</script>
<template>
  <DescriptionCard :project="selectedProject" />
</template>
