<template>
  <section class="home">
    <div class="hero">
      <h1>BipBip</h1>
      <p>Des rappels simples pour vous aider à garder le rythme de vos prises de médicaments.</p>
    </div>

    <div class="about-block">
      <h2>À propos de BipBip</h2>
      <div class="content">
        <p>
          BipBip est un projet innovant qui vise à faciliter la prise de médicaments au quotidien grâce à des solutions personnalisées et connectées.
        </p>
        <p>
          Notre mission est de créer des dispositifs intelligents sous forme de bracelets et de colliers qui vous rappellent de prendre vos médicaments aux moments appropriés, vous aidant ainsi à maintenir votre traitement de manière régulière et efficace.
        </p>
        <p>
          Chaque dispositif BipBip est conçu pour être à la fois fonctionnel et élégant, s'adaptant parfaitement à votre style de vie tout en veillant à votre santé.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3rem;
  min-height: calc(100vh - 82px);
  width: 100%;
  padding: 4rem 8rem;
}

.hero {
  max-width: 900px;
}

h1 {
  color: var(--color-text-dark);
  font-size: clamp(2.2rem, 7vw, 4rem);
  line-height: 1.1;
}

.hero p {
  margin-top: 0.8rem;
  color: #516273;
  font-size: clamp(1rem, 2.8vw, 1.25rem);
}

.about-block h2 {
  margin-bottom: 1.25rem;
  color: var(--color-text-dark);
  font-size: clamp(1.7rem, 5vw, 2.5rem);
}

.content {
  max-width: 900px;
}

.content p {
  margin-bottom: 1rem;
  color: #555;
  font-size: 1.05rem;
  line-height: 1.75;
}

@media (max-width: 900px) {
  .home {
    padding: 2rem 1.25rem;
    gap: 2.5rem;
  }
}
</style>
