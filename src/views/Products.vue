<template>
  <section class="products">
    <h1>Nos produits</h1>
    <div class="products-grid">
      <article class="product-card">
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
      </article>

      <article class="product-card">
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
      </article>

      <article class="product-card">
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
      </article>
    </div>
  </section>
</template>

<style scoped>
.products {
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

.products-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.product-card {
  display: flex;
  min-height: 400px;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}

.product-image {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
}

.placeholder {
  padding: 2rem;
  color: #999;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
}

.product-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
}

.product-info h2 {
  margin-bottom: 1.5rem;
  color: var(--color-text-dark);
  font-size: 2rem;
}

.product-info p {
  color: #555;
  font-size: 1.1rem;
  line-height: 1.8;
}
</style>
