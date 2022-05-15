<template>
  <div class="container-shopify">
    <form-response
      @submit-prompt="submit"
      title="Enter a question about Shopify's future employees:"
    ></form-response>
    <api-list-response :responses="responses" />
  </div>
</template>

<style scoped>
.container-shopify {
  width: 80%;
  margin: 0 auto;
}
</style>

<script>
import apiListResponse from "../components/api-list-response.vue";
import formResponse from "../components/form-response.vue";
import { bus } from "../main";
export default {
  name: "shopify-QA",
  data() {
    return {
      responses: [],
      key: "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",
    };
  },
  components: {
    apiListResponse,
    formResponse,
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
        prompt: `Write a text explaining why shopify should hire Guillaume as a front-end developer.`,
        temperature: 0.9,
        max_tokens: 256,
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
