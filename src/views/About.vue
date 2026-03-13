<template>
  <section class="about">
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
  </section>
</template>

<style scoped>
.about {
  flex: 1;
  min-height: calc(100vh - 82px);
  width: 100%;
  padding: 4rem 8rem;
}

h1 {
  margin-bottom: 3rem;
  color: var(--color-text-dark);
  font-size: 3rem;
}

.content {
  max-width: 900px;
}

p {
  margin-bottom: 1.5rem;
  color: #555;
  font-size: 1.2rem;
  line-height: 1.8;
}
</style>
