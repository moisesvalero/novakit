<script lang="ts">
  import { reveal } from '$lib/reveal';

  type FaqItem = {
    question: string;
    answer: string;
    open: boolean;
  };

  const { faqs, toggleFaq } = $props<{
    faqs: FaqItem[];
    toggleFaq: (index: number) => void;
  }>();
</script>

<section id="faq" class="faq-section">
  <h2 class="title" use:reveal={{ stage: 'title' }}>Common Questions</h2>
  <div class="faq-container">
    {#each faqs as item, i}
      <div
        class="faq-item motion-card"
        class:open={item.open}
        use:reveal={{ stage: 'content', delay: 140 + i * 60 }}
      >
        <button
          type="button"
          class="faq-question"
          onclick={() => toggleFaq(i)}
          aria-expanded={item.open}
        >
          <span class="question-text">{item.question}</span>
          <span class="arrow">▾</span>
        </button>
        <div class="answer-wrapper" class:open={item.open}>
          <div class="answer">
            <p>{item.answer}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .faq-section {
    max-width: 800px;
    margin: 6rem auto 8rem;
    padding: 0 1.5rem;
  }

  .title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    letter-spacing: -0.03em;
  }

  .faq-container {
    margin-top: 2rem;
    text-align: left;
  }

  .faq-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 0.5rem 0;
    transition:
      background-color 0.25s ease-out,
      border-color 0.25s ease-out,
      opacity 0.25s ease-out;
    opacity: 0.9;
  }

  .faq-item.open {
    background: rgba(99, 102, 241, 0.04);
    border-left: 2px solid var(--accent);
    padding-left: 0.75rem;
    opacity: 1;
  }

  .faq-item:not(.open) {
    opacity: 0.8;
  }

  .faq-question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-main);
    cursor: pointer;
    padding: 1.5rem 0;
    text-align: left;
  }

  .question-text {
    display: inline-block;
    transition: transform 0.2s ease-out;
  }

  /* Micro‑interacción: desplaza un poco el texto en hover cuando está cerrado */
  .faq-item:not(.open) .faq-question:hover .question-text {
    transform: translateX(4px);
  }

  .answer-wrapper {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.32s cubic-bezier(0.25, 0.8, 0.25, 1),
      opacity 0.32s ease-out;
    opacity: 0;
  }

  .answer-wrapper.open {
    grid-template-rows: 1fr;
    opacity: 1;
  }

  .answer {
    overflow: hidden;
    padding-bottom: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .arrow {
    color: var(--accent);
    font-size: 1.5rem;
    transition: transform 0.35s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  .faq-item.open .arrow {
    transform: rotate(180deg);
  }
</style>

