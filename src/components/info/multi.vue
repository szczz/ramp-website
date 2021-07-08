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
                    v-for="(subSection, index) in section.sections"
                    :key="subSection + index"
                    class="flex-1 mx-20"
                >
                    <h3>
                        {{ $t(`multi.${section.key}.${subSection}.title`) }}
                    </h3>
                    <img
                        src="../../assets/logo.svg"
                        class="max-h-[120px] !mb-0 inline-flex"
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
