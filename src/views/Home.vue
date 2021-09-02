<template>
    <div class="home">
        <ramp-map
            ><div
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
            </div></ramp-map
        >
        <info-shell></info-shell>
    </div>
</template>

<script>
// @ is an alias to /src
import RampMapV from '@/components/map.vue';
import InfoShellV from '@/components/info/shell.vue';

export default {
    name: 'Home',
    components: {
        'ramp-map': RampMapV,
        'info-shell': InfoShellV
    }
};
</script>
