<template>
    <div class="section py-[150px]">
        <div class="container mx-auto">
            <div
                class="
                    max-w-[80%]
                    mx-auto
                    flex
                    items-center
                    justify-center
                    content-center
                    flex-nowrap
                    md:flex-row
                "
                :class="index % 2 === 0 ? 'flex-col-reverse' : 'flex-col'"
            >
                <div
                    class="image-container md:mr-[40px]"
                    v-if="index % 2 !== 0"
                >
                    <img :src="`./img/${section.index}.png`" />
                </div>
                <div class="flex-1" :class="{ 'text-right': index % 2 !== 0 }">
                    <h2>
                        {{ $t(`feature.${section.key}.title`) }}
                    </h2>
                    <i18n
                        :path="`feature.${section.key}.description`"
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
                            path: `/samples/${section.config}`,
                            query: { lang: $i18n.locale }
                        }"
                        target="_blank"
                    >
                        {{ $t('button.viewDemo') }}
                    </router-link>
                </div>
                <div
                    class="image-container md:ml-[40px]"
                    v-if="index % 2 === 0"
                >
                    <img :src="`./img/${section.index}.png`" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { links } from '@/configs/links';

@Component
export default class InfoFeatureV extends Vue {
    @Prop() section!: any;
    @Prop() index!: number;

    links = links;
}
</script>

<style scoped lang="scss">
.image-container {
    @apply flex justify-center items-center max-h-[460px] sm:max-h-[500px] lg:max-h-[420px] xl:max-h-[510px];
    flex: 2;
    img {
        @apply max-h-[460px] sm:max-h-[500px] lg:max-h-[420px] xl:max-h-[510px];
    }
}
.text-link {
    @apply underline #{!important};
}
</style>
