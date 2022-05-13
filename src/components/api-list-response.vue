<template>
  <div class="api-list-response">
    <h2 v-show="responses.length != 0">Responses</h2>
    <transition-group name="slide" tag="ul">
      <li v-for="response in responses" :key="response.id">
        <api-response :response="response" />
      </li>
    </transition-group>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
  padding: 0;
}
h2 {
  font-family: Ubuntu-Bold;
  margin-top: 30px;
}
/*slide in animation */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100px);
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
