<script setup lang="ts">
import SocialList from '../components/SocialList.vue'
</script>

<template>
  <main
    class="min-h-dvh bg-slate-900 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-gray-50"
  >
    <div
      class="max-w-screen-lg mx-auto flex min-h-screen flex-col justify-center py-16 px-6"
    >
      <div
        class="mb-14 flex flex-wrap items-center justify-center gap-10 sm:mb-20 sm:gap-20"
      >
        <img
          src="/ngoquocdat.webp"
          alt="Ngo Quoc Dat"
          class="size-32 rounded-full sm:size-40"
        />
        <div class="group">
          <div
            class="mb-2 text-xl transition-all group-hover:-translate-x-1 sm:text-2xl"
          >
            <span class="me-2 font-light">Hi,</span>
            <span class="font-bold">I'm</span>
          </div>
          <h2
            class="text-[2.75rem] font-black transition-all group-hover:translate-x-1 sm:text-7xl"
          >
            Ngo Quoc Dat
          </h2>
        </div>
      </div>

      <div class="mb-32 text-center">
        <h2 class="mb-6 text-3xl font-bold sm:mb-8 sm:text-4xl">
          I'm a
          <span class="text-blue-300 underline underline-offset-8">
            Software Developer
          </span>
        </h2>

        <div
          class="text-base font-light leading-loose text-gray-300 lg:text-lg"
        >
          <p>I craft web apps using Laravel, Vue, Tailwind CSS, and beyond.</p>
          <p>
            Driven by a passion for building engaging experiences and
            contributing to open source.
          </p>
        </div>
      </div>

      <div>
        <social-list />
      </div>
    </div>
  </main>
</template>
