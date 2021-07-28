<template>
    <div class="section flex items-center p-[150px]">
        <span class="flex-grow" />
        <div class="prose lg:prose-lg text-center max-w-none w-2/3">
            <h2>
                {{ $t(`multi.${section.key}.title`) }}
            </h2>
            <p>{{ $t(`multi.${section.key}.description`) }}</p>
            <div class="flex">
                <div
                    v-for="(subSection, subIndex) in section.sections"
                    :key="subSection + subIndex"
                    class="flex-1 mx-[20px] px-[20px]"
                    :class="
                        subIndex % 2 === 0
                            ? 'bg-green'
                            : index % 2 === 0
                            ? 'bg-teal'
                            : 'bg-white'
                    "
                >
                    <h3>
                        {{ $t(`multi.${section.key}.${subSection}.title`) }}
                    </h3>
                    <img
                        :src="`./img/${subSection}.svg`"
                        class="!mb-0 h-[300px] inline-flex py-[40px]"
                    />
                    <p class="!mb-[32px]">
                        {{
                            $t(`multi.${section.key}.${subSection}.description`)
                        }}
                    </p>
                </div>
            </div>
        </div>
        <span class="flex-grow" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class InfoMultiV extends Vue {
    @Prop() section!: any;
    @Prop() index!: number;
}
</script>

<style scoped lang="scss"></style>
