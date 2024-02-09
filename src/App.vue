<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'
import SocialList from './components/SocialList.vue'
</script>

<template>
  <speed-insights />

  <main
    class="bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(120,119,198,0.3),rgba(255,255,255,0))] min-h-dvh bg-slate-900 text-gray-50"
  >
    <div class="max-w-screen-lg min-h-screen mx-auto px-6 py-16 flex justify-center flex-col">
      <div
        class="flex justify-center flex-wrap items-center gap-10 sm:gap-20 mb-20"
      >
        <img
          src="/ngoquocdat.jpg"
          alt="Ngo Quoc Dat"
          class="size-32 sm:size-40 rounded-full"
        />
        <div class="group">
          <div
            class="group-hover:-translate-x-1 transition-all text-xl sm:text-2xl mb-2"
          >
            <span class="font-light me-2">Hi,</span>
            <span class="font-bold">I'm</span>
          </div>
          <h2
            class="group-hover:translate-x-1 transition-all text-[2.75rem] sm:text-7xl font-black"
          >
            Ngo Quoc Dat
          </h2>
        </div>
      </div>

      <div class="text-center mb-32">
        <h2 class="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
          I'm a web
          <span class="text-blue-300 underline underline-offset-8"
            >developer</span
          >
        </h2>

        <div class="text-lg text-gray-300 font-light leading-loose">
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
