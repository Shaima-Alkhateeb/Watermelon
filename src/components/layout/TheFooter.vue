<template>
    <footer class="footer">
        <p class="text-white text-center">&copy;{{ currentYear }} Watermelon | All Rights Reserved</p>
    </footer>
</template>

<script>
import 'primeicons/primeicons.css'
export default {
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    }
}
</script>

<style scoped>
</style>