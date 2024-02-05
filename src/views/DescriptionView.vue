<script setup>
import DescriptionCard from "../components/product/DescriptionCard.vue";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { database } from "../database";

const route = useRoute();
const projectId = ref(route.params.projectId);
const selectedProject = ref(null);

onMounted(async () => {
  await fetchData();
});

watch(
  () => route.params.projectId,
  async () => {
    projectId.value = route.params.projectId;
    await fetchData();
  }
);

const fetchData = async () => {
  try {
    selectedProject.value = await fetchProjectData(projectId.value);
  } catch (err) {
    console.error(err);
  }
};

const fetchProjectData = async (projectId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(database); // Log the entire database for inspection
      const project = database.find((p) => String(p.id) === String(projectId));
      if (project) {
        resolve(project);
      } else {
        console.error(`Project with ID ${projectId} not found`);
        reject(new Error("Project not found"));
      }
    }, 1000); // Simulating a delay, replace with your actual fetching code
  });
};

onMounted(() => {
  console.log(route.params);
  fetchData();
});
</script>

<template>
  <div class="container_description_view">
    <DescriptionCard :project="selectedProject" />
  </div>
</template>

<style scooped>
.container_description_view {
  width: 85%;
}
</style>
