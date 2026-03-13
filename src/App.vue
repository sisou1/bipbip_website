<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <a class="skip-link" href="#main-content">Aller au contenu principal</a>
    <Header />
    <main id="main-content" class="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  outline: none;
}

.skip-link {
  position: absolute;
  top: -100px;
  left: 1rem;
  z-index: 1000;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: #1a1a1a;
  color: #fff;
  text-decoration: none;
}

.skip-link:focus {
  top: 1rem;
}
</style>
