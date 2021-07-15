<template>
    <div class="flex bg-teal items-center">
        <span class="flex-grow" />
        <a href="" class="logo h-[100px] w-[100px] bg-contain bg-center" />
        <span style="flex-grow: 3" />
        <a
            class="button focus:bg-teal-dark hover:bg-teal-dark"
            href="#features"
        >
            {{ $t('header.features') }}
        </a>
        <a
            class="button focus:bg-teal-dark hover:bg-teal-dark"
            href="https://github.com/fgpv-vpgf"
        >
            {{ $t('header.github') }}
        </a>
        <a
            class="
                button
                bg-light-blue
                hover:bg-light-blue-dark
                focus:bg-light-blue-dark
                font-semibold
            "
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
    @apply px-[16px] py-[22px] mx-[4px] my-[12px] text-2xl rounded-lg;
}
.logo {
    background-image: url('../assets/logo.svg');
}
</style>
