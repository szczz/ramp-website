<template>
    <div class="glider-contain !w-[1000px] !my-[150px]">
        <div class="glider">
            <div v-for="num in [1, 2, 3, 4]" :key="num">
                <img class="h-500" src="../../assets/ramp-placeholder.png" />
            </div>
        </div>
        <!--button aria-label="Previous" class="glider-prev">«</button-->
        <!--button aria-label="Next" class="glider-next">»</button-->
        <div role="tablist" class="dots"></div>
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
.glider > span {
    height: 500px;
    width: 1000px;
}

.glider-dot {
    @apply bg-green border border-solid border-gray-500 w-20 h-20 #{!important};
    &:focus {
        @apply border-black border-2 #{!important};
    }
    &.active {
        @apply saturate-200 border-2 #{!important};
    }
}
</style>
