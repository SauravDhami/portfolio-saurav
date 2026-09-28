<script setup>
import { education, experience, skills } from '../data/content';
</script>

<template>
  <section id="work" class="section">
    <div class="wrap">
      <p class="kicker" data-reveal>Work</p>
      <h2 data-reveal>Four years of backend work, and Vue when a product needs an interface.</h2>
      <div class="panel" data-reveal>
        <article v-for="job in experience" :key="job.place" class="work-item">
          <div class="work-meta">
            <div>
              <h3>{{ job.role }}</h3>
              <p class="muted">{{ job.place }}</p>
            </div>
            <p class="muted">{{ job.time }}</p>
          </div>
          <ul class="points">
            <li v-for="point in job.points" :key="point">{{ point }}</li>
          </ul>
          <div v-if="job.links" class="inline-links">
            <a v-for="link in job.links" :key="link.href" :href="link.href" target="_blank" rel="noreferrer">
              {{ link.label }}
            </a>
          </div>
        </article>
      </div>
      <div class="panel education" data-reveal>
        <h3>Education</h3>
        <article v-for="item in education" :key="item.school" class="edu-row">
          <div>
            <p class="edu-school">{{ item.school }}</p>
            <p class="muted">{{ item.detail }}</p>
          </div>
          <p class="muted">{{ item.time }}</p>
        </article>
      </div>
      <div class="skill-grid" style="margin-top: 18px;">
        <article v-for="(items, group) in skills" :key="group" class="card" data-reveal>
          <h3>{{ group }}</h3>
          <div class="chips">
            <span v-for="item in items" :key="item" class="chip">{{ item }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
