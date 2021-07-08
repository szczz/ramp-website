<template>
    <div class="text-white">
        <div class="text-center p-[150px] flex justify-center bg-orange">
            <a
                class="p-[30px] text-4xl bg-dark-blue rounded-2xl"
                href="mailto:dan.bowerman@ec.gc.ca?subject=Request%20for%20a%20RAMP%20demo&body=Describe%20your%20business requirements%20to%20the%20RAMP%20development%20team.%20Someone%20will%20reach%20out%20to%20you%20soon%20to%20schedule%20a%20demonstration%20and%20discuss%20your%20needs!"
            >
                {{ $t('button.requestDemo') }}
            </a>
        </div>
        <div class="bg-dark-blue text-xl py-[40px] pl-[380px]">
            <p><span class="font-bold">R</span>eusable</p>
            <p><span class="font-bold">A</span>ccessible</p>
            <p><span class="font-bold">M</span>apping</p>
            <p><span class="font-bold">P</span>latform</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RampFooterV extends Vue {}
</script>

<style scoped lang="scss"></style>
