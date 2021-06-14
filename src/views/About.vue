<template>
  <HelloWorld msg="About" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'About',
  components: {
    HelloWorld,
  },
});
</script>
