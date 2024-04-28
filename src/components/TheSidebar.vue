<template>
    <Sidebar v-model:visible="visibleRight" :header="name" position="right">
        <div class="flex justify-between">
            <p class="text-gray-500 mb-5 mt-6">{{ type }}</p>
            <div class="card flex justify-content-center">
                <div class="flex flex-col">
                    <Dropdown v-mode l="selectedCountry" :options="countries" optionLabel="name"
                        placeholde r="Palestine and " class="w-full md:w-14rem">
                        <template #value="slotProps">
                            <div v-if="slotProps.value" class="flex align-items-center">
                                <img :alt="slotProps.value.label"
                                    src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                    :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 35px" />
                                <div>{{ slotProps.value.name }}</div>
                            </div>
                            <span v-else class="flag flag-eh"></span>
                        </template>
                        <template #option="slotProps">
                            <div class="flex align-items-center">
                                <img v-if="slotProps?.option?.code" :alt="slotProps.option.label"
                                    src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                    :class="`mr-2 flag flag-${slotProps?.option?.code?.toLowerCase()}`" style="width: 35px" />
                                <div>{{ slotProps.option.name }}</div>
                            </div>
                        </template>
                    </Dropdown>
                    <p v-if="countries" class=" mb-3 text-xs text-gray-500">and other countries</p>
                </div>
            </div>
        </div>

        <img :alt="name" :src="img ? img : '#'" class="rounded-md" />
        <p v-html="fullDesc"></p>
        <hr>
        <h3 class="mt-5 text-lg font-medium">Ingredients:</h3>
        <div class="mt-3 flex flex-row flex-wrap">
            <div v-for="ingredient in ingredients" :key="ingredient.id" class="flex flex-col items-center mr-5">
                <div class="flex flex-row items-center">
                    <div>
                        <img :alt="ingredient.name" :src="ingredient.img ? ingredient.img : '#'"
                            class="rounded-md min-h-12"
                            :class="ingredient.name !== 'Black seed paste' ? 'w-12' : 'w-7'" />
                        <p class="text-center mb-2">{{ ingredient.name }}</p>
                    </div>
                    <p v-if="ingredient.isOr" class="ml-2 mt-5 text-xs text-slate-400">
                        OR
                    </p>
                </div>
            </div>
        </div>
        <!-- <hr> -->
        <!-- <h3 class="mt-5 text-lg font-medium">Some articles/videos to learn how to make it:</h3>
        <ul v-for="ref in refs" :key="ref.id" class="list-decimal">
            <li class="mx-5 my-3">
                <a :href="ref.link"  class="underline"> {{ ref.link }}</a>
            </li>
        </ul> -->
    </Sidebar>
    <a class="text-gray-300 cursor-pointer" @click="visibleRight = true">READ MORE</a>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "primevue/sidebar";
// import Button from "primevue/button";

import Dropdown from 'primevue/dropdown';

defineProps({
    name: String,
    type: String,
    desc: String,
    fullDesc: String,
    img: String,
    ingredients: Array,
    refs: Array,
    countries: Array
});

const visibleRight = ref(false);

const selectedCountry = ref();
</script>

<style scoped></style>
