<template>
  <div class="links">
    <router-link class="logo" to="/"
      ><img src="../assets/shopify_logo_white.png" alt="logo"
    /></router-link>
    <router-link to="General">General</router-link>
    <router-link to="InterviewAnswers">Interview Answers</router-link>
    <router-link to="ShopifyQA">About Shopify employees</router-link>
    <router-link to="storyMaker">Backstory maker</router-link>
  </div>
</template>
<style scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 100px;
  height: auto;
}
a {
  font-size: var(--step-0);
  color: var(--color-typography);
  margin-right: 20px;
  text-decoration: none;
}
a:hover {
  color: #aaa8a8;
}
.links {
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid black;
  padding-left: 40px;
  justify-content: left;
  background-color: #131516;
}
.router-link-exact-active {
  color: var(--color-main);
}
</style>
