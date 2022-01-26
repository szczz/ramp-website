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
                    <description-block
                        class="!mb-[36px]"
                        :path="`feature.${key}.description`"
                    ></description-block>
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
                            whitespace-nowrap
                        "
                        :href="links[$i18n.locale].demo[key]"
                        target="_blank"
                    >
                        {{ $t('button.viewDemo') }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import DescriptionBlockV from './description-block.vue';
import { links } from '@/configs/links';

@Component({
    components: {
        'description-block': DescriptionBlockV
    }
})
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
