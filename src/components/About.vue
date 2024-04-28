<template>
    <the-banner>
        <template #image>
            <img class="image" alt="Palestine"
                src="https://images.unsplash.com/photo-1589287604504-d2e96723949a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </template>
        <template #title>
            PALESTINE
        </template>
    </the-banner>

    <div class="2xl:m-20 sm:m-2">
        <!-- <p class="text-center text-2xl mt-28">Watermelon is an open-source website that lets you learn more about the history, culture, food, and customs of Palestine. I created a section that talks about its history and food, and I am still working on the other parts.</p> -->
        <Card>
            <template #title>About this website ...</template>
            <template #content>
                <p class="m-0">
                    Watermelon is a vibrant and inclusive online platform dedicated to exploring the rich tapestry of
                    Palestine's history, culture, cuisine, and traditions. From its storied past to its delicious
                    culinary delights, Watermelon offers an immersive journey into the heart and soul of Palestine.
                </p> <br>
                <p>

                    Discover captivating narratives on Palestine's history and delve into its diverse culinary
                    landscape. Whether you're intrigued by ancient tales or eager to savor traditional dishes,
                    Watermelon provides a curated experience that celebrates the essence of Palestine.
                </p><br>
                <p>

                    While our platform currently features sections on history and food, we're continuously expanding to
                    encompass all facets of Palestinian life. Join us on this enlightening adventure as we uncover the
                    beauty and complexity of Palestine's heritage.
                </p>
                <br>
                <hr>
                <br>
                <p>The motivation behind building this website stemmed from my discovery of misinformation regarding
                    Palestine. One striking example is the misconception that falafel, a beloved staple of Palestinian
                    cuisine, is attributed to the occupying country rather than its true origin.

                </p><br>
                <p>
                    Furthermore, I felt compelled to deepen my understanding of Palestine's rich history and heritage,
                    driving me to create a platform where I could explore and share this knowledge with others.
                </p>
                <br>
                <hr>
                <br>
                <p>
                    Throughout my research journey, I've been fortunate to discover several insightful and inspiring
                    resources that have greatly contributed to my project. One such invaluable resource is
                    <a class="underline " href="https://remix.aljazeera.com/aje/PalestineRemix/">PALESTINE REMIX</a>,
                    which I utilized extensively for historical
                    insights and content in the history section.
                </p><br>

                <p>Additionally, <a class="underline " href="https://www.tasteatlas.com/">Tasteatlas</a> proved to be an
                    indispensable source of culinary
                    inspiration and information, enriching the food section of my project.
                </p><br>


            </template>
        </Card>
    </div>

</template>

<script setup>
import { ref, computed } from "vue";
import TheBanner from '../components/layout/TheBanner.vue'
import Card from 'primevue/card';

</script>

<style scoped></style>
