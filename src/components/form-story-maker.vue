<template>
  <div class="form-container">
    <h2>{{ title }}</h2>
    <form @submit.prevent="submit">
      <div class="length-story-container">
        <h5><label for="lengthOfStory">Length of the story:</label></h5>
        <div class="radio-value-list">
          <div class="radio-value">
            <label for="input-50">50 words</label>
            <input
              type="radio"
              name="lengthOfStory"
              id="input-50"
              v-model="lengthOfStory"
              value="50"
              required
            />
          </div>
          <div class="radio-value">
            <label for="input-100">100 words</label>
            <input
              type="radio"
              name="lengthOfStory"
              id="input-100"
              v-model="lengthOfStory"
              value="100"
              required
            />
          </div>
          <div class="radio-value">
            <label for="input-200">200 words</label>
            <input
              type="radio"
              name="lengthOfStory"
              id="input-200"
              v-model="lengthOfStory"
              value="200"
              required
            />
          </div>
        </div>
      </div>
      <div class="story-param-form">
        <div class="label-container">
          <label for="nameMainCharacter">Your name:</label>
          <label for="theme">Theme:</label>
        </div>
        <div class="input-container">
          <input
            type="text"
            name="nameMainCharacter"
            v-model="nameMainCharacter"
            placeholder="Name"
            required
          />
          <select name="theme" v-model="theme" required>
            <option value="" selected disabled hidden>Choose here</option>
            <option value="past employers">Past employers</option>
            <option value="current employer">Current employer</option>
            <option value="friends">Friends</option>
            <option value="family">Family</option>
            <option value="work experience">work experience</option>
          </select>
        </div>
      </div>
      <div v-if="loading" class="loader"></div>
      <button v-else type="submit">Submit</button>
    </form>
  </div>
</template>
<style scoped>
.loader {
  margin-top: 25px;
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
  text-align: center;
}
.form-container {
  margin-top: 50px;
  max-width: 800px;
  margin: auto;
}
.length-story-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.radio-value-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110px;
  padding: 10px;
}
.radio-value {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 2px;
}
.label-container,
.input-container {
  display: flex;
  flex-direction: column;
}
.label {
  text-align: right;
}
.story-param-form {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  margin: auto;
}
.input-container > input,
.label-container > label {
  width: 100%;
  margin: 10px 0;

  font-size: var(--step-0);
}
input[type="radio"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: var(--color-light);
  width: 1em;
  height: 1em;
  border: 0.1em solid currentColor;
  border-radius: 50%;
  display: grid;
  place-content: center;
}
input[type="radio"]::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--color-main);
}
input[type="radio"]:checked::before {
  transform: scale(1);
}
label {
  color: var(--color-typography);
  text-align: right;
}
input {
  outline: none;
  border: none;
  background-color: var(--color-typography);
  color: var(--color-dark);
  border-radius: 5px;
  padding: 1px 5px;
  font-family: SourceSansPro;
  font-size: var(--step-0);
}
select {
  outline: none;
  border: none;
  background-color: var(--color-typography);
  color: var(--color-dark);
  border-radius: 5px;
  padding: 1px 5px;
  font-family: SourceSansPro;
  font-size: var(--step-0);
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
  width: 50%;
  margin-top: 25px;
}
button:hover {
  transform: scale(1.02);
  border-radius: 15px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

<script>
import { bus } from "../main";
export default {
  name: "Home",
  data() {
    return {
      theme: "",
      lengthOfStory: 0,
      nameMainCharacter: "",
      loading: false,
    };
  },
  props: {
    title: {
      type: String,
      default: "Enter a prompt",
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
  computed: {
    prompt: {
      get() {
        return `Write a story about ${
          this.nameMainCharacter.charAt(0).toUpperCase() +
          this.nameMainCharacter.slice(1)
        } and his ${this.theme}. The story must be minimum ${
          this.lengthOfStory
        } words long.`;
      },
      set() {
        return "";
      },
    },
  },
};
</script>
