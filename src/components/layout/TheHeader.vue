
<template>
    <div class="card">
        <Menubar :model="items">
            <template #start>
                <div class="flex">
                    <img width="35" height="35" :src="imageUrlRef" alt="Logo Image"/>
                    <!-- <p class="mt-1">Watermelon</p> -->
                </div>
            </template>
            <!-- <template #end>
                <i class="pi pi-bars" style="cursor: pointer;"></i> 
            </template> -->
            <template #item="{ item, props, hasSubmenu, root }">
                <a v-ripple class="flex align-items-center p-menubar-end" v-bind="props.action">
                    <span :class="item.icon" />
                    <router-link :to="item.path ? item.path : '#' " style="text-decoration: none;">

                        <span class="ml-2">{{ item.label }}</span>
                    </router-link>
                    <!-- <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" /> -->
                    <!-- <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span> -->
                    <!-- <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i> -->
                </a>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Menubar from 'primevue/menubar';
import Badge from 'primevue/badge';

import imageUrl from '../../assets/img/watermelon.png';

const imageUrlRef = ref(imageUrl);
const items = ref([
    {
        label: 'Home',
        path:  '/',
        // icon: 'pi pi-home'
    },
    // {
    //     label: 'Martyrs',
    //     path:  '/martyrs',
    //     // icon: 'pi pi-home'
    // },
    {
        label: 'History',
        path: '/history'
        // icon: 'pi pi-star'
    },
    {
        label: 'Food',
        path: '/food'
        // icon: 'pi pi-star'
    },
    {
        label: 'Clothe',
        path: '/clothe'
        // icon: 'pi pi-star'
    },
    {
        label: 'Movie',
        path: '/movie'
        // icon: 'pi pi-star'
    },
]);
</script>
