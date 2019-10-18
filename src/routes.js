import Home from './components/shared/home/Home.vue';
import Cadastro from './components/shared/cadastro/Cadastro.vue';

export const routes = [

    { path: '', component: Home, titulo: Home},
    { path: '/cadastro', component: Cadastro , titulo: Cadastro}

];