<template>
  <div id="app">
    <div class="columns pt-5">
      <div class="column is-center is-4 is-offset-4">
        <Card
          :jobTitle="job"
          :name="name"
          :description="description"
          :gitHub="gitHubUrl"
          :linkedIn="linkedInUrl"
          :imageAlt="imageAlt"
          :imgSrc="imgSrc"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import "bulma/css/bulma.css";

export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      linkedInUrl: "https://www.linkedin.com/in/thomas-lafford/",
      gitHubUrl: "https://github.com/Laffini",
      name: "Tom Lafford",
      job: "Software Engineer",
      description: `Multi-disciplined Software Engineer working at BAE Systems.
          Graduate with a BSc (Hons) in Software Engineering from the University of
          Central Lancashire.`,
      imageAlt: "A picture of Tom Lafford",
      imgSrc: "../assets/tomlafford.png",
    };
  },
};
</script>

<style>
html {
  background-color: #85dcba;
}
</style>