<template>
  <div id="app">
    <div class="columns pt-5">
      <div class="column is-center is-4 is-offset-4">
        <Card
          :jobTitle="job"
          :name="name"
          :description="description"
          :email="email"
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
      email: "tom&commat;laffyco&period;net",
      name: "Tom Lafford",
      job: "Aerospace Software Development Engineer",
      description: `Multi-disciplined apprentice Software Engineer. Working at BAE Systems
          and studying a BSc (Hons) in Software Engineering from the University of
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