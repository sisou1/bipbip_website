<template>
  <header class="header">
    <div class="container">
      <RouterLink to="/" class="logo">
        <img :src="logoImg" alt="BipBip Logo" class="logo-img">
        <span class="logo-text">BipBip</span>
      </RouterLink>

      <nav class="nav">
        <RouterLink to="/products" class="products-button">Produits</RouterLink>
        <RouterLink to="/limites-legales" class="secondary-link">Limites légales</RouterLink>
        <RouterLink to="/about" class="secondary-link">À propos</RouterLink>
        <RouterLink to="/contact" class="secondary-link">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import logoImg from '../assets/logo.png'
</script>

<style scoped>
.header {
  width: 100%;
  padding: 1rem 0;
  background-color: var(--color-header);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
}

.logo {
  display: flex;
  gap: 1rem;
  align-items: center;
  color: inherit;
  text-decoration: none;
}

.logo-img {
  width: 70px;
  height: 70px;
  border-radius: 8px;
  object-fit: contain;
}

.logo-text {
  color: var(--color-text-white);
  font-size: 1.8rem;
  font-weight: 700;
}

.nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.products-button {
  padding: 0.75rem 2rem;
  border-radius: 8px;
  background-color: var(--color-accent-green);
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
  color: var(--color-text-white);
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
}

.products-button:hover {
  background-color: #66bb6a;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
  transform: translateY(-2px);
}

.secondary-link {
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.3s;
}
</style>
