<template>
    <div class="section py-[150px]">
        <div class="container mx-auto">
            <div class="text-center md:flex mx-auto gap-[80px] w-[80%]">
                <div
                    class="flex-1 mb-[60px] md:mb-auto"
                    v-for="(key, index) in section.keys"
                    :key="key + index"
                >
                    <h2 class="!mt-0 md:h-[60px] lg:h-[80px] xl:h-[60px]">
                        {{ $t(`feature.${key}.title`) }}
                    </h2>
                    <i18n
                        :path="`feature.${key}.description`"
                        class="!mb-[36px]"
                        tag="p"
                    >
                        <template #br><br /><br /></template>
                        <template #cam
                            ><a
                                class="text-link"
                                :href="links[$i18n.locale]['cam']"
                                target="_blank"
                                >{{ $t('links.label.cam') }}</a
                            ></template
                        >
                        <template #cesi
                            ><a
                                class="text-link"
                                :href="links[$i18n.locale]['cesi']"
                                target="_blank"
                                >{{ $t('links.label.cesi') }}</a
                            ></template
                        >
                        <template #geomet
                            ><a
                                class="text-link"
                                :href="links[$i18n.locale]['geomet']"
                                target="_blank"
                                >{{ $t('links.label.geomet') }}</a
                            ></template
                        >
                    </i18n>
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
                        :to="{
                            path:
                                (index === 0
                                    ? `/external_samples/`
                                    : `/samples/`) + `${section.config[index]}`,
                            query: { lang: $i18n.locale }
                        }"
                        target="_blank"
                    >
                        {{ $t('button.viewDemo') }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { links } from '@/configs/links';

@Component
export default class InfoFeatureCollectionV extends Vue {
    @Prop() section!: any;
    @Prop() index!: number;

    links = links;
}
</script>

<style scoped lang="scss">
.text-link {
    @apply underline #{!important};
}
</style>
