<template>
  <div class="api-response">
    <div>
      <h5>Prompt</h5>
      <p>{{ response.prompt }}</p>
    </div>
    <div>
      <h5>Response</h5>
      <p>{{ response.response }}</p>
    </div>
  </div>
</template>
<style scoped>
.api-response {
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
  margin: 30px 0;
}
p {
  margin: 0;
  padding: 4px;
}
h5 {
  color: var(--color-light);
  font-family: SourceSansPro-Italic;
  padding: 4px;
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
