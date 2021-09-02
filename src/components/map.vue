<template>
    <div>
        <div
            class="
                shadow-inset-bottom
                min-h-[20px]
                absolute
                mt-[705px]
                w-full
                z-10
                pointer-events-none
            "
        ></div>
        <div id="ramp-map" is="rv-map" class="h-[725px]" v-pre></div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RampMapV extends Vue {
    @Prop() config: string | undefined;

    mounted() {
        const RAMP = (window as any).RAMP;

        // if RAMP API is not ready yet, loop-wait until it's loaded
        if (!RAMP) {
            window.setInterval(() => this.mounted(), 500);
            return;
        }

        new RAMP.Map(
            this.$el.querySelector('#ramp-map'),
            `./config/${this.config ? this.config : 'config-sample-01'}.json`
        );
    }
}
</script>

<style lang="scss">
#ramp-map {
    .flex {
        flex: 1;
    }
    .flex-grow {
        flex: 1 1 100%;
    }
}
</style>
