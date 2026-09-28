<script setup>
import { profile } from '../data/content';
</script>

<template>
  <section id="top" class="wrap hero">
    <div data-reveal>
      <p class="kicker">{{ profile.location }} · {{ profile.role }}</p>
      <h1>{{ profile.name }}</h1>
      <p class="lead">
        Backend engineer working in Laravel, Node.js, and RabbitMQ.
        Four years building services that stay reliable for large subscriber platforms.
        Away from the desk, futsal comes first, and travel is the plan I keep ready.
      </p>
      <div class="chips">
        <span class="chip">Laravel</span>
        <span class="chip">Node.js</span>
        <span class="chip">RabbitMQ</span>
        <span class="chip">Futsal</span>
      </div>
      <div class="actions">
        <a class="btn btn-primary" :href="profile.cv" :download="profile.cvFile">Download CV</a>
        <a class="btn btn-ghost" href="#contact">Get in touch</a>
      </div>
      <div class="socials">
        <a v-for="item in profile.socials" :key="item.href" :href="item.href" target="_blank" rel="noreferrer">
          {{ item.label }}
        </a>
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      </div>
    </div>
    <div class="photo-frame" data-reveal>
      <img :src="profile.photo" :alt="profile.name">
    </div>
  </section>
</template>
