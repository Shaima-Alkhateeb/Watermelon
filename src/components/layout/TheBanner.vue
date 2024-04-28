<template>
    <div :class="isHero ? 'image-container-layout--hero' : 'image-container-layout'">
        <slot name="image"></slot>

        <div :class="titleHero ? 'image-overlay--hero' : 'image-overlay'">
            <h1>
                <slot name="title"></slot>
            </h1>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    isHero: {
      type: Boolean,
      default: false,
    },
    titleHero: {
      type: Boolean,
      default: false,
    },
    isHistory: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>