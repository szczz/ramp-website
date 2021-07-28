<template>
    <div class="flex relative z-10 shadow-lg items-center">
        <span class="flex-grow" />
        <a href="" class="flex">
            <img src="../assets/logo-no-text.svg" class="w-[100px] h-[100px]" />
            <div class="flex flex-col justify-center">
                <h1 class="text-4xl font-bold">RAMP</h1>
                <span class="text-xl"
                    >Reusable Accessible Mapping Platform</span
                >
            </div>
        </a>
        <span style="flex-grow: 3" />
        <a class="button" href="#features">
            {{ $t('header.features') }}
        </a>
        <a class="button" href="https://github.com/fgpv-vpgf">
            {{ $t('header.github') }}
        </a>
        <a
            class="button font-bold border-4 border-black"
            href="mailto:dan.bowerman@ec.gc.ca?subject=Request%20for%20a%20RAMP%20demo&body=Describe%20your%20business requirements%20to%20the%20RAMP%20development%20team.%20Someone%20will%20reach%20out%20to%20you%20soon%20to%20schedule%20a%20demonstration%20and%20discuss%20your%20needs!"
        >
            {{ $t('header.getInTouch') }}
        </a>
        <span class="flex-grow" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RampHeaderV extends Vue {}
</script>

<style scoped lang="scss">
a.button {
    @apply flex items-center px-[16px] mx-[4px] h-[64px] text-2xl rounded-md focus:bg-gray-100 hover:bg-gray-100;
}
.logo {
    background-image: url('../assets/logo.svg');
}
</style>
