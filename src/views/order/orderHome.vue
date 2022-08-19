<script setup lang="ts">
import { onMounted } from "vue";
onMounted(() => {
  console.log("order");
});
</script>
<template>
  <div>
    order
    <RouterView />
  </div>
</template>
