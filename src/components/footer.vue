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
                        !text-[24px]
                        !leading-[32px]
                        bg-dark-blue
                        rounded-2xl
                        text-white
                    "
                    :href="`mailto:${links[$i18n.locale].email}?subject=${$t(
                        'email.subject'
                    )}&body=${$t('email.body')}`"
                >
                    {{ $t('button.requestDemo') }}
                </a>
            </div>
        </div>
        <div class="flex text-xl py-[20px] bg-gray-600 justify-center">
            <div
                class="
                    !flex
                    flex-wrap
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
                        alt=""
                    />
                    <div class="!flex flex-col justify-center text-white">
                        <h1
                            class="
                                !my-0
                                !font-semibold
                                ml-[-3px]
                                !text-[36px]
                                !leading-[40px]
                                border-0
                                pb-0
                            "
                        >
                            {{ $t('header.title') }}
                        </h1>
                        <p class="text-[20px] !my-0">
                            {{ $t('header.subtitle') }}
                        </p>
                    </div>
                </a>
                <a
                    href="https://github.com/fgpv-vpgf"
                    class="
                        !text-white
                        sm:ml-auto
                        self-center
                        !text-[24px]
                        !leading=[32px]
                    "
                >
                    {{ $t('header.github') }}
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { links } from '@/configs/links';

@Component
export default class RampFooterV extends Vue {
    links = links;
}
</script>

<style scoped lang="scss">
.map-banner {
    background-image: url('../assets/banner.png');
}
a,
p,
h1 {
    font-family: inherit !important;
}
</style>
