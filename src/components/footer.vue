<template>
    <div class="text-white">
        <div class="text-center p-[75px] flex justify-center bg-light-blue">
            <a
                class="px-[30px] py-[20px] text-2xl bg-dark-blue rounded-2xl"
                href="mailto:dan.bowerman@ec.gc.ca?subject=Request%20for%20a%20RAMP%20demo&body=Describe%20your%20business requirements%20to%20the%20RAMP%20development%20team.%20Someone%20will%20reach%20out%20to%20you%20soon%20to%20schedule%20a%20demonstration%20and%20discuss%20your%20needs!"
            >
                {{ $t('button.requestDemo') }}
            </a>
        </div>
        <div class="flex text-xl py-[40px] bg-gray-600">
            <span class="flex-grow max-w-[205px] min-w-[10px]" />
            <a href="" class="flex w-max">
                <img
                    src="../assets/logo-no-text.svg"
                    class="w-[100px] h-[100px]"
                />
                <div class="flex flex-col justify-center">
                    <h1 class="text-4xl font-bold">RAMP</h1>
                    <span class="text-xl"
                        >Reusable Accessible Mapping Platform</span
                    >
                </div>
            </a>
            <a href="" class="ml-auto self-center text-2xl">
                {{ $t('header.github') }}
            </a>
            <span class="flex-grow max-w-[205px]" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RampFooterV extends Vue {}
</script>

<style scoped lang="scss"></style>
