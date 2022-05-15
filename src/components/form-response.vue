<template>
  <div class="container">
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
          <div v-if="loading" class="loader"></div>
          <button v-else type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  background: linear-gradient(45deg, #418c35, #235d1b, #10350b);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
}
.loader {
  margin-top: 10px;
  border: 8px solid var(--color-typography);
  border-top: 8px solid var(--color-light);
  border-radius: 50%;
  width: 15px;
  height: 15px;
  animation: spin 2s ease-in-out infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
h2 {
  font-family: Ubuntu-Bold;
  padding: 10px 0;
  margin-top: 75px;
  color: var(--color-background);
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
  color: var(--color-background);
  border-radius: 10px;
  padding: 5px;
  font-family: SourceSansPro;
  font-size: var(--step-0);
  outline: none;
  border: 3px solid var(--color-light);
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
  background-color: var(--color-background);
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
import { bus } from "../main";
export default {
  name: "Home",
  data() {
    return {
      prompt: "",
      loading: false,
    };
  },
  props: {
    title: {
      type: String,
      default: "Enter a question:",
    },
  },
  created() {
    bus.$on("finish-loading", () => {
      this.loading = false;
    });
  },
  methods: {
    submit() {
      this.$emit("submit-prompt", this.prompt);
      this.loading = true;
      this.prompt = "";
    },
  },
};
</script>
