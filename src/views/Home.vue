<template>
  <div class="home">
    <form-response @submit-prompt="submit" />
    <api-list-response :responses="responses" />
  </div>
</template>

<style scoped>
.home {
  width: 80%;
  margin: 0 auto;
}
</style>

<script>
import apiListResponse from "../components/api-list-response.vue";
import formResponse from "../components/form-response.vue";
export default {
  name: "Home",
  data() {
    return {
      responses: [],
    };
  },
  components: {
    apiListResponse,
    formResponse,
  },
  methods: {
    submit(prompt) {
      this.responses.unshift({
        id: this.responses.length + 1,
        title: prompt,
        body: "This is the response to " + prompt,
      });
    },
  },
};
</script>
