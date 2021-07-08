<template>
    <div class="section flex items-center">
        <span class="flex-grow" />
        <img
            src="../../assets/ramp-placeholder.png"
            class="image mr-20"
            v-if="index % 2 !== 0"
        />
        <div class="prose text" :class="{ 'text-right': index % 2 !== 0 }">
            <h2>
                {{ $t(`feature.${section.key}.title`) }}
            </h2>
            <p>{{ $t(`feature.${section.key}.description`) }}</p>
            <a
                class="
                    bg-teal
                    p-12
                    rounded-lg
                    border-gray-500 border
                    focus:bg-teal-dark
                    hover:bg-teal-dark
                    !no-underline
                "
                href=""
            >
                {{ $t('button.viewDemo') }}
            </a>
        </div>
        <img
            src="../../assets/ramp-placeholder.png"
            class="image ml-20"
            v-if="index % 2 === 0"
        />
        <span class="flex-grow" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class InfoFeatureV extends Vue {
    @Prop() section!: any;
    @Prop() index!: number;
}
</script>

<style scoped lang="scss">
.section {
    height: 75vh;
    padding-left: 17vw;
    padding-right: 17vw;
    padding-top: 17vh;
    padding-bottom: 17vh;
}
.text {
    width: 25vw;
}
.image {
    @apply h-full;
    width: 41vw;
}
</style>
