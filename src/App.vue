<template>
  <div id="app">
    <div class="links">
      <router-link to="/" @tab-change="changeActiveTab">Home</router-link>
      <router-link to="businessDecision" @tab-change="changeActiveTab"
        >Business Decision</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style>
:root {
  --step--2: clamp(0.84rem, calc(0.63rem + 0.3vw), 0.69rem);
  --step--1: clamp(1.05rem, calc(0.74rem + 0.44vw), 0.83rem);
  --step-0: clamp(1rem, calc(0.87rem + 0.64vw), 1.31rem);
  --step-1: clamp(1.2rem, calc(1.02rem + 0.9vw), 1.64rem);
  --step-2: clamp(1.44rem, calc(1.19rem + 1.25vw), 2.05rem);
  --step-3: clamp(1.73rem, calc(1.39rem + 1.71vw), 2.56rem);
  --step-4: clamp(2.07rem, calc(1.61rem + 2.32vw), 3.2rem);
  --step-5: clamp(2.49rem, calc(1.87rem + 3.11vw), 4.01rem);
  --color-dark: #41591c;
  --color-main: #418c35;
  --color-light: #8abf39;
  --color-background: #16191b;
  --color-typography: #c9c9c9;
}

/* Source Sans Pro Regular */
@font-face {
  font-family: "SourceSansPro";
  src: url(./assets/SourceSansPro-Regular.ttf);
}
/* Source Sans Pro Italic */
@font-face {
  font-family: "SourceSansPro-Italic";
  src: url(./assets/SourceSansPro-Italic.ttf);
}
/* Source Sans Pro Bold */
@font-face {
  font-family: "SourceSansPro-Bold";
  src: url(./assets/SourceSansPro-Bold.ttf);
}
/* Ubuntu Regular */
@font-face {
  font-family: "Ubuntu";
  src: url(./assets/Ubuntu-Regular.ttf);
}
/* Ubuntu Medium */
@font-face {
  font-family: "Ubuntu-Medium";
  src: url(./assets/Ubuntu-Medium.ttf);
}
/* Ubuntu Italic */
@font-face {
  font-family: "Ubuntu-Italic";
  src: url(./assets/Ubuntu-Italic.ttf);
}
/* Ubuntu Bold */
@font-face {
  font-family: "Ubuntu-Bold";
  src: url(./assets/Ubuntu-Bold.ttf);
}
* {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  font-family: Ubuntu-Medium, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-background);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3 {
  color: var(--color-main);
}

h1 {
  font-size: var(--step-5);
}
h2 {
  font-size: var(--step-4);
}
h3 {
  font-size: var(--step-3);
}
h4 {
  font-size: var(--step-2);
}
h5 {
  font-size: var(--step-1);
}
p {
  font-family: SourceSansPro;
  font-size: var(--step-0);
  color: var(--color-typography);
}
i {
  font-family: Ubuntu-Italic;
}
strong {
  font-family: Ubuntu-Bold;
}
a {
  font-size: var(--step-0);
  color: var(--color-typography);
  margin-right: 20px;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.links {
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid black;
  padding-left: 10%;
}
.active {
  color: var(--color-main);
}
</style>
<script>
export default {
  name: "App",
  methods: {
    changeActiveTab(event) {
      const links = document.querySelectorAll(".links a");
      links.forEach((link) => {
        link.classList.remove("active");
      });
      console.log(event.target);
      event.target.classList.add("active");
    },
  },
};
</script>
