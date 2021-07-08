<template>
    <div class="section flex items-center h-[725px]">
        <span class="flex-grow" />
        <img
            src="../../assets/ramp-placeholder.png"
            class="w-[41%] mr-[20px]"
            v-if="index % 2 !== 0"
        />
        <div class="prose w-[25%]" :class="{ 'text-right': index % 2 !== 0 }">
            <h2>
                {{ $t(`feature.${section.key}.title`) }}
            </h2>
            <p class="!mb-[36px]">
                {{ $t(`feature.${section.key}.description`) }}
            </p>
            <a
                class="
                    bg-teal
                    py-[12px]
                    px-[30px]
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
            class="w-[41%] ml-[20px]"
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

<style scoped lang="scss"></style>
