// Este arquivo é o ponto de entrada principal do aplicativo Vue.js. Ele importa os estilos globais, cria a instância do aplicativo, configura o roteamento e monta o aplicativo na página HTML. O main.js é essencial para iniciar a aplicação e garantir que todos os componentes e rotas estejam corretamente configurados para serem usados em toda a aplicação.

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')


