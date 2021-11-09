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
                    <p class="!mb-[36px]">
                        {{ $t(`feature.${key}.description`) }}
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
                        :to="
                            (index === 0 ? `/external_samples/` : `/samples/`) +
                            `${section.config[index]}`
                        "
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

@Component
export default class InfoFeatureCollectionV extends Vue {
    @Prop() section!: any;
    @Prop() index!: number;
}
</script>

<style scoped lang="scss"></style>
