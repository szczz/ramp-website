<template>
    <div class="section py-[150px]">
        <div class="flex max-w-none justify-center mb-[50px]">
            <h2 class="!mt-0">Portfolio</h2>
        </div>
        <div class="glider-contain !w-[80%] md:!w-2/3">
            <div class="glider">
                <div v-for="num in [1, 2, 3, 4]" :key="num">
                    <img
                        class="w-full"
                        src="../../assets/ramp-placeholder.png"
                    />
                    <div class="max-w-none my-[20px]">
                        <h3>Site Name</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Molestiae qui reiciendis a atque esse nobis,
                            at assumenda tempora amet nesciunt delectus
                            doloribus pariatur vitae dolores unde necessitatibus
                            est iure officiis!
                        </p>
                    </div>
                </div>
            </div>
            <!--button aria-label="Previous" class="glider-prev">«</button-->
            <!--button aria-label="Next" class="glider-next">»</button-->
            <div role="tablist" class="dots"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

//@ts-ignore
import Glider from 'glider-js';

@Component
export default class CarouselV extends Vue {
    @Prop() section!: any;
    @Prop() index!: number;

    mounted() {
        new Glider(this.$el.querySelector('.glider'), {
            slidesToShow: 1,
            scrollLock: true,
            scrollLockDelay: 50,
            dots: '.dots',
            draggable: true
            /* arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            } */
        });
    }
}
</script>

<style lang="scss">
.glider-dot {
    @apply bg-green border border-solid border-gray-500 w-[20px] h-[20px] #{!important};
    &:focus {
        @apply border-black border-2 #{!important};
    }
    &.active {
        @apply saturate-200 border-2 #{!important};
    }
}
</style>
