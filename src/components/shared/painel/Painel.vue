<template>
        <div class="painel">
          <h2 class="painel-titulo" @click="visivel = !visivel">{{ titulo }}</h2>
          <transition name="painel-fade">
          <div class="painel-conteudo" v-show="visivel">
          <slot></slot>
          </div><!-- fim painel-corpo -->
          </transition>
        </div> <!-- fim painel -->
       
</template>

<script>
export default {

    props: ['titulo'],
    
    data() {
        return {
            visivel: true
        }
    }
}
</script>

<style scoped>

  /* estilo do painel */ 

   .painel {
    max-width: 700px;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin:15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
  }

  .painel .painel-titulo {
    font-size: 26px;
    color: #ffffff;
    margin-top: 5px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 5px 2px 5px rgba(175, 60, 60, 0.267);
    width: 90%;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(72, 121, 8, 0.596);;
  }

  .painel-fade-enter, .painel-fade-leave-active{
      opacity: 0;

  }

  .painel-fade-enter-active, .painel-fade-leave-active{
      transition: opacity .4s;
  }
</style>