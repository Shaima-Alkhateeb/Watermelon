<template>
  <!-- hero component -->
      <the-banner isHero titleHero>
        <template #image>
            <img class="image" alt="Palestine"
                src="../../assets/img/hero/Jerusalem.jpg" />
        </template>
        <template #title>
            PALESTINE
        </template>
    </the-banner>
    <!-- <div style="height: 5rem; background-color: #be9174;">
      <p></p>
    </div> -->

    <div style="height: 20rem; background-color: #be9174;">
      <p class="text-center text-2xl pt-28">The page is under construction ...</p>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import TheBanner from '../../components/layout/TheBanner.vue'
import { ref, onMounted } from "vue";
// import { ProductService } from '../../service/ProductService.js';
// import Button from 'primevue/button';


import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Basic',
  components: {
    TheBanner,
  },
  data() {
    return {
    }
  },
  mounted() {
    // ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 2)));
  },
  methods: {

  }
})
</script>

<style scoped>
</style>