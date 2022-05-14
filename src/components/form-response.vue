<template>
  <div class="form-container">
    <h2>{{ title }}</h2>
    <form @submit.prevent="submit">
      <div class="input">
        <textarea
          type=""
          v-model="prompt"
          placeholder="Enter prompt here:"
          required
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
h2 {
  font-family: Ubuntu-Bold;
  padding: 10px 0;
  margin-top: 75px;
}
.form-container {
  margin-top: 50px;
  max-width: 800px;
  margin: auto;
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
  outline: none;
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
  transition: all 0.2s ease-in-out;
}
button:hover {
  transform: scale(1.05);
  border-radius: 15px;
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
  props: {
    title: {
      type: String,
      default: "Enter a prompt:",
    },
  },
  methods: {
    submit() {
      this.$emit("submit-prompt", this.prompt);
      this.prompt = "";
    },
  },
};
</script>
