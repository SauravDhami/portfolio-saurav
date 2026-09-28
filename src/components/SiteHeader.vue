<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { profile } from '../data/content';

const scrolled = ref(false);

function onScroll() {
    scrolled.value = window.scrollY > 8;
}

onMounted(() => {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
});

onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <div class="wrap nav">
      <a class="brand" href="#top">{{ profile.name }}</a>
      <nav class="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#approach">Approach</a>
        <a href="#play">Play</a>
        <a :href="profile.cv" :download="profile.cvFile">CV</a>
      </nav>
      <a class="nav-cta" href="#contact">Say hello</a>
    </div>
  </header>
</template>
