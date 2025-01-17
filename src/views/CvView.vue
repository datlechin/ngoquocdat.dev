<script setup lang="ts">
import AtSymbolIcon from '../components/Icons/AtSymbolIcon.vue'
import GitHubIcon from '../components/Icons/GitHubIcon.vue'
import GlobeAltIcon from '../components/Icons/GlobeAltIcon.vue'
import MapPinIcon from '../components/Icons/MapPinIcon.vue'
import PhoneIcon from '../components/Icons/PhoneIcon.vue'
import CalendarIcon from '../components/Icons/CalendarIcon.vue'
</script>

<template>
  <main class="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
    <div class="mx-auto max-w-5xl px-6 py-12 print:py-6">
      <header class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[auto,1fr]">
        <img src="/ngoquocdat.webp" alt="Ngo Quoc Dat" class="h-32 w-32 rounded-full object-cover" />
        <div>
          <div class="flex flex-col justify-between gap-4 md:flex-row">
            <div>
              <h1 class="mb-2 text-4xl font-bold">Ngo Quoc Dat</h1>
              <div class="mb-4 text-xl text-gray-600 dark:text-gray-400">Web Developer</div>
              <p class="mb-2 max-w-2xl text-lg">
                Experienced web developer with 3 years of expertise in PHP and JavaScript,
                specializing in Laravel and Vue.js. Strong self-learning capabilities and
                problem-solving skills. Passionate about exploring new technologies and
                contributing to open source projects.
              </p>
            </div>
            <ul class="space-y-2 text-sm">
              <li>
                <div class="inline-flex items-center gap-2">
                  <CalendarIcon class="size-6" />
                  Apr 24, 2003 ({{ new Date().getFullYear() - 2003 }} years old)
                </div>
              </li>
              <li>
                <a href="mailto:hi@ngoquocdat.dev"
                  class="inline-flex items-center gap-2 underline-offset-2 transition-all hover:underline">
                  <AtSymbolIcon class="size-6" />
                  hi@ngoquocdat.dev
                </a>
              </li>
              <li>
                <a href="tel:0372124043"
                  class="inline-flex items-center gap-2 underline-offset-2 transition-all hover:underline">
                  <PhoneIcon class="size-6" />
                  0372124043
                </a>
              </li>
              <li>
                <a href="https://ngoquocdat.dev"
                  class="inline-flex items-center gap-2 underline-offset-2 transition-all hover:underline">
                  <GlobeAltIcon class="size-6" />
                  ngoquocdat.dev
                </a>
              </li>
              <li>
                <a href="https://github.com/datlechin" target="_blank"
                  class="inline-flex items-center gap-2 underline-offset-2 transition-all hover:underline">
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
        </div>
      </header>
      <div class="grid gap-12 md:grid-cols-2">
        <div class="space-y-10">
          <section>
            <h2 class="mb-6 text-2xl font-bold">Experience</h2>
            <div class="space-y-6">
              <div>
                <div class="mb-2 flex flex-wrap items-baseline gap-2">
                  <h3 class="text-xl font-semibold">SePay</h3>
                  <span class="text-sm text-gray-600 dark:text-gray-400">2024 Aug - Present</span>
                </div>
                <h4 class="mb-3 text-lg text-gray-600 dark:text-gray-400">PHP Developer</h4>
                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                  <li class="flex items-start gap-2">
                    <span class="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                    <span>Developing core products for SePay, Vietnam's leading fintech payment solution provider</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                    <span>Implementing direct banking integrations with major Vietnamese banks through Open Banking
                      APIs</span>
                  </li>
                </ul>
              </div>
              <div>
                <div class="mb-2 flex flex-wrap items-baseline gap-2">
                  <h3 class="text-xl font-semibold">Archi Elite</h3>
                  <span class="text-sm text-gray-600 dark:text-gray-400">2022 Oct - 2024 May</span>
                </div>
                <h4 class="mb-3 text-lg text-gray-600 dark:text-gray-400">Software Developer</h4>
                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                  <li class="flex items-start gap-2">
                    <span class="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                    <span>Primarily used Laravel, Vue.js, and jQuery for development</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                    <span>Developed and improved Botble CMS (a CMS built with Laravel)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                    <span>Built projects related to Job Board, E-commerce, Real Estate using Botble CMS</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                    <span>Participated in building the Marketplace for Botble CMS and internal company & community
                      tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div class="space-y-10">
          <section>
            <h2 class="mb-4 text-2xl font-bold">Skills</h2>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                <span>English reading comprehension</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                <span>Strong grasp of <strong>PHP</strong>, <strong>Laravel</strong>, and <strong>CodeIgniter
                    4</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                <span>Working knowledge of <strong>OOP & Design Patterns</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                <span>Experience with <strong>Vue.js</strong> and <strong>React</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                <span>Proficiency in <strong>TailwindCSS</strong> and <strong>Bootstrap</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                <span>Proficient in using <strong>Git</strong> and <strong>GitHub</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                <span>Experience with <strong>Inertia.js</strong>, <strong>Livewire</strong>, and
                  <strong>jQuery</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                <span>Experience working with <strong>Linux</strong> environments</span>
              </li>
            </ul>
          </section>
          <section>
            <h2 class="mb-6 text-2xl font-bold">Projects & Activities</h2>
            <p class="mb-4">
              I focused on learning the technologies I used and contributing to open-source projects on
              <a href="https://github.com/datlechin?tab=repositories" target="_blank"
                class="text-blue-600 underline decoration-blue-600 decoration-2 underline-offset-2 transition-colors hover:text-blue-700 dark:text-blue-400 dark:decoration-blue-400 dark:hover:text-blue-300">
                GitHub
              </a>.
            </p>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                <span>Contributed to and developed extensions for the open-source Flarum forum software built on
                  Laravel</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="mt-2 h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                <span>
                  Developed plugins for the
                  <a href="https://botble.com" target="_blank"
                    class="text-blue-600 underline decoration-blue-600 decoration-2 underline-offset-2 transition-colors hover:text-blue-700 dark:text-blue-400 dark:decoration-blue-400 dark:hover:text-blue-300">
                    Botble
                  </a>
                  ecosystem and founded
                  <a href="https://friendsofbotble.com" target="_blank"
                    class="text-blue-600 underline decoration-blue-600 decoration-2 underline-offset-2 transition-colors hover:text-blue-700 dark:text-blue-400 dark:decoration-blue-400 dark:hover:text-blue-300">
                    Friends of Botble
                  </a>.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="mb-6 text-2xl font-bold">Education</h2>
            <div>
              <div class="mb-2 flex flex-wrap items-baseline gap-2">
                <h3 class="text-xl font-semibold">FPT Polytechnic</h3>
                <span class="text-sm text-gray-600 dark:text-gray-400">2021 Aug - 2024 May</span>
              </div>
              <h4 class="mb-3 text-lg text-gray-600 dark:text-gray-400">Web Engineering</h4>
              <p class="text-gray-700 dark:text-gray-300">
                Graduated with honors, excelling in courses related to the current field.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>
