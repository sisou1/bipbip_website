<template>
  <div class="products">
    <h1>Nos Produits</h1>
    <div class="products-grid">
      <div class="product-card">
        <div class="product-image">
          <div class="placeholder">IMAGE BRACELET</div>
        </div>
        <div class="product-info">
          <h2>Bracelet BipBip</h2>
          <p>
            Un bracelet connecté élégant qui vibre discrètement pour vous rappeler
            de prendre vos médicaments. Résistant à l'eau et personnalisable selon
            vos préférences de couleur.
          </p>
        </div>
      </div>

      <div class="product-card">
        <div class="product-image">
          <div class="placeholder">IMAGE COLLIER</div>
        </div>
        <div class="product-info">
          <h2>Collier BipBip</h2>
          <p>
            Un pendentif connecté discret et raffiné qui combine style et fonctionnalité.
            Parfait pour ceux qui préfèrent porter un accessoire autour du cou.
            Disponible en plusieurs designs.
          </p>
        </div>
      </div>

      <div class="product-card">
        <div class="product-image">
          <div class="placeholder">IMAGE MONTRE</div>
        </div>
        <div class="product-info">
          <h2>Montre BipBip</h2>
          <p>
            Une montre intelligente complète avec écran tactile qui affiche vos rappels
            et suit votre observance. Synchronisation automatique avec votre smartphone
            pour un suivi optimal.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.products {
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

.products-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.product-card {
  display: flex;
  width: 100%;
  min-height: 400px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.product-image {
  flex: 1;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder {
  font-size: 1.5rem;
  font-weight: bold;
  color: #999;
  padding: 2rem;
  text-align: center;
}

.product-info {
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-info h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-dark);
}

.product-info p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}
</style>
