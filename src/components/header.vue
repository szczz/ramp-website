<template>
    <div class="relative z-10 shadow-lg">
        <span class="flex"
            ><button class="ml-auto mr-[20px] underline" @click="changeLang()">
                {{ $t('header.changeLang') }}
            </button></span
        >
        <div
            class="
                container
                mx-auto
                flex
                justify-center
                items-center
                flex-wrap
                gap-y-[8px]
            "
        >
            <a href="" class="flex">
                <img
                    src="../assets/logo-no-text.svg"
                    class="w-[100px] h-[100px] !m-0"
                />
                <div class="flex flex-col justify-center">
                    <h1 class="!my-0 !font-semibold ml-[-3px] !text-4xl">
                        {{ $t('header.title') }}
                    </h1>
                    <p class="text-xl !my-0">
                        {{ $t('header.subtitle') }}
                    </p>
                </div>
            </a>
            <div class="lg:ml-auto flex mb-[8px]">
                <a class="button" href="#features">
                    {{ $t('header.features') }}
                </a>
                <a class="button" href="https://github.com/fgpv-vpgf">
                    {{ $t('header.github') }}
                </a>
                <a
                    class="button font-bold border-4 border-black"
                    href="mailto:applicationsdecartographieweb-webmappingapplications@ec.gc.ca?subject=Request%20for%20a%20RAMP%20demo&body=Describe%20your%20business requirements%20to%20the%20RAMP%20development%20team.%20Someone%20will%20reach%20out%20to%20you%20soon%20to%20schedule%20a%20demonstration%20and%20discuss%20your%20needs!"
                >
                    {{ $t('header.getInTouch') }}
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RampHeaderV extends Vue {
    changeLang() {
        this.$i18n.locale = this.$i18n.locale === 'en' ? 'fr' : 'en';

        this.$router.replace({ query: { lang: this.$i18n.locale } });
        document.title = this.$i18n.t('page.title') as string;
    }
}
</script>

<style scoped lang="scss">
a.button {
    @apply flex items-center px-[8px] sm:px-[16px] mx-[4px] h-[48px] sm:h-[64px] rounded-md text-lg
                sm:text-2xl focus:bg-gray-100 hover:bg-gray-100;
}
.logo {
    background-image: url('../assets/logo.svg');
}
</style>
