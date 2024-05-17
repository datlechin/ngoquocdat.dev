<script setup lang="ts">
import AtSymbolIcon from '../components/Icons/AtSymbolIcon.vue'
import GitHubIcon from '../components/Icons/GitHubIcon.vue'
import GlobeAltIcon from '../components/Icons/GlobeAltIcon.vue'
import MapPinIcon from '../components/Icons/MapPinIcon.vue'
import PhoneIcon from '../components/Icons/PhoneIcon.vue'
</script>

<template>
  <div class="mx-auto max-w-6xl p-6">
    <div class="mb-8 flex items-start gap-4">
      <img
        src="/ngoquocdat.webp"
        alt="Ngo Quoc Dat"
        class="size-32 rounded-full"
      />
      <div>
        <div class="text-lg">Web Developer</div>
        <h1 class="mb-2 text-3xl font-bold">Ngo Quoc Dat</h1>
        <p>
          Experienced web developer with 3+ years in web app development. Eager
          to enhance skills in a dynamic environment. Passionate about new
          technologies and open-source contributions.
        </p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-12">
      <div class="col-span-1">
        <div class="mb-6 rounded bg-gray-100 p-3 print:p-0">
          <ul class="space-y-2">
            <li>
              <a
                href="mailto:datlechin@gmail.com"
                class="inline-flex items-center gap-2 transition-all hover:underline"
              >
                <AtSymbolIcon class="size-6" />
                datlechin@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:0372124043"
                class="inline-flex items-center gap-2 transition-all hover:underline"
              >
                <PhoneIcon class="size-6" />
                0372124043
              </a>
            </li>
            <li>
              <a
                href="https://ngoquocdat.dev"
                target="_blank"
                class="inline-flex items-center gap-2 transition-all hover:underline"
              >
                <GlobeAltIcon class="size-6" />
                ngoquocdat.dev
              </a>
            </li>
            <li>
              <a
                href="https://github.com/datlechin"
                target="_blank"
                class="inline-flex items-center gap-2 transition-all hover:underline"
              >
                <GitHubIcon class="size-6" />
                datlechin
              </a>
            </li>
            <li
              class="inline-flex items-center gap-2"
              title="338 Nguyễn Văn Quá Đông Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh, Việt Nam"
            >
              <MapPinIcon class="size-6" />
              12 District, Ho Chi Minh City
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-3 text-xl font-semibold uppercase">Skills</h2>
        </div>
      </div>
      <div class="grid-col col-span-1 grid gap-10">
        <div>
          <h2 class="mb-3 text-xl font-semibold uppercase">Experience</h2>
          <div class="grid-col grid gap-4">
            <div>
              <div class="flex items-center gap-1">
                <h3 class="mb-0.5 text-lg font-semibold">Archi Elite</h3>
                <time
                  class="text-sm text-gray-700 before:me-1 before:content-['-']"
                >
                  2022 Oct - Present
                </time>
              </div>
              <h4 class="mb-2 font-medium">Software Developer</h4>
              <div class="text-gray-700">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati incidunt dolorum ratione alias ab.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati incidunt dolorum ratione alias ab.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="mb-3 text-xl font-semibold uppercase">Projects</h2>
        </div>
        <div>
          <h2 class="mb-4 text-xl font-semibold uppercase">Education</h2>
          <div class="grid-col grid gap-4">
            <div>
              <div class="flex items-center gap-1">
                <h3 class="mb-0.5 text-lg font-semibold">FPT Polytechnic</h3>
                <time
                  class="text-sm text-gray-700 before:me-1 before:content-['-']"
                >
                  2021 Oct - 2024 Feb
                </time>
              </div>
              <h4 class="font-medium">Web Engineering</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
