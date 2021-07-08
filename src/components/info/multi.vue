<template>
    <div class="section flex items-center">
        <span class="flex-grow" />
        <div class="prose text-center max-w-none">
            <h2>
                {{ $t(`multi.${section.key}.title`) }}
            </h2>
            <p>{{ $t(`multi.${section.key}.description`) }}</p>
            <div class="flex">
                <div
                    v-for="(subSection, subIndex) in section.sections"
                    :key="subSection + subIndex"
                    class="flex-1 mx-20 px-[20px]"
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
                        src="../../assets/logo.svg"
                        class="!mb-0 inline-flex py-[40px]"
                    />
                    <p>
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

<style scoped lang="scss">
.section {
    min-height: 75vh;
    padding-left: 17vw;
    padding-right: 17vw;
    padding-top: 17vh;
    padding-bottom: 17vh;
}
.text {
    width: 25vw;
}
.image {
    @apply h-full;
    width: 41vw;
}
</style>
