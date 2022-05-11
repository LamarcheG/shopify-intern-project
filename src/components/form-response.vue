<template>
  <div class="form-container">
    <h2>Enter a prompt:</h2>
    <div class="input">
      <textarea type="" v-model="prompt" />
      <button @click="submit">Submit</button>
    </div>
  </div>
</template>
<style scoped>
h2 {
  font-family: Ubuntu-Bold;
  padding: 10px 0;
}
.form-container {
  margin-top: 50px;
}
textarea {
  resize: none;
  width: 100%;
  height: 100px;
  background-color: var(--color-typography);
  color: var(--color-dark);
  border-radius: 10px;
  padding: 5px;
  font-family: SourceSansPro;
  font-size: var(--step-0);
}
.input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  margin-top: 10px;
  padding: 5px 10px;
  border: 2px solid var(--color-light);
  border-radius: 10px;
  background-color: #131516;
  color: var(--color-typography);
  font-family: Ubuntu-Bold;
  font-size: clamp(1.5rem, 2vh, 2em);
  cursor: pointer;
}
button:hover {
  transform: scale(1.05);
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
