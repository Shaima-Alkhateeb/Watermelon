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

  <!-- :autoplay="3000" -->
  <!-- <Carousel  :wrap-around="true">
      <Slide v-for="slide in slides" :key="slide.id">
        <img :src="slide.imge" alt="image" class="carousel__item"/>
        <div class="image-overlay">
            <h1>FREE FREE PALESTINE</h1>
        </div>
      </Slide>
  
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
</Carousel> -->


  <!-- <div class="card flex justify-content-center">
        <Button label="Submit" />
    </div> -->

  <!-- <div class="car d">
    <Carousel :value="products" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
      <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2  p-3">
          <div class="mb-3">
            <div class="relative mx-auto">
              <img :src="slotProps.data.image"
                :alt="slotProps.data.name" class="w-full border-round" />
                <div class="image-overlay">
            <h1>FREE FREE PALESTINE</h1>
        </div>
          
            </div>
          </div>
      
        </div>
      </template>
    </Carousel>
  </div> -->
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import TheBanner from '../../components/layout/TheBanner.vue'

// import Carousel from 'primevue/carousel';
// import Tag from 'primevue/tag';

import { ref, onMounted } from "vue";
import { ProductService } from '../../service/ProductService.js';

// import Button from 'primevue/button';

import 'vue3-carousel/dist/carousel.css'
import palestine1 from '../../assets/img/palestine1.jpg';
import palestine2 from '../../assets/img/palestine2.jpg';
import palestine3 from '../../assets/img/palestine3.jpg';
import palestine4 from '../../assets/img/palestine4.jpg';
import palestine5 from '../../assets/img/palestine5.jpg';
import palestineFlag from '../../assets/img/palestineFlag.jpg';



export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    TheBanner,
    // Jerusalem
  },
  data() {
    return {
      // slides: [
      //   { id: 1, imge: 'https://muslimhands.org.uk/_ui/images/5b8ca1096750.jpg' },
      //   { id: 2, imge: palestine2 },
      //   { id: 3, imge: palestine3 },
      //   { id: 4, imge: palestine4 },
      //   { id: 5, imge: palestine5 },
      //   { id: 6, imge: palestineFlag },
      // ],
      // products: null,
      // // responsiveOptions: [
      //   {
      //     breakpoint: '1400px',
      //     numVisible: 2,
      //     numScroll: 1
      //   },
      //   {
      //     breakpoint: '1199px',
      //     numVisible: 3,
      //     numScroll: 1
      //   },
      //   {
      //     breakpoint: '767px',
      //     numVisible: 2,
      //     numScroll: 1
      //   },
      //   {
      //     breakpoint: '575px',
      //     numVisible: 1,
      //     numScroll: 1
      //   }
      // ]
    }
  },
  mounted() {
    ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 2)));
  },
  methods: {

  }
})
</script>

<style scoped>
.carousel__item {
  min-height: 100vh;

  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 0px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>