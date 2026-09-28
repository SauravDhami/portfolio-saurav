<script setup>
import { ref } from 'vue';
import AboutSection from './components/AboutSection.vue';
import ApproachSection from './components/ApproachSection.vue';
import ContactSection from './components/ContactSection.vue';
import HeroSection from './components/HeroSection.vue';
import PlaySection from './components/PlaySection.vue';
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';
import WorkSection from './components/WorkSection.vue';
import { useReveal } from './composables/useReveal';

const { root } = useReveal();
const toasts = ref([]);

function pushToast(message) {
    const id = Date.now();
    toasts.value = [...toasts.value.slice(-2), { id, message }];
    window.setTimeout(() => {
        toasts.value = toasts.value.filter((item) => item.id !== id);
    }, 3600);
}
</script>

<template>
  <div class="page" ref="root">
    <SiteHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ApproachSection @toast="pushToast" />
      <PlaySection @toast="pushToast" />
      <ContactSection @toast="pushToast" />
    </main>
    <SiteFooter />
    <div class="toast-host" aria-live="polite">
      <div v-for="toast in toasts" :key="toast.id" class="toast">{{ toast.message }}</div>
    </div>
  </div>
</template>
