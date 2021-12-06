<template>
    <main class="flex-1 bg-gray-200 px-6">
        <div class="flex flex-col h-full container">
            <div
                class="px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
            >
                <!--Left Col-->
                <div
                    class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
                >
                    <p class="uppercase tracking-loose w-full">
                        What business are you?
                    </p>
                    <h1 class="my-4 text-5xl font-bold leading-tight">
                        Kick Start to sell yourself!
                    </h1>
                    <p class="leading-normal text-2xl mb-8">
                        This is a basic
                        <a
                            class="underline"
                            href="https://laravel.com"
                            target="_blank"
                            >Laravel</a
                        >
                        template using
                        <a
                            class="underline"
                            href="https://tailwindcss.com"
                            target="_blank"
                            >tailwindcss</a
                        >. You are ready to start building your application!
                    </p>

                    <a
                        href="{{ url('/register') }}"
                        class="btn btn-primary shadow-lg"
                        >Register</a
                    >
                </div>
                <!--Right Col-->
                <div class="w-full md:w-3/5 py-6 text-center">
                    <img class="w-full md:w-4/5 z-50" :src="'/images/hero.png'" />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {}
</script>
