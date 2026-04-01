<template>
  <header class="header">
    <div class="container">
      <RouterLink to="/" class="logo" @click="closeMenu">
        <img :src="logoImg" alt="BipBip Logo" class="logo-img">
        <span class="logo-text">BipBip</span>
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen.toString()"
        aria-controls="main-nav"
        aria-label="Ouvrir le menu"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav id="main-nav" class="nav" :class="{ 'nav-open': isMenuOpen }">
        <RouterLink to="/products" class="products-button" @click="closeMenu">Produits</RouterLink>
        <RouterLink to="/limites-legales" class="secondary-link" @click="closeMenu">Limites légales</RouterLink>
        <RouterLink to="/contact" class="secondary-link" @click="closeMenu">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import logoImg from '../assets/logo.png'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
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
  gap: 1rem;
  padding: 0 4rem;
}

.logo {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  color: inherit;
  text-decoration: none;
}

.logo-img {
  width: 56px;
  height: 56px;
  border-radius: 8px;
  object-fit: contain;
}

.logo-text {
  color: var(--color-text-white);
  font-size: 1.6rem;
  font-weight: 700;
}

.menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 0.4rem;
}

.menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  margin: 4px 0;
  background: var(--color-text-white);
}

.nav {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.products-button {
  padding: 0.65rem 1.5rem;
  border-radius: 8px;
  background-color: var(--color-accent-green);
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
  color: var(--color-text-white);
  font-size: 1.05rem;
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
  padding: 0.5rem 0.7rem;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;
}

.secondary-link:hover {
  color: var(--color-text-white);
}

@media (max-width: 900px) {
  .container {
    padding: 0 1rem;
  }

  .menu-toggle {
    display: block;
  }

  .nav {
    position: absolute;
    top: 84px;
    left: 0;
    right: 0;
    z-index: 20;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    background-color: var(--color-header);
    padding: 1rem;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  }

  .nav-open {
    display: flex;
  }

  .products-button,
  .secondary-link {
    width: 100%;
    text-align: center;
  }
}

@media (min-width: 901px) {
  .container {
    padding: 0 4rem;
  }
}
</style>
