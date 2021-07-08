<template>
    <div class="section flex items-center p-[150px]">
        <span class="flex-grow" />
        <div class="prose text-center max-w-none w-2/3">
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
                        :key="subSection + index"
                        class="flex-1 mx-[20px]"
                    >
                        <img
                            :src="`./img/${subSection}.svg`"
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

<style scoped lang="scss"></style>
