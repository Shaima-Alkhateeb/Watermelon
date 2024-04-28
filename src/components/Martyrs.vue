<template>
    <div class="container-around">

        <div class="flex flex-wrap-reverse justify-between mt-5">
            <label class="label-style">Martyrs of Palestine - Taufan Al Aqsa</label>
            <IconField iconPosition="left">
                <InputIcon>
                    <i class="pi pi-search" />
                </InputIcon>
                <InputText v-model="searchKeyword" placeholder="Keyword Search" />
            </IconField>
        </div>
    
        <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 ">
    
            <Card v-for="item in filteredItems" :key="item.id" style="width: 17rem; overflow: hidden" class="m-5">
                <template #header>
                    <div class="image-container">
                        <img alt="user header" :src="item.img" class="image" />
                    </div>
                </template>
                <template #title>{{ item.name }}</template>
                <template #subtitle>{{ item.date }} , {{ item.place }}</template>
                <template #content>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </template>
                <template #footer>
                    <div class="flex gap-3 mt-1">
                        <Button label="Cancel" severity="secondary" outlined class="w-full" />
                        <Button label="Save" class="w-full" />
                    </div>
                </template>
            </Card>
        </div>
    </div>

    <div class="card mb-5">
        <!-- <Paginator :rows="5" :totalRecords="items.length" :rowsPerPageOptions="[10, 30, 50,100]"></Paginator> -->
        <Paginator :rows="rowsPerPage" :totalRecords="filteredItems.length" :rowsPerPageOptions="rowsPerPageOptions" @pageChange="onPageChange" />

    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Card from 'primevue/card';
import Button from 'primevue/button';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Paginator from 'primevue/paginator';

import GazaChild1Img from '../assets/img/GazaChild1.jpg';

import HindRajabImg from '../assets/img/HindRajab.jpg';
import MohamedAhmedMohamedKhadourImg from '../assets/img/MohamedAhmedMohamedKhadour.jpg';
import MoazAshrafFalihBaniShamsaImg from '../assets/img/MoazAshrafFalihBaniShamsa.jpg';
import MoatasemAliMuhammadHusseinAliImg from '../assets/img/MoatasemAliMuhammadHusseinAli.jpg';

const HindRajab = ref(HindRajabImg);
const MohamedAhmedMohamedKhadour = ref(MohamedAhmedMohamedKhadourImg);
const MoazAshrafFalihBaniShamsa = ref(MoazAshrafFalihBaniShamsaImg);
const MoatasemAliMuhammadHusseinAli = ref(MoatasemAliMuhammadHusseinAliImg);

const GazaChild1 = ref(GazaChild1Img);
const searchKeyword = ref('');
const rowsPerPage = ref(10);
const rowsPerPageOptions = [10, 30, 50, 100];

const items = ref([
    {
        id: 1,
        name: 'Hind Rajab 1',
        img: HindRajab,
        age: '5 years',
        place: 'Gaza',
        date: '2024-02-10'
    },
    {
        id: 2,
        name: 'Mohamed Ahmed Mohamed Khadour',
        img: MohamedAhmedMohamedKhadour,
        age: '17 years',
        place: 'Jerusalem/Qatana',
        date: '2024-02-10'
    },
    {
        id: 3,
        name: 'Moaz Ashraf Falih Bani Shamsa',
        img: MoazAshrafFalihBaniShamsa,
        age: '17 years',
        place: 'Nablus/Beta',
        date: '2024-02-09'
    },
    {
        id: 4,
        name: 'Moatasem Ali Muhammad Hussein Ali',
        img: MoatasemAliMuhammadHusseinAli,
        age: '26 years',
        place: 'Tulkarm/Nour Shams camp',
        date: '2024-02-07'
    },
    {
        id: 5,
        name: 'Hind Rajab 2',
        img: HindRajab,
        age: '5 years',
        place: 'Gaza',
        date: '2024-02-10'
    },
    {
        id: 6,
        name: 'Mohamed Ahmed Mohamed Khadour',
        img: MohamedAhmedMohamedKhadour,
        age: '17 years',
        place: 'Jerusalem/Qatana',
        date: '2024-02-10'
    },
    {
        id: 7,
        name: 'Moaz Ashraf Falih Bani Shamsa',
        img: MoazAshrafFalihBaniShamsa,
        age: '17 years',
        place: 'Nablus/Beta',
        date: '2024-02-09'
    },
    {
        id: 8,
        name: 'Moatasem Ali Muhammad Hussein Ali',
        img: MoatasemAliMuhammadHusseinAli,
        age: '26 years',
        place: 'Tulkarm/Nour Shams camp',
        date: '2024-02-07'
    },
    {
        id: 9,
        name: 'Hind Rajab 3',
        img: HindRajab,
        age: '5 years',
        place: 'Gaza',
        date: '2024-02-10'
    },
    {
        id: 10,
        name: 'Mohamed Ahmed Mohamed Khadour',
        img: MohamedAhmedMohamedKhadour,
        age: '17 years',
        place: 'Jerusalem/Qatana',
        date: '2024-02-10'
    },
    {
        id: 11,
        name: 'Moaz Ashraf Falih Bani Shamsa',
        img: MoazAshrafFalihBaniShamsa,
        age: '17 years',
        place: 'Nablus/Beta',
        date: '2024-02-09'
    },
    {
        id: 12,
        name: 'Moatasem Ali Muhammad Hussein Ali',
        img: MoatasemAliMuhammadHusseinAli,
        age: '26 years',
        place: 'Tulkarm/Nour Shams camp',
        date: '2024-02-07'
    },
]);

const filteredItems = computed(() => {
    const keyword = searchKeyword.value.toLowerCase().trim();
    if (!keyword) return items.value;

    return items.value.filter(item =>
        item.name.toLowerCase().includes(keyword) ||
        item.place.toLowerCase().includes(keyword) ||
        item.date.toLowerCase().includes(keyword)
    );
});

let currentPage = 1;

const paginatedItems = computed(() => {
    const startIndex = (currentPage - 1) * rowsPerPage.value;
    const endIndex = startIndex + rowsPerPage.value;
    return filteredItems.value.slice(startIndex, endIndex);
});

function searchItems() {
    currentPage = 1; // Reset current page when performing a new search
}

function onPageChange(event) {
    currentPage = event.page;
} 

</script>

<style scoped>
.container-around {
    margin: 0rem 5rem;
}

.image-container {
    height: 200px;
    overflow: hidden;
    position: relative;
}

.image {
    width: 100%;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
}

.label-style {
    font-size: 1.25rem;
    font-weight: 600;
}
</style>