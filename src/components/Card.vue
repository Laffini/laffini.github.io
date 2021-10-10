<template>
  <div class="card is-small">
    <div class="card-image">
      <figure class="image is-horizontal-center is-4by3">
        <img src="../assets/tomlafford.png" v-bind:alt="imageAlt" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ name }}</p>
          <p class="subtitle is-6">{{ jobTitle }}</p>
        </div>
      </div>

      <div class="content">
        {{ description }}
        <p class="mt-3">
          👨‍💻: <a target="_blank" rel="noopener" v-bind:href="gitHub">GitHub</a>
        </p>
        <p>
          🌐:
          <a target="_blank" rel="noopener" v-bind:href="linkedIn">LinkedIn</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    description: String,
    linkedIn: String,
    gitHub: String,
    name: String,
    jobTitle: String,
    imageAlt: String,
  },
};
</script>


