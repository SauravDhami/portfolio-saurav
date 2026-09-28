<script setup>
import { aboutCards } from '../data/content';
</script>

<template>
  <section id="about" class="section">
    <div class="wrap">
      <p class="kicker" data-reveal>About</p>
      <h2 data-reveal>A backend engineer who still wants to be outside.</h2>
      <p class="lead" data-reveal>
        Most of my day is Laravel, Node.js, RabbitMQ, payments, and authentication
        for products that cannot afford a quiet failure. After that I want a real game.
        Travel is on the list; the chances have been rare so far.
      </p>
      <div class="grid-3" style="margin-top: 28px;">
        <article v-for="card in aboutCards" :key="card.title" class="card" data-reveal>
          <h3>{{ card.title }}</h3>
          <p class="muted">{{ card.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
