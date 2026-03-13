<template>
  <div class="about">
    <h1>À propos de BipBip</h1>
    <div class="content">
      <p>
        BipBip est un projet innovant qui vise à faciliter la prise de médicaments
        au quotidien grâce à des solutions personnalisées et connectées.
      </p>
      <p>
        Notre mission est de créer des dispositifs intelligents sous forme de bracelets
        et de colliers qui vous rappellent de prendre vos médicaments aux moments appropriés,
        vous aidant ainsi à maintenir votre traitement de manière régulière et efficace.
      </p>
      <p>
        Chaque dispositif BipBip est conçu pour être à la fois fonctionnel et élégant,
        s'adaptant parfaitement à votre style de vie tout en veillant à votre santé.
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about {
  flex: 1;
  width: 100%;
  padding: 4rem 8rem;
  min-height: calc(100vh - 82px);
}

h1 {
  font-size: 3rem;
  margin-bottom: 3rem;
  color: var(--color-text-dark);
}

.content {
  max-width: 900px;
}

p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
}
</style>


