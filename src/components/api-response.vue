<template>
  <div class="api-response">
    <p v-for="(value, name, index) in response" :key="index">
      {{ name }}: {{ value }}
    </p>
  </div>
</template>
<style scoped>
div {
  border: 1px solid black;
  color: var(--color-typography);
  border-top: 0.5px solid rgb(70, 70, 70);
  border-left: 0.5px solid rgb(70, 70, 70);
  padding: clamp(10px, 3vh, 3em);
  background-color: #131516;
  box-shadow: 6px 6px 12px 1px #0e0e0e, inset 4px 4px 6px -3px #414141;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  margin: 15px 0;
}
p {
  margin: 0;
  padding: 0;
}
</style>
<script>
export default {
  props: {
    response: {
      type: Object,
      required: true,
    },
  },
};
</script>
