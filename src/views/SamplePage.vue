<template>
    <div class="sample">
        <ramp-map :config="config"></ramp-map>
    </div>
</template>

<script>
// @ is an alias to /src
import RampMapV from '@/components/map.vue';

export default {
    name: 'Samples',
    components: {
        'ramp-map': RampMapV
    },
    props: ['config']
};
</script>
