<template>
  <header class="header">
    <div class="container">
      <RouterLink to="/" class="logo">
        <div class="logo-placeholder">LOGO</div>
        <span class="logo-text">BipBip</span>
      </RouterLink>

      <nav class="nav">
        <RouterLink to="/about">À propos</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  width: 100%;
}

.container {
  width: 100%;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
}

.logo-placeholder {
  width: 50px;
  height: 50px;
  background-color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50;
}

.nav {
  display: flex;
  gap: 3rem;
}

.nav a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s;
  padding: 0.5rem 1rem;
}

.nav a:hover,
.nav a.router-link-active {
  color: #42b883;
}
</style>
