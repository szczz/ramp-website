<template>
    <div class="section flex items-center">
        <span class="flex-grow" />
        <div class="prose text-center max-w-none">
            <h2>
                {{ $t(`explainer.${section.key}.title`) }}
            </h2>
            <p>{{ $t(`explainer.${section.key}.description`) }}</p>
            <div class="flex flex-col">
                <div
                    class="flex"
                    v-for="(row, index) in section.sections"
                    :key="index"
                >
                    <div
                        v-for="(subSection, index) in row"
                        :key="subSection.title + index"
                        class="flex-1 mx-20"
                    >
                        <img
                            src="../../assets/logo.svg"
                            class="max-h-[120px] !mb-0 inline-flex"
                        />
                        <h3>
                            {{
                                $t(
                                    `explainer.${section.key}.${subSection}.title`
                                )
                            }}
                        </h3>
                        <p>
                            {{
                                $t(
                                    `explainer.${section.key}.${subSection}.description`
                                )
                            }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <span class="flex-grow" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class InfoExplainerV extends Vue {
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
