<template>
  <div class="contact">
    <h1>Contact</h1>
    <form class="contact-form">
      <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" id="name" name="name" placeholder="Votre nom" required>
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="votre@email.com" required>
      </div>
      
      <div class="form-group">
        <label for="subject">Sujet</label>
        <input type="text" id="subject" name="subject" placeholder="Sujet du message" required>
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="6" placeholder="Votre message..." required></textarea>
      </div>
      
      <button type="submit" class="submit-btn">Envoyer</button>
    </form>
  </div>
</template>

<script setup>
</script>

<style scoped>
.contact {
  flex: 1;
  width: 100%;
  padding: 4rem;
  min-height: calc(100vh - 82px);
}

h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

input,
textarea {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.1);
}

textarea {
  resize: vertical;
}

.submit-btn {
  background-color: #42b983;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
}

.submit-btn:hover {
  background-color: #35a372;
}
</style>
