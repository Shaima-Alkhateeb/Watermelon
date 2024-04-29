<template>
    <!-- History -->
    <the-banner isHistory>
        <template #image>
            <img class="image" alt="Palestine"
                src="https://images.unsplash.com/photo-1614517453351-6c1522fc7a56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </template>
        <template #title>
            TIMELINE OF PALESTINE'S HISTORY
        </template>
    </the-banner>
    <div class="container-around">
        <!-- <div class="flex flex-wrap justify-between py-9 px-12">
            <h2 class="">A sequence of Palestinian History Since World War I</h2>
        </div> -->
        <div class="text-center m-12 sm:mx-2 xs:mx-2 text-xl">
            <p class="sm:-mt-4 xs:-mt-4">Our timeline extends over two centuries, chronicling the pivotal events that paved the way for the establishment of a Jewish state in Palestine. Dive into the rich tapestry of history as we unravel the dramatic chain of events that shaped the course of the region's destiny.
            </p>
        </div>
        <!-- smoll card in the head -->
        <div
            class="grid grid-cols-5 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4 text-center mb-12">
            <Card v-for="(item, index) in items" :key="item.id" class="card-items cursor-pointer"
                :style="{ backgroundColor: isHovered(index) ? item.hoverColor : item.color }"
                @click="scrollToEvent(index)" @mouseover="setHoveredIndex(index)" @mouseleave="clearHoveredIndex">
                <template #title>{{ item.id }}</template>
                <template #content>
                    <p class="m-0">
                        {{ item.year }}
                    </p>
                </template>
            </Card>
        </div>
        <hr>
        <div class="card 2xl:m-12 sm:m-2">
            <div v-for="event in events" :key="event.id" ref="eventRefs">
                <div class="text-center 2xl:mx-12 my-10">
                    <p class="text-6xl sm:text-5xl xs:text-5xl font-bold text-gray-400">{{ event.mainYear }}</p>
                    <p class="mt-3">{{ event.mainTitle }}<a v-if="event.readMore" :href="event.readMore"
                            class="text-gray-300">
                            READ MORE</a></p>
                </div>
                <Timeline :value="event.subYears" align="alternate" class="customized-timeline mb-12">
                    <template #marker="slotProps">
                        <span
                            class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1 circle-style"
                            :style="{ backgroundColor: slotProps.item.color }">
                            <p v-if="slotProps.item.year" class="text-xs">{{ slotProps.item.year }}</p>
                        </span>
                    </template>
                    <template #content="slotProps">
                        <Card class="mt-3">
                            <template #title>
                                <p>
                                    {{ slotProps.item.title }}
                                </p>
                            </template>
                            <template #subtitle>
                                {{ slotProps.item.date }}
                            </template>
                            <template #content>
                                <!-- months -->
                                <div class="card">
                                    <ul v-for="month in slotProps.item.months" :key="month.id" class="list-disc ml-5"
                                        ref="container">
                                        <li class="text-gray-400 font-semibold text-xl">{{ month.name }}</li>
                                        <div class="flex flex-row">

                                            <div class="verticalLine"></div>
                                            <div class="mb-5">
                                                <div class="font-semibold text-xl mt-2">
                                                    {{ month.title }}
                                                </div>
                                                <p class="mt-2" style="color: #64748b;">{{ month.date }}</p>
                                                <Image v-if="month.image" :src="month.image" :alt="month.image"
                                                    width="200" preview class="shadow-1 mt-5" />

                                                <!-- <video v-if="month.video" width="400" controls>
                                                    <source :src="month.video" type="video/mp4">
                                                    <source :src="month.video" type="video/ogg">
                                                    Your browser does not support the video tag.
                                                </video> -->


                                                <div v-if="month.descArray">
                                                    <ul v-for="desc in month.descArray" :key="desc.id" class="mt-5 ">
                                                        <li class="">- {{ desc.text }}</li>
                                                        <br>
                                                        <!-- <video v-if="desc.video" width="400" controls>
                                                            <source :src="desc.video" type="video/mp4">
                                                            <source :src="desc.video" type="video/ogg">
                                                            Your browser does not support the video tag.
                                                        </video> -->
                                                        <!-- <div v-if="desc.video">
                                                            <iframe :src="getEmbedUrl(desc.video)" width="400"
                                                                height="300" frameborder="0" allowfullscreen></iframe>
                                                        </div> -->
                                                    </ul>
                                                </div>
                                                <p v-else class="mt-5">{{ month.desc }}</p>

                                                <a v-if="month.readMore" :href="month.readMore">
                                                    <Button label="Read more" text>
                                                    </Button>
                                                </a>
                                                <!-- second month -->
                                                <div v-if="month.secondTitle">
                                                    <hr>
                                                </div>
                                                <div v-if="month.secondTitle" class="font-semibold text-xl mt-2">
                                                    {{ month.secondTitle }}
                                                </div>
                                                <p class="mt-2" style="color: #64748b;">{{ month.secondDate }}</p>
                                                <Image v-if="month.secondImage" :src="month.secondImage"
                                                    :alt="month.secondImage" width="200" preview
                                                    class="shadow-1 mt-5" />

                                                <p class="mt-5">{{ month.secondDesc }}</p>
                                                <a v-if="month.secondDesc" :href="month.secondDesc">
                                                    <Button label="Read more" text>
                                                    </Button>
                                                </a>
                                                <!-- end second month -->
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                <!-- end months  -->
                                <Image v-if="slotProps.item.image" :src="slotProps.item.image"
                                    :alt="slotProps.item.name" width="200" class="shadow-1" preview />

                                <p v-if="slotProps.item.desc" :class="slotProps.item.image ? 'mt-5' : ''">
                                    {{ slotProps.item.desc }}
                                </p>
                                <a v-if="slotProps.item.readMore" :href="slotProps.item.readMore">
                                    <Button label="Read more" text>
                                    </Button>
                                </a>

                            </template>
                        </Card>
                    </template>
                </Timeline>
                <hr>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Image from 'primevue/image';
