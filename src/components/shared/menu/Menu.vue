<template>
    <nav>
      <ul>       
          <li v-for="rota in rotas" :key="rota.id">
            <router-link :to="rota.path ? rota.path : '/'" >
              {{ rota.titulo }}
            </router-link>
          </li>
      </ul>
    </nav>
</template>

<script>

export default {

    props: {

        rotas: {
            type: Array,
            required: true
        }
    }
}

</script>

<style>
  nav{
    width: 100%;
    display: flex;
    background-color: rgba(72, 121, 8, 0.596);
    margin-bottom: 20px;
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  
  }

  li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: rgba(236, 236, 236, 0.877);
  color: rgb(116, 175, 111);
}

</style>