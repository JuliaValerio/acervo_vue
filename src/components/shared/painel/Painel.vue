
<template>
    <div class="painel">
        <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>
        <transition name="painel-fade">
            <div class="painel-conteudo" v-show="visivel">
                <slot></slot>
            </div>
        </transition>
    </div>
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
   .painel {
    padding: 20px;
    margin: 20px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 300px;
    height: 500px;
    vertical-align: top;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .painel .painel-titulo {
    font-size: 26px;
    color: #ffffff;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    width: 90%;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(72, 121, 8, 0.596);    
    text-transform: uppercase;
  }

 .painel-fade-enter, .painel-fade-leave-active {

   opacity: 0;
  }

 .painel-fade-enter-active, .painel-fade-leave-active {

    transition: opacity .4s;
   }

 .painel-conteudo {
    overflow: hidden;
 }

</style>