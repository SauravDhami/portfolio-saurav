import { onMounted, onUnmounted, ref } from 'vue';

export function useReveal() {
    const root = ref(null);
    let observer;

    onMounted(() => {
        if (!root.value) {
            return;
        }

        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        root.value.querySelectorAll('[data-reveal]').forEach((node) => observer.observe(node));
    });

    onUnmounted(() => observer?.disconnect());

    return { root };
}
