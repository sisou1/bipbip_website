<template>
  <section class="contact">
    <h1>Contact</h1>
    <form class="contact-form">
      <div class="form-group">
        <label for="name">Nom</label>
        <input id="name" type="text" name="name" placeholder="Votre nom" required>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" name="email" placeholder="votre@email.com" required>
      </div>

      <div class="form-group">
        <label for="subject">Sujet</label>
        <input id="subject" type="text" name="subject" placeholder="Sujet du message" required>
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="6" placeholder="Votre message..." required></textarea>
      </div>

      <button type="submit" class="submit-btn">Envoyer</button>
    </form>
  </section>
</template>

<style scoped>
.contact {
  flex: 1;
  min-height: calc(100vh - 82px);
  width: 100%;
  padding: 4rem 8rem;
}

h1 {
  margin-bottom: 2rem;
  color: var(--color-text-dark);
  font-size: 3rem;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  border-radius: 8px;
  background: #f9f9f9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

label {
  margin-bottom: 0.5rem;
  color: var(--color-text-dark);
  font-size: 1rem;
  font-weight: 600;
}

input,
textarea {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: var(--color-accent-green);
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.1);
  outline: none;
}

textarea {
  resize: vertical;
}

.submit-btn {
  margin-top: 1rem;
  border: none;
  border-radius: 4px;
  background-color: var(--color-accent-green);
  color: var(--color-text-white);
  cursor: pointer;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #35a372;
}

@media (max-width: 900px) {
  .contact {
    padding: 2rem 1.25rem;
  }

  h1 {
    font-size: 2.2rem;
  }

  .contact-form {
    padding: 1.25rem;
  }
}
</style>
