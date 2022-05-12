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
      key: `${process.env.VUE_APP_API_KEY}`,
    };
  },
  components: {
    apiListResponse,
    formResponse,
  },
  methods: {
    async submit(prompt) {
      const data = {
        prompt: prompt,
        temperature: 0.5,
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
    },
  },
};
</script>
