<!-- Food.vue -->
<template>
    <the-banner>
        <template #image>
            <img class="image" alt="Palestine"
                src="https://cdn.tasteatlas.com/images/regions/f293fc54c7de4dd4a6b444f19c5dc2e7.jpg?mw=1900" />
        </template>
        <template #title>
            PALESTINE
        </template>
    </the-banner>

    <div class="container-around">
        <div class="flex flex-wrap-reverse justify-between py-2 2xl:m-12 sm:m-2 xs:m-2">
            <h2 class="">Most popular Palestinian dishes</h2>
            <IconField iconPosition="left">
                <InputIcon>
                    <i class="pi pi-search" />
                </InputIcon>
                <InputText v-model="searchKeyword" placeholder="Keyword Search" />
            </IconField>
        </div>

        <div
            class="grid justify-items-center 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-12">
            <Card v-for="item in filteredItems" :key="item.id" style="overflow: hidden" class="m-5 card-item">
                <template #header>
                    <div class="image-container">
                        <img alt="user header" :src="item.img ? item.img : '#'" class="image" />
                    </div>
                </template>
                <template #title>{{ item.name }}</template>
                <template #subtitle>
                    <p class="text-sm">{{ item.type }}</p>
                </template>
                <template #content>
                    <p class="m-0 ">
                        {{ item.desc }}
                        <TheSidebar :name="item?.name" :img="item?.img" :type="item?.type" :desc="item?.desc"
                            :ingredients="item?.ingredients" :fullDesc="item?.fullDesc"  :countries="item?.countries">
                        </TheSidebar>
                    </p>
                </template>
            </Card>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Card from 'primevue/card';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import TheBanner from '../components/layout/TheBanner.vue'
import Button from 'primevue/button';
import Sidebar from "primevue/sidebar";
import TheSidebar from './TheSidebar.vue'

import { items } from '../service/FoodData.js';

const searchKeyword = ref('');

const filteredItems = computed(() => {
    const keyword = searchKeyword.value.toLowerCase().trim();
    if (!keyword) return items.value;

    return items.value.filter(item =>
        item.name.toLowerCase().includes(keyword) ||
        item.type.toLowerCase().includes(keyword) ||
        item.desc.toLowerCase().includes(keyword)
    );
});

const publishedBooksMessage = computed(() => {
    return items.value[0].ingredients
})

const visibleRight = ref(false);

// const showSidebar = () => {
//     visibleRight.value = !visibleRight.value; 
// };
</script>

<style scoped>
</style>
