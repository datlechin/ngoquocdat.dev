<script setup lang="ts">
import SocialItem, { SocialLink } from './SocialItem.vue'
import GitHubIcon from './Icons/GitHubIcon.vue'
import XIcon from './Icons/XIcon.vue'
import FacebookIcon from './Icons/FacebookIcon.vue'
import InstagramIcon from './Icons/InstagramIcon.vue'

const socials: SocialLink[] = [
  {
    href: 'https://github.com/datlechin',
    title: 'GitHub',
    icon: GitHubIcon,
  },
  {
    href: 'https://x.com/datlechin',
    title: 'Twitter',
    icon: XIcon,
  },
  {
    href: 'https://facebook.com/ngoquocdatne',
    title: 'Facebook',
    icon: FacebookIcon,
  },
  {
    href: 'https://instagram.com/ngoquocdatne',
    title: 'Instagram',
    icon: InstagramIcon,
  },
]
</script>

<template>
  <ul class="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
    <li v-for="social in socials" :key="social.title">
      <social-item
        :href="social.href"
        :title="social.title"
        :icon="social.icon"
      />
    </li>
  </ul>
</template>
