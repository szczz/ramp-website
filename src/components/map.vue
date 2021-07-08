<template>
    <div class="ramp-map bg-center h-[725px] flex items-center w-full">
        <span style="flex-grow: 3.5" />
        <div
            class="
                bg-light-blue
                border-white border
                h-450
                w-500
                p-40
                top-1/5
                prose
                text-center
                flex-col flex
                items-center
                justify-center
            "
        >
            <i18n path="map.title" tag="h1">
                <span>{{ $t('map.title.extra') }}</span>
            </i18n>
            <p class="!mt-0">
                {{ $t('map.description') }}
            </p>
            <a
                class="
                    border-gray-500
                    rounded-lg
                    p-12
                    border-2
                    font-bold
                    focus:bg-light-blue-dark
                    hover:bg-light-blue-dark
                    !no-underline
                    text-xl
                "
                href="mailto:dan.bowerman@ec.gc.ca?subject=Request%20for%20a%20RAMP%20demo&body=Describe%20your%20business requirements%20to%20the%20RAMP%20development%20team.%20Someone%20will%20reach%20out%20to%20you%20soon%20to%20schedule%20a%20demonstration%20and%20discuss%20your%20needs!"
            >
                {{ $t('button.requestDemo') }}
            </a>
        </div>
        <span class="flex-grow" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RampMapV extends Vue {}
</script>

<style scoped lang="scss">
.ramp-map {
    background-image: url('../assets/ramp-placeholder.png');
}
</style>
