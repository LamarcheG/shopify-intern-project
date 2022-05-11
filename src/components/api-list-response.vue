<template>
  <div class="api-list-response">
    <h1 v-show="responses.length != 0">Responses</h1>
    <ul v-for="response in responses" :key="response.id">
      <li>
        <api-response :response="response" />
      </li>
    </ul>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
  padding: 0;
}
h1 {
  font-family: Ubuntu-Bold;
  margin-top: 30px;
}
</style>
<script>
import apiResponse from "./api-response.vue";
export default {
  props: {
    responses: {
      type: Array,
      required: true,
    },
  },
  components: {
    apiResponse,
  },
};
</script>
