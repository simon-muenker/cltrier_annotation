<script lang="ts">
  import Icon from "@iconify/svelte";

  import { sectionsStore } from "@stores/data";

  function scrollDown() {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  }
</script>

<header class="bg-gray-900 text-white">
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-7xl text-center">
      <h1
        class="gradient bg-clip-text py-2 text-4xl font-extrabold text-transparent md:text-5xl lg:text-6xl 2xl:text-8xl"
      >
        {$sectionsStore.hero.title}
      </h1>

      <p class="mx-auto max-w-4xl py-4 leading-relaxed md:text-xl">
        {$sectionsStore.hero.introduction}
      </p>

      <div class="flex flex-wrap justify-center gap-4 py-8">
        <button
          class="gradient block w-auto cursor-pointer rounded-full p-4 text-white hover:animate-pulse"
          onclick={() => scrollDown()}
        >
          <Icon
            icon="mdi:arrow-down"
            class="inline-block h-10 w-11 align-text-top"
          />
        </button>
      </div>
    </div>
  </div>
</header>
