<script setup lang="ts">
import AtSymbolIcon from '../components/Icons/AtSymbolIcon.vue'
import GitHubIcon from '../components/Icons/GitHubIcon.vue'
import GlobeAltIcon from '../components/Icons/GlobeAltIcon.vue'
import MapPinIcon from '../components/Icons/MapPinIcon.vue'
import PhoneIcon from '../components/Icons/PhoneIcon.vue'
import CarlendarIcon from '../components/Icons/CarlendarIcon.vue'
</script>

<template>
  <div
    class="min-h-dvh bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100"
  >
    <div
      class="pUnderstanding OOP, Design Patterns y-6 mx-auto max-w-6xl px-4 sm:py-12 sm:px-6 print:py-0"
    >
      <div class="mb-8 flex items-start sm:gap-4">
        <div class="relative min-w-24">
          <img
            src="/ngoquocdat.webp"
            alt="Ngo Quoc Dat"
            class="size-20 rounded-full sm:size-24"
          />
          <span
            class="absolute end-4 bottom-0 size-4 rounded-full bg-green-500 ring-3 ring-white print:hidden"
          >
          </span>
        </div>
        <div>
          <div class="text-lg">Web Developer</div>
          <h1 class="mb-2 text-3xl font-bold">Ngo Quoc Dat</h1>
          <p>
            Experienced web developer with 3 years of experience in PHP and
            JavaScript, particularly in Laravel and Vue.js. Possesses strong
            self-learning and problem-solving abilities. Passionate about
            exploring and staying updated with new technologies, and actively
            contributing to open source projects.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 print:gap-0">
        <div class="col-span-1">
          <div class="mb-6 rounded bg-gray-100 p-3 dark:bg-white/5 print:p-0">
            <ul class="space-y-2">
                <li>
                <div class="inline-flex items-center gap-2">
                    <CarlendarIcon class="size-6" />
                    24/04/2003 ({{ new Date().getFullYear() - 2003 }} years old)
                </div>
                </li>
              <li>
                <a
                  href="mailto:datlechin@gmail.com"
                  class="inline-flex items-center gap-2 underline-offset-2 transition-all hover:underline"
                >
                  <AtSymbolIcon class="size-6" />
                  datlechin@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:0372124043"
                  class="inline-flex items-center gap-2 underline-offset-2 transition-all hover:underline"
                >
                  <PhoneIcon class="size-6" />
                  0372124043
                </a>
              </li>
              <li>
                <a
                  href="https://ngoquocdat.dev"
                  class="inline-flex items-center gap-2 underline-offset-2 transition-all hover:underline"
                >
                  <GlobeAltIcon class="size-6" />
                  ngoquocdat.dev
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/datlechin"
                  target="_blank"
                  class="inline-flex items-center gap-2 underline-offset-2 transition-all hover:underline"
                >
                  <GitHubIcon class="size-6" />
                  datlechin
                </a>
              </li>
              <li>
                <div class="inline-flex items-center gap-2">
                  <MapPinIcon class="size-6" />
                  12 District, Ho Chi Minh City
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-3 text-xl font-semibold uppercase">Skills</h2>
            <ul class="list-inside list-disc space-y-1.5">
              <li>English reading comprehension</li>
              <li>
                Strong grasp of <span class="font-medium">PHP</span> and
                <span class="font-medium">Laravel</span>
              </li>
              <li>
                Working knowledge of
                <span class="font-medium">OOP & Design Patterns</span>
              </li>
              <li>
                Experience with JavaScript frameworks
                <span class="font-medium">Vue.js</span> and
                <span class="font-medium">React</span>
              </li>
              <li>
                Proficiency in <span class="font-medium">TailwindCSS</span> and
                <span class="font-medium">Bootstrap</span>
              </li>
              <li>
                Proficient in using <span class="font-medium">Git</span> and
                <span class="font-medium">GitHub</span>
              </li>
              <li>
                Familiarity with in <span class="font-medium">Inertia.js</span>,
                <span class="font-medium">Livewire</span>, and
                <span class="font-medium">jQuery</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="grid-col col-span-1 grid gap-8">
          <div>
            <h2 class="mb-3 text-xl font-semibold uppercase">Experience</h2>
            <div class="grid-col grid gap-4">
              <div>
                <div class="flex items-center gap-1">
                  <h3 class="mb-0.5 text-lg font-semibold">Archi Elite</h3>
                  <time
                    class="text-sm text-gray-700 before:me-1 before:content-['-'] dark:text-gray-300"
                  >
                    2022 Oct - 2024 May
                  </time>
                </div>
                <h4 class="mb-2 font-medium">Software Developer</h4>
                <ul
                  class="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300"
                >
                  <li>
                    Primarily used Laravel, Vue.js, and jQuery for development.
                  </li>
                  <li>
                    Developed and improved Botble CMS (a CMS built with
                    Laravel).
                  </li>
                  <li>
                    Build projects related to Job Board, E-commerce, Real
                    Estate, etc., using the Botble CMS.
                  </li>
                  <li>
                    Participated in building the Marketplace for Botble CMS and
                    internal company & community tools.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h2 class="mb-3 text-xl font-semibold uppercase">
              Projects & Activities
            </h2>
            <p class="mb-2">
              I focused on learning the technologies I used and contributing to
              open-source projects on
              <a
                href="https://github.com/datlechin?tab=repositories"
                target="_blank"
                class="underline underline-offset-2 transition-all hover:text-gray-950 dark:hover:text-gray-50"
              >
                GitHub</a
              >.
            </p>
            <ul
              class="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300"
            >
              <li>
                Contributed to and developed extensions for the open-source
                Flarum forum software built on Laravel.
              </li>
              <li>
                Developed plugins for the
                <a
                  href="https://botble.com"
                  target="_blank"
                  class="underline underline-offset-2 transition-all hover:text-gray-950 dark:hover:text-gray-50"
                >
                  Botble</a
                >
                ecosystem and founded
                <a
                  href="https://friendsofbotble.com"
                  target="_blank"
                  class="underline underline-offset-2 transition-all hover:text-gray-950 dark:hover:text-gray-50"
                >
                  Friends of Botble</a
                >.
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-4 text-xl font-semibold uppercase">Education</h2>
            <div class="grid-col grid gap-4">
              <div>
                <div class="flex items-center gap-1">
                  <h3 class="mb-0.5 text-lg font-semibold">FPT Polytechnic</h3>
                  <time
                    class="text-sm text-gray-700 before:me-1 before:content-['-'] dark:text-gray-300"
                  >
                    2021 Aug - 2024 Feb
                  </time>
                </div>
                <h4 class="mb-2 font-medium">Web Engineering</h4>
                <div class="text-gray-700 dark:text-gray-300">
                  Graduated with honors, excelling in courses related to the
                  current field.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