import { events } from '../service/HistoryData.js'
import TheBanner from '../components/layout/TheBanner.vue'

const container = ref(null);

// hover
const hoveredIndex = ref(null);

const isHovered = (index) => {
    return index === hoveredIndex.value;
};

const setHoveredIndex = (index) => {
    hoveredIndex.value = index;
};

const clearHoveredIndex = () => {
    hoveredIndex.value = null;
};

const items = ref([
    {
        id: 1,
        image: 'https://fathomjournal.org/wp-content/uploads/cache/2017/06/Sorene-picture/4092919362.jpg',
        year: '1799 - 1946',
        color: '#697c7b',
        hoverColor: 'rgb(105 124 123 / 93%)'
    },
    {
        id: 2,
        image: 'https://fathomjournal.org/wp-content/uploads/cache/2017/06/Sorene-picture/4092919362.jpg',
        year: '1947 - 1949',
        color: '#3d6269',
        hoverColor: 'rgb(61 98 105 / 93%)'
    },
    {
        id: 3,
        image: 'https://fathomjournal.org/wp-content/uploads/cache/2017/06/Sorene-picture/4092919362.jpg',
        year: '1750 - 1967',
        color: '#b27d50',
        hoverColor: 'rgb(178 125 80 / 93%)'
    },
    {
        id: 4,
        image: 'https://fathomjournal.org/wp-content/uploads/cache/2017/06/Sorene-picture/4092919362.jpg',
        year: '1968 - 1992',
        color: '#b08a06',
        hoverColor: 'rgb(176 138 6 / 93%)'
    },
    {
        id: 5,
        image: 'https://fathomjournal.org/wp-content/uploads/cache/2017/06/Sorene-picture/4092919362.jpg',
        year: '1993 - TODAY',
        // color: '#768283'
        color: '#6e3428',
        hoverColor: 'rgb(110 52 40 / 93%)'
    }
]);

const eventRefs = ref([]);

onMounted(() => {
    scrollToEvent();
});

const scrollToEvent = (index) => {
    const eventRef = eventRefs.value[index];
    //   console.log("eventRef: ", eventRef)
    if (eventRef) {
        const offsetTop = eventRef.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
};

// const getEmbedUrl = (videoUrl) => {
//     const hostname = new URL(videoUrl).hostname;
//     let embedUrl = '';

//     switch (hostname) {
//         case 'twitter.com':
//             const videoId = videoUrl.split('/').pop();
//             embedUrl = `https://twitframe.com/show?url=https://twitter.com/i/status/${videoId}`;
//             break;
//         // Add cases for other websites as needed
//         case 'youtube.com':
//             const youtubeId = getYoutubeId(videoUrl);
//             embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
//             break;
//         // Add more cases for other video hosting sites
//         default:
//             embedUrl = videoUrl; // Directly use the original URL if the source is unknown
//             break;
//     }

//     return embedUrl;
// };

// const getYoutubeId = (url) => {
//     const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
//     const match = url.match(regex);
//     return match ? match[1] : null;
// };

</script>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row;

            .p-timeline-event-content {
                text-align: left;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }
    }
}

.circle-style {
    padding: 1.1rem 1rem;
    border-radius: 50%;
}

.image-container {
    height: 700px;
    overflow: hidden;
    position: relative;
}

.image {
    width: 100%;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 6;
    left: 0;
}


.card-items {
    // background-color: #b27d50;
    // background-color: #3d6269;
    color: #eee;
}

.verticalLine {
    border-left: medium solid #e2e8f0;
    // width: 2px;
    //height: 600px;
    height: auto;
    margin-left: -1rem;
    margin-right: 1rem;

}
</style>
