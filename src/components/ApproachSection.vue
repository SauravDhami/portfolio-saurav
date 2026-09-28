<script setup>
import { ref } from 'vue';
import { intents } from '../data/content';
import { localApi } from '../local';

const emit = defineEmits(['toast']);

const form = ref({
    intent: 'friendship',
    name: '',
    email: '',
    note: '',
    website: '',
});
const busy = ref(false);
const status = ref('');
const ok = ref(false);

function submit() {
    busy.value = true;
    status.value = '';
    ok.value = false;

    try {
        const result = localApi.sendApproach(form.value);
        ok.value = true;
        status.value = result.message;
        form.value.note = '';
        emit('toast', result.message);
    } catch (error) {
        status.value = error.message;
        emit('toast', error.message);
    } finally {
        busy.value = false;
    }
}
</script>

<template>
  <section id="approach" class="section">
    <div class="wrap">
      <p class="kicker" data-reveal>Approach</p>
      <h2 data-reveal>Tell me what brought you here. Friendship counts.</h2>
      <p class="lead" data-reveal>
        A collaboration, a role, or a conversation. Leave a short note and I will read it.
      </p>
      <form class="panel" style="margin-top: 28px;" data-reveal @submit.prevent="submit">
        <div class="intent-grid">
          <button
            v-for="item in intents"
            :key="item.key"
            type="button"
            class="card intent-card"
            :class="{ 'is-active': form.intent === item.key }"
            @click="form.intent = item.key"
          >
            <h3>{{ item.title }}</h3>
            <p class="muted">{{ item.copy }}</p>
          </button>
        </div>
        <div class="form-grid" style="margin-top: 22px;">
          <label>
            Name
            <input v-model="form.name" type="text" maxlength="80" placeholder="Optional">
          </label>
          <label>
            Email
            <input v-model="form.email" type="email" maxlength="120" placeholder="Optional">
          </label>
          <label>
            A short note
            <textarea v-model="form.note" maxlength="400" required placeholder="Why this, and what should I know?"></textarea>
          </label>
          <input v-model="form.website" class="hp" tabindex="-1" autocomplete="off">
          <button class="btn btn-primary" type="submit" :disabled="busy">
            {{ busy ? 'Sending…' : 'Send the note' }}
          </button>
          <p class="status" :class="ok ? 'is-ok' : 'is-error'" v-if="status">{{ status }}</p>
        </div>
      </form>
    </div>
  </section>
</template>
