<script lang="ts">
  import type { SurveyItem } from "@/types";
  import { getSurveyReply, setSurveyReply } from "@stores/survey";

  let { id, label, options, description = undefined }: SurveyItem = $props();
  let response: string = $state(getSurveyReply(id).response);
</script>

<div>
  <label
    for={id}
    class="mb-2 block h-auto font-medium text-slate-700 md:h-[3lh]"
    >{label}</label
  >
  <select
    {id}
    bind:value={response}
    onchange={() => setSurveyReply(id, response)}
    class="
      inline-flex w-auto cursor-pointer rounded-lg border-2 text-left shadow-md
      {response != options[0] ? 'border-emerald-500' : 'border-transparent'}
    "
  >
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
  {#if description != ""}
    <span class="mt-4 block text-sm">
      {description}
    </span>
  {/if}
</div>
