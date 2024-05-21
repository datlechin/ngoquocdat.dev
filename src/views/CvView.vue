<script setup lang="ts">
import AtSymbolIcon from '../components/Icons/AtSymbolIcon.vue'
import GitHubIcon from '../components/Icons/GitHubIcon.vue'
import GlobeAltIcon from '../components/Icons/GlobeAltIcon.vue'
import MapPinIcon from '../components/Icons/MapPinIcon.vue'
import PhoneIcon from '../components/Icons/PhoneIcon.vue'
</script>

<template>
  <div class="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
    <div class="mx-auto max-w-6xl p-4 sm:p-6">
      <div class="mb-8 flex items-start sm:gap-4">
        <div class="relative min-w-24">
          <img
            src="/ngoquocdat.webp"
            alt="Ngo Quoc Dat"
            class="size-20 sm:size-24 rounded-full"
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
            Experienced web developer with over 3 years of PHP and JavaScript
            experience. Passionate about new technologies, and contributing to
            open source.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 print:gap-0">
        <div class="col-span-1">
          <div class="mb-6 rounded bg-gray-100 p-3 dark:bg-white/5 print:p-0">
            <ul class="space-y-2">
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
                <span class="font-medium">JavaScript</span>
              </li>
              <li>
                Experience with <span class="font-medium">Vue</span> and
                <span class="font-medium">React</span> frameworks
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
                    2022 Oct - Present
                  </time>
                </div>
                <h4 class="mb-2 font-medium">Software Developer</h4>
                <ul
                  class="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300"
                >
                  <li>
                    Build projects related to Job Board, E-commerce, Real
                    Estate, etc., using the Botble CMS.
                  </li>
                  <li>Improved and expanded the Botble core framework.</li>
                  <li>
                    Actively participated in the development of internal company
                    projects as well as Botble's ongoing enhancements.
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
                <strong>Before AE</strong>: Contributed to and developed
                extensions for the open-source Flarum forum software built on
                Laravel.
              </li>
              <li>
                <strong>During AE</strong>: Developed plugins for the
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
                  Graduated with honors, ranking in the top 87 out of nearly
                  2000 students in my school.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
