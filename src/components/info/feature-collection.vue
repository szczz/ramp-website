<template>
    <div class="section flex items-center justify-center py-[150px]">
        <div class="max-w-none w-[80%] md:w-2/3 flex flex-col">
            <div class="flex gap-[80px]">
                <h2
                    v-for="(key, index) in section.keys"
                    :key="key + index + '_header'"
                    class="flex-1 !mt-0"
                >
                    {{ $t(`feature.${key}.title`) }}
                </h2>
            </div>
            <div class="flex gap-[80px]">
                <p
                    class="!mb-[36px] flex-1"
                    v-for="(key, index) in section.keys"
                    :key="key + index + '_main'"
                >
                    {{ $t(`feature.${key}.description`) }}
                </p>
            </div>
            <div class="flex gap-[80px]">
                <div
                    v-for="(key, index) in section.keys"
                    :key="key + index + '_button'"
                    class="flex-1"
                >
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
                        to="/samples/CONFIG_GOES_HERE"
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
