<template>
  <div class="form-container">
    <textarea type="" v-model="prompt" />
    <button @click="submit">Submit</button>
  </div>
</template>
<style scoped>
.form-container {
  margin-top: 50px;
  border: 1px solid black;
  padding: clamp(10px, 3vh, 3em);
}
textarea {
  resize: vertical;
  width: 100%;
  height: 100px;
}
</style>

<script>
export default {
  name: "Home",
  data() {
    return {
      prompt: "",
    };
  },
  methods: {
    submit() {
      this.$emit("submit-prompt", this.prompt);
      this.prompt = "";
    },
  },
};
</script>
