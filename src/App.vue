<template>
  <Card/>
  <footer class="fixed flex gap-2 text-sm font-bold bottom-4 text-desaturated-blue ">
    <p>Challenge by <a href="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj" target="_blank">Frontend Mentor</a></p> 
    <p>Coded by <a href="https://www.instagram.com/sightsaming/" target="_blank">KUNLAKARN</a></p>
  </footer>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style>
@media (min-width: 375px) {
    body {
      background: url("./assets/pattern-background-mobile.svg");
      background-position: top left;
      background-repeat: no-repeat, no-repeat;
    }
  }
  
  @media (min-width: 1440px) {
    body {
      background: url("./assets/pattern-background-desktop.svg");
      background-position: top left;
      background-repeat: no-repeat, no-repeat;
    }
  }
</style>