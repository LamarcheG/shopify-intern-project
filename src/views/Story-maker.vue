<template>
  <div class="container">
    <form-story-maker
      @submit-prompt="submit"
      title="Story Maker"
    ></form-story-maker>
    <api-list-response :responses="responses" />
  </div>
</template>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}
</style>

<script>
import apiListResponse from "../components/api-list-response.vue";
import formStoryMaker from "../components/form-story-maker.vue";
import { bus } from "../main";
export default {
  name: "story-maker",
  data() {
    return {
      responses: [],
      key: "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",
    };
  },
  components: {
    apiListResponse,
    formStoryMaker,
  },
  created() {
    //load responses from localStorage
    if (localStorage.getItem(`${this.$options.name}-responses`)) {
      this.responses = JSON.parse(
        localStorage.getItem(`${this.$options.name}-responses`)
      );
    }
  },
  methods: {
    async submit(prompt) {
      const data = {
        prompt: prompt,
        temperature: 0.9,
        max_tokens: 500,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      };

      const response = await fetch(
        "https://api.openai.com/v1/engines/text-curie-001/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.key}`,
          },
          body: JSON.stringify(data),
        }
      ).then((response) => response.json());
      this.responses.unshift({
        id: this.responses.length + 1,
        prompt: prompt,
        response: response.choices[0].text,
      });
      bus.$emit("finish-loading");
      localStorage.setItem(
        `${this.$options.name}-responses`,
        JSON.stringify(this.responses)
      );
    },
  },
};
</script>
