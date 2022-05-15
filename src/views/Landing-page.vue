<template>
  <div class="landing-page-container">
    <h1>
      <img src="../assets/shopify_glyph.png" alt="" /> Shopify Interview Helper
    </h1>
    <p>This is a tool to help you prepare for the Shopify interview.</p>
    <!-- explain tool -->
    <p>This tool will help you with:</p>
    <ul>
      <router-link to="General"><li>General questions</li></router-link>
      <router-link to="InterviewAnswers"
        ><li>Answer interview questions</li></router-link
      >
      <router-link to="ShopifyQA"
        ><li>Questions on future employees</li></router-link
      >
      <router-link to="storyMaker"><li>Making a backstory</li></router-link>
    </ul>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="661.1"
      viewBox="0 0 1440 661.1"
    >
      <path
        fill="rgb(0, 128, 96)"
        d="M1440 488c-19.3 4.3-39.2 8.6-60 13-174.2 36.5-228.8 288-467 76.2-153.6-136.6-424-22.8-660.4-5.8-130.2 9.3-252.6-75-252.6-75V0h1440"
      />
    </svg>
  </div>
</template>
<style scoped>
img {
  width: 60px;
  height: auto;
  margin-right: 15px;
}
h1 {
  display: flex;
  justify-content: center;
}
circle,
ellipse,
line,
path,
polygon,
polyline,
rect,
text {
  fill: #418c35 !important;
}
svg {
  transform: scaleX(2) rotate(180deg);
}
a {
  text-decoration: none;
}
li:hover {
  color: #616161;
  transform: translate(2px, 1px);
}
.landing-page-container {
  width: 80%;
  padding: 100px 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  padding-bottom: 0;
  overflow-x: hidden;
}
.landing-page-container h1 {
  text-align: center;
}
.landing-page-container p {
  text-align: center;
  font-size: var(--step-2);
  margin-top: 50px;
}
ul {
  margin-top: 30px;
  list-style: none;
}
ul li::before {
  content: "\2022";
  color: var(--color-light);
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
  font-style: normal;
}
li {
  font-size: var(--step-0);
  color: var(--color-typography);
  font-style: italic;
  padding: 5px 0px;
  transition: all 0.1s ease-in-out;
}
</style>

<script>
export default {
  name: "Landing-page",
};
</script>
