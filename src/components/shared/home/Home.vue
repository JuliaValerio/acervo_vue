<template>
<div class="corpo">
    <h1 class="titulo">{{ titulo }}</h1>
    <input type="search" class="filtro"  placeholder="Pesquise aqui !" @input="filtro = $event.target.value"/>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in  fotosComFiltro" v-bind:key="foto.id">
          
          <meu-painel :titulo="foto.titulo">
            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
          </meu-painel>
      </li>
    </ul>
</div>
</template>


<script>
import Painel from '../painel/Painel'

export default {
  components: {
    'meu-painel': Painel
  },
  
  data() {
    return {
      titulo: "CATSgifs",
      fotos: [],
      filtro: ''
    };
  },

  computed: {

    fotosComFiltro() {

      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }

    }
  },

  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then(res => res.json())
      .then(fotos => (this.fotos = fotos), err => console.log(err));
  }
};
</script>


<style>

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .titulo {
    text-align: center;
  }


  .lista-fotos {
    list-style: none;
    margin: 20px;
    padding: 30px;
    
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .imagem-responsiva {
    width: 300px;
    height: 250px;
  }

    .filtro {
    display: block;
    width: 30%;
    padding: 10px;
    border-radius: 30px;
    border: 1px solid green;
    text-align: center;
    font-size: 16px;
  }

</style>
