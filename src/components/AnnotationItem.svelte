<script lang="ts">
  import type { SampleID, AnnotationItem } from "@/types";

  import { getAnnotationReply, setAnnotationReply } from "@stores/annotation";

  let {
    sampleID,
    annotation,
  }: { sampleID: SampleID; annotation: AnnotationItem } = $props();
  let response: string = $state(
    getAnnotationReply(sampleID, annotation.id).response,
  );

  $effect(() => {
    response = getAnnotationReply(sampleID, annotation.id).response;
  });
</script>

<div>
  <label for={annotation.id} class="mb-2 block font-medium text-slate-700"
    >{annotation.label}</label
  >
  <select
    id={annotation.id}
    bind:value={response}
    onchange={() => setAnnotationReply(sampleID, annotation.id, response)}
    class="
      inline-flex w-auto cursor-pointer rounded-lg border-2 text-left shadow-md
      {response != annotation.options[0]
      ? 'border-emerald-500'
      : 'border-transparent'}
    "
  >
    {#each annotation.options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
  {#if annotation.description != undefined}
    <span class="mt-4 block text-sm">
      {annotation.description}
    </span>
  {/if}
</div>
