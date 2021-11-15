<template>
    <div class="text-white">
        <div class="map-banner">
            <div
                class="
                    flex
                    w-full
                    h-full
                    py-[75px]
                    justify-center
                    text-center
                    bg-light-blue-transparent
                "
            >
                <a
                    class="
                        px-[30px]
                        py-[20px]
                        text-2xl
                        bg-dark-blue
                        rounded-2xl
                    "
                    href="mailto:applicationsdecartographieweb-webmappingapplications@ec.gc.ca?subject=Request%20for%20a%20RAMP%20demo&body=Describe%20your%20business requirements%20to%20the%20RAMP%20development%20team.%20Someone%20will%20reach%20out%20to%20you%20soon%20to%20schedule%20a%20demonstration%20and%20discuss%20your%20needs!"
                >
                    {{ $t('button.requestDemo') }}
                </a>
            </div>
        </div>
        <div class="flex text-xl py-[20px] bg-gray-600 justify-center">
            <div
                class="
                    flex flex-wrap
                    sm:flex-nowrap
                    justify-center
                    items-center
                    w-[80%]
                    md:w-2/3
                "
            >
                <a href="" class="flex w-max">
                    <img
                        src="../assets/logo-no-text.svg"
                        class="w-[100px] h-[100px] !m-0"
                    />
                    <div class="flex flex-col justify-center">
                        <h1 class="!my-0 !font-semibold ml-[-3px] !text-4xl">
                            {{ $t('header.title') }}
                        </h1>
                        <p class="!text-white text-xl !my-0">
                            {{ $t('header.subtitle') }}
                        </p>
                    </div>
                </a>
                <a
                    href="https://github.com/fgpv-vpgf"
                    class="!text-white sm:ml-auto self-center text-2xl"
                >
                    {{ $t('header.github') }}
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RampFooterV extends Vue {}
</script>

<style scoped lang="scss">
.map-banner {
    background-image: url('../assets/banner.png');
}
</style>
