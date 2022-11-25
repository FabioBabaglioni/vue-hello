

// inizio base per integrare vue
const { createApp } = Vue

  createApp({
    data() {
      return {
        // scrivo il messaggio che andrà stampato nelll'h1
        messaggio: 'Ciao a tutti!!!'
      }
    }
  }).mount('#app')

