<script setup>
import { onMounted, ref } from 'vue';
import { quizQuestions } from '../data/content';
import { localApi } from '../local';

const emit = defineEmits(['toast']);

const waves = ref(0);
const waving = ref(false);
const quizBusy = ref(false);
const answers = ref({
    weekend: '',
    recovery: '',
    ticket: '',
    website: '',
});
const result = ref(null);

onMounted(() => {
    waves.value = localApi.getWaves().total;
});

function wave() {
    waving.value = true;
    const data = localApi.sendWave();
    waves.value = data.total;
    emit('toast', data.message);
    waving.value = false;
}

function submitQuiz() {
    if (!answers.value.weekend || !answers.value.recovery || !answers.value.ticket) {
        emit('toast', 'Answer all three. It only takes a moment.');
        return;
    }

    quizBusy.value = true;
    result.value = localApi.sendQuiz(answers.value);
    emit('toast', result.value.title);
    quizBusy.value = false;
}
</script>

<template>
  <section id="play" class="section">
    <div class="wrap">
      <p class="kicker" data-reveal>Play</p>
      <h2 data-reveal>A hello, then a few questions that are not about code.</h2>
      <div class="grid-2" style="margin-top: 28px;">
        <article class="panel wave-card" data-reveal>
          <div class="wave-box">
            <div>
              <p class="kicker">Hellos</p>
              <p class="wave-count">{{ waves }}</p>
              <p class="muted">A small wave. I will wave back.</p>
            </div>
            <button class="btn btn-primary" type="button" :disabled="waving" @click="wave">
              {{ waving ? 'Waving…' : 'Wave at me' }}
            </button>
          </div>
        </article>
        <article class="panel" data-reveal>
          <p class="muted" v-if="!result">Three questions about a free day. There is no right answer.</p>
          <div v-if="result">
            <h3>{{ result.title }}</h3>
            <p class="muted">{{ result.copy }}</p>
          </div>
          <div v-else class="form-grid">
            <div v-for="question in quizQuestions" :key="question.key">
              <p style="margin-bottom: 8px; font-weight: 600;">{{ question.prompt }}</p>
              <div class="chips">
                <button
                  v-for="option in question.options"
                  :key="option.value"
                  type="button"
                  class="chip quiz-option"
                  :class="{ 'is-active': answers[question.key] === option.value }"
                  @click="answers[question.key] = option.value"
                >
                  {{ option.label }}
                </button>
              </div>
            </div>
            <button class="btn btn-ghost" type="button" :disabled="quizBusy" @click="submitQuiz">
              {{ quizBusy ? 'Reading…' : 'See the result' }}
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
