<script setup>
import { profile } from '../data/content';
</script>

<template>
  <footer class="site-footer">
    <div class="wrap footer-row">
      <p>© {{ new Date().getFullYear() }} {{ profile.name }}. {{ profile.location }}.</p>
      <div class="socials">
        <a v-for="item in profile.socials" :key="item.href" :href="item.href" target="_blank" rel="noreferrer">
          {{ item.label }}
        </a>
      </div>
    </div>
  </footer>
</template>
