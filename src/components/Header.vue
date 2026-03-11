<template>
  <header class="header">
    <div class="container">
      <RouterLink to="/" class="logo">
        <div class="logo-placeholder">LOGO</div>
        <span class="logo-text">BipBip</span>
      </RouterLink>

      <nav class="nav">
        <RouterLink to="/products" class="products-button">Produits</RouterLink>
        <RouterLink to="/about" class="secondary-link">À propos</RouterLink>
        <RouterLink to="/contact" class="secondary-link">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.header {
  background-color: var(--color-header);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
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
  background-color: var(--color-accent-green);
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
  color: var(--color-text-white);
}

.nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.products-button {
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 0.75rem 2rem;
  background-color: var(--color-accent-green);
  border-radius: 8px;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
}

.products-button:hover {
  background-color: #66bb6a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
}

.secondary-link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  font-size: 1rem;
  transition: color 0.3s;
  padding: 0.5rem 1rem;
}
</style>
