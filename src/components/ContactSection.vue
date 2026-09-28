<script setup>
import { ref } from 'vue';
import { intents, profile } from '../data/content';
import { localApi } from '../local';

const emit = defineEmits(['toast']);

const form = ref({
    name: '',
    email: '',
    intent: '',
    subject: '',
    message: '',
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
        const result = localApi.sendMail(form.value);
        ok.value = true;
        status.value = result.message;
        form.value.message = '';
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
  <section id="contact" class="section">
    <div class="wrap grid-2">
      <div data-reveal>
        <p class="kicker">Contact</p>
        <h2>Write to me.</h2>
        <p class="lead">
          A role, a project, or a simple hello. Send a note and I will read it.
          If you would rather start from the CV, it is here as well.
        </p>
        <div class="actions" style="margin-top: 18px;">
          <a class="btn btn-ghost" :href="profile.cv" :download="profile.cvFile">Download CV</a>
        </div>
        <div class="socials" style="margin-top: 18px;">
          <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
          <a v-for="item in profile.socials" :key="item.href" :href="item.href" target="_blank" rel="noreferrer">
            {{ item.label }}
          </a>
        </div>
      </div>
      <form class="panel" data-reveal @submit.prevent="submit">
        <div class="form-grid">
          <label>
            Your name
            <input v-model="form.name" required maxlength="80">
          </label>
          <label>
            Your email
            <input v-model="form.email" type="email" required maxlength="120">
          </label>
          <label>
            Why
            <select v-model="form.intent">
              <option value="">Just saying hello</option>
              <option v-for="item in intents" :key="item.key" :value="item.key">{{ item.title }}</option>
            </select>
          </label>
          <label>
            Subject
            <input v-model="form.subject" maxlength="120" placeholder="Optional">
          </label>
          <label>
            Message
            <textarea v-model="form.message" required maxlength="2000" placeholder="What should I know?"></textarea>
          </label>
          <input v-model="form.website" class="hp" tabindex="-1" autocomplete="off">
          <button class="btn btn-primary" type="submit" :disabled="busy">
            {{ busy ? 'Sending…' : 'Send message' }}
          </button>
          <p class="status" :class="ok ? 'is-ok' : 'is-error'" v-if="status">{{ status }}</p>
        </div>
      </form>
    </div>
  </section>
</template>
