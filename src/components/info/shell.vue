<template>
    <div id="features">
        <component
            :is="mapping[section.type]"
            v-for="(section, index) in features"
            :key="section.title + index"
            :section="section"
            :index="index"
            :class="{ 'bg-teal': index % 2 !== 0 }"
        ></component>
        <carousel></carousel>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { layout } from '@/configs/layout';
import InfoFeatureV from './feature.vue';
import InfoExplainerV from './explainer.vue';
import InfoMultiV from './multi.vue';
import CarouselV from './carousel.vue';

@Component({
    components: {
        'info-feature': InfoFeatureV,
        'info-explainer': InfoExplainerV,
        'info-multi': InfoMultiV,
        carousel: CarouselV
    }
})
export default class InfoShellV extends Vue {
    features = layout;

    mapping = {
        feature: 'info-feature',
        explainer: 'info-explainer',
        multi: 'info-multi'
    };
}
</script>

<style scoped lang="scss"></style>
