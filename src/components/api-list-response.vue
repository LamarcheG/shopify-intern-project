<template>
  <div v-if="responses.length != 0" class="api-list-response">
    <transition-group name="slide" tag="ul">
      <li v-for="response in responses" :key="response.id">
        <api-response :response="response" />
      </li>
    </transition-group>
  </div>
</template>
<style scoped>
.api-list-response {
  opacity: 1;
  background-image: radial-gradient(
      #418c35 1.1500000000000001px,
      transparent 1.1500000000000001px
    ),
    radial-gradient(#418c35 1.1500000000000001px, #16191b 1.1500000000000001px);
  background-size: 46px 46px;
  background-position: 0 0, 23px 23px;
  margin-top: 50px;
  padding: 20px clamp(10px, 150px, 200px);
  border-radius: 75px;
}
ul {
  list-style: none;
  padding: 0;
}
/*slide in animation */
.slide-enter-active,
.slide-move {
  transition: all 0.5s;
}
.slide-enter {
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
