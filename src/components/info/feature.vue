<template>
    <div
        class="
            section
            flex
            items-center
            justify-center
            content-center
            py-[150px]
        "
        :class="index % 2 === 0 ? 'flex-wrap-reverse' : 'flex-wrap'"
    >
        <img
            src="../../assets/ramp-placeholder.png"
            class="w-[780px] max-w-[80%] mr-[20px]"
            v-if="index % 2 !== 0"
        />
        <div
            class="w-[475px] max-w-[80%]"
            :class="{ 'text-right': index % 2 !== 0 }"
        >
            <h2>
                {{ $t(`feature.${section.key}.title`) }}
            </h2>
            <p class="!mb-[36px]">
                {{ $t(`feature.${section.key}.description`) }}
            </p>
            <router-link
                class="
                    bg-teal
                    py-[12px]
                    px-[30px]
                    rounded-lg
                    border-gray-500 border
                    focus:bg-teal-dark
                    hover:bg-teal-dark
                    !no-underline
                    whitespace-nowrap
                "
                to="/samples/CONFIG_GOES_HERE"
            >
                {{ $t('button.viewDemo') }}
            </router-link>
        </div>
        <img
            src="../../assets/ramp-placeholder.png"
            class="w-[780px] max-w-[80%] ml-[20px]"
            v-if="index % 2 === 0"
        />
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
