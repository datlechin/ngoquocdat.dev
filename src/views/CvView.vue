<script setup lang="ts">
import AtSymbolIcon from '../components/Icons/AtSymbolIcon.vue'
import GitHubIcon from '../components/Icons/GitHubIcon.vue'
import GlobeAltIcon from '../components/Icons/GlobeAltIcon.vue'
import MapPinIcon from '../components/Icons/MapPinIcon.vue'
import PhoneIcon from '../components/Icons/PhoneIcon.vue'
import CalendarIcon from '../components/Icons/CalendarIcon.vue'
import ArrowTopRightOnSquare from '../components/Icons/ArrowTopRightOnSquare.vue'
</script>

<template>
  <main class="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
    <div class="mx-auto max-w-4xl px-6 py-12 print:py-6">
      <header class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[auto,1fr]">
        <img src="/ngoquocdat.webp" alt="Ngo Quoc Dat" class="h-28 w-28 rounded-full object-cover" />
        <div>
          <div class="flex flex-col justify-between gap-4 md:flex-row">
            <div>
              <h1 class="mb-2 text-3xl font-bold">Ngo Quoc Dat</h1>
              <div class="mb-4 text-lg text-gray-600 dark:text-gray-400">Software Developer</div>
              <p class="mb-2 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Web developer with 3+ years experience building web applications, specializing in fintech and payment solutions. Active open-source contributor with multiple popular packages for Laravel and Flarum communities. Specialized in Laravel and modern JavaScript frameworks. Developed fintech solutions at SePay and contributed to Botble CMS marketplace.
              </p>
            </div>
            <ul class="space-y-2 text-sm">
              <li>
                <div class="inline-flex items-center gap-2">
                  <CalendarIcon class="size-4" />
                  Apr 24, 2003
                </div>
              </li>
              <li>
                <a href="mailto:hi@ngoquocdat.dev" class="inline-flex items-center gap-2">
                  <AtSymbolIcon class="size-4" />
                  hi@ngoquocdat.dev
                </a>
              </li>
              <li>
                <a href="tel:0372124043" class="inline-flex items-center gap-2">
                  <PhoneIcon class="size-4" />
                  0372124043
                </a>
              </li>
              <li>
                <a href="https://ngoquocdat.dev" class="inline-flex items-center gap-2">
                  <GlobeAltIcon class="size-4" />
                  ngoquocdat.dev
                </a>
              </li>
              <li>
                <a href="https://github.com/datlechin" target="_blank" class="inline-flex items-center gap-2">
                  <GitHubIcon class="size-4" />
                  datlechin
                </a>
              </li>
              <li>
                <div class="inline-flex items-center gap-2">
                  <MapPinIcon class="size-4" />
                  12 District, HCMC
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div class="grid gap-12 md:grid-cols-2">
        <div class="space-y-10">
          <section>
            <h2 class="mb-6 text-xl font-bold">Experience</h2>
            <div class="space-y-8">
              <div>
                <div class="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 class="text-lg font-semibold">SePay</h3>
                  <span class="text-sm text-gray-600 dark:text-gray-400">2024 Aug - Present</span>
                </div>
                <h4 class="mb-3 text-base text-gray-600 dark:text-gray-400">PHP Developer</h4>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>Developing and maintaining payment systems using CodeIgniter 4</li>
                  <li>Designing and implementing API integrations with major Vietnamese banks</li>
                  <li>Building deeplink solutions for banking applications and optimizing user experience</li>
                  <li>Developing SDKs and plugins for third-party payment services</li>
                  <li>Writing unit and integration tests to ensure code quality and reliability</li>
                  <li>Implementing secure financial transactions and payment processing workflows</li>
                </ul>
              </div>
              <div>
                <div class="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 class="text-lg font-semibold">Archi Elite</h3>
                  <span class="text-sm text-gray-600 dark:text-gray-400">2022 Oct - 2024 May</span>
                </div>
                <h4 class="mb-3 text-base text-gray-600 dark:text-gray-400">Software Developer</h4>
                <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>Developed and improved Botble CMS core features and marketplace platform</li>
                  <li>Built projects related to Job Board, E-commerce, Real Estate using Botble CMS</li>
                  <li>Participated in building internal company & community tools</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 class="mb-6 text-xl font-bold">Education</h2>
            <div>
              <div class="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <h3 class="text-lg font-medium">FPT Polytechnic</h3>
                <span class="text-sm text-gray-600 dark:text-gray-400">2021 Aug - 2024 May</span>
              </div>
              <h4 class="mb-2 text-base text-gray-600 dark:text-gray-400">Web Engineering</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">Graduated with honors, excelling in courses related to the current field.</p>
            </div>
          </section>
        </div>

        <div class="space-y-10">
          <section>
            <h2 class="mb-6 text-xl font-bold">Technical Skills</h2>
            <div class="space-y-6">
              <div>
                <h3 class="mb-2 text-base font-medium">Development & Tools</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="text-sm text-gray-600 dark:text-gray-400">PHP 8</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">Laravel</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">CodeIgniter 4</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">Vue.js</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">React</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">MySQL</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">Redis</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">Git</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">Docker</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">Linux</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">Nginx</span>
                </div>
              </div>
              <div>
                <h3 class="mb-2 text-base font-medium">Domain Expertise</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="text-sm text-gray-600 dark:text-gray-400">Payment Systems</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">Banking Integration</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">Unit Testing</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">API Development</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">System Architecture</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="mb-6 text-xl font-bold">Notable Projects</h2>
            <div class="space-y-6">
              <div>
                <h3 class="mb-2 text-lg font-medium">Botble Marketplace</h3>
                <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Developed and maintained <a href="https://marketplace.botble.com" target="_blank" class="hover:underline inline-flex items-center gap-1"><ArrowTopRightOnSquare class="size-3 inline" /> Botble Marketplace</a>, a platform for creating and managing online stores.
                </p>
              </div>
              <div>
                <h3 class="mb-2 text-lg font-medium">Friends of Botble</h3>
                <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Founded and developed <a href="https://friendsofbotble.com" target="_blank" class="hover:underline inline-flex items-center gap-1"><ArrowTopRightOnSquare class="size-3 inline" /> Friends of Botble</a>, a community platform for Botble developers, featuring resource sharing and collaboration tools.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="mb-6 text-xl font-bold">Open Source Contributions</h2>
            <div class="space-y-6">
              <div>
                <h3 class="mb-2 text-lg font-medium">Filament Menu Builder</h3>
                <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Created and maintained a popular Laravel package for building menus in Filament admin panel with 100+ stars.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-sm text-gray-600 dark:text-gray-400">PHP</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">Laravel</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">Filament</span>
                </div>
              </div>
              <div>
                <h3 class="mb-2 text-lg font-medium">Flarum Extensions</h3>
                <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Developed multiple extensions for Flarum forum software including Link Preview, ChatGPT integration, and Birthday features.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-sm text-gray-600 dark:text-gray-400">PHP</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">JavaScript</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-600 dark:text-gray-400">Flarum</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>
