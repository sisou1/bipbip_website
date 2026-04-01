<template>
  <section class="contact">
    <h1>Contact</h1>
    <p class="intro">
      Vous êtes sur la page de contact. Vous pouvez nous écrire pour toute question, remarque
      ou besoin d’aide, et nous ferons de notre mieux pour répondre dans les plus brefs délais.
    </p>

    <p v-if="status === 'success'" class="status status-success">Mail bien envoyé.</p>
    <p v-else-if="status === 'config-error'" class="status status-error">
      Configuration EmailJS incomplète. Vérifie les variables `VITE_EMAILJS_*` dans `.env`.
    </p>
    <p v-else-if="status === 'error'" class="status status-error">
      Impossible d’envoyer le mail pour le moment. Merci de réessayer.
    </p>

    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Nom</label>
        <input id="name" v-model.trim="form.name" type="text" name="name" placeholder="Votre nom" required>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model.trim="form.email" type="email" name="email" placeholder="votre@email.com" required>
      </div>

      <div class="form-group">
        <label for="subject">Sujet</label>
        <input id="subject" v-model.trim="form.subject" type="text" name="subject" placeholder="Sujet du message" required>
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model.trim="form.message" name="message" rows="6" placeholder="Votre message..." required></textarea>
      </div>

      <button type="submit" class="submit-btn" :disabled="isSubmitting">
        {{ isSubmitting ? 'Envoi...' : 'Envoyer' }}
      </button>
    </form>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const status = ref('idle')

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const EMAILJS_TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL || 'fabienkiefer24@gmail.com'

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}

const handleSubmit = async () => {
  status.value = 'idle'
  isSubmitting.value = true

  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    status.value = 'config-error'
    isSubmitting.value = false
    return
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          to_email: EMAILJS_TO_EMAIL,
          name: form.name,
          email: form.email,
          title: form.subject,
          message: form.message,
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`EmailJS request failed (${response.status}): ${errorText}`)
    }

    resetForm()
    status.value = 'success'
  } catch (error) {
    console.error(error)
    status.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact {
  flex: 1;
  min-height: calc(100vh - 82px);
  width: 100%;
  padding: 4rem 8rem;
}

h1 {
  margin-bottom: 0.75rem;
  color: var(--color-text-dark);
  font-size: 3rem;
}

.intro {
  max-width: 760px;
  margin-bottom: 1.25rem;
  color: #566779;
  font-size: 1.05rem;
}

.status {
  max-width: 600px;
  margin: 0 auto 1rem;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-weight: 600;
}

.status-success {
  border: 1px solid #8ee3af;
  background: #ecfff2;
  color: #1f7a43;
}

.status-error {
  border: 1px solid #f5b0b0;
  background: #fff1f1;
  color: #a12626;
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

.submit-btn:disabled {
  cursor: not-allowed;
  opacity: 0.75;
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

  .intro {
    font-size: 1rem;
  }

  .contact-form {
    padding: 1.25rem;
  }
}
</style>
