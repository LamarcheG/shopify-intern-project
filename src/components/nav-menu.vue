<template>
  <div class="links">
    <router-link to="/">Home</router-link>
    <router-link to="ShopifyQA">Shopify Q&A</router-link>
    <router-link to="storyMaker">Story Maker</router-link>
  </div>
</template>
<style scoped>
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
  padding-left: 10%;
  justify-content: left;
  background-color: #131516;
}
.router-link-exact-active {
  color: var(--color-main);
}
</style>
