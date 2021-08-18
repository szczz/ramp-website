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
        <div
            class="
                flex
                justify-center
                w-full
                absolute
                top-[190px]
                pointer-events-none
            "
        >
            <div class="flex justify-end w-[80%] md:w-2/3">
                <div
                    class="
                        backdrop-blur
                        bg-black-transparent
                        h-[450px]
                        w-[700px]
                        p-[40px]
                        !text-white
                        text-right
                        flex-col flex
                        items-end
                        justify-center
                        pointer-events-auto
                        prose
                        !prose-white
                        prose-sm
                        md:prose
                        lg:prose-lg
                        !max-w-none
                    "
                >
                    <h2>{{ $t('map.title') }}</h2>

                    <p class="!mt-[0px] max-w-[470px]">
                        {{ $t('map.description') }}
                    </p>
                    <a
                        class="
                            border-white
                            rounded-lg
                            p-[12px]
                            border-2
                            font-bold
                            focus:bg-gray-600
                            hover:bg-gray-600
                            !no-underline
                            text-xl
                        "
                        href="mailto:dan.bowerman@ec.gc.ca?subject=Request%20for%20a%20RAMP%20demo&body=Describe%20your%20business requirements%20to%20the%20RAMP%20development%20team.%20Someone%20will%20reach%20out%20to%20you%20soon%20to%20schedule%20a%20demonstration%20and%20discuss%20your%20needs!"
                    >
                        {{ $t('button.requestDemo') }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RampMapV extends Vue {
    mounted() {
        const RAMP = (window as any).RAMP;

        // if RAMP API is not ready yet, loop-wait until it's loaded
        if (!RAMP) {
            window.setInterval(() => this.mounted(), 500);
            return;
        }

        new RAMP.Map(
            this.$el.querySelector('#ramp-map'),
            './config/config-sample-01.json'
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
