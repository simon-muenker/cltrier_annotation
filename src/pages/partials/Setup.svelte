<script lang="ts">
  import type { Data } from "@/types";
  import { uploadJSON } from "@common/json";

  import { isDemoStore } from "@stores/setup";
  import { dataStore } from "@/stores/data";
  import { resetSurveyReplyStore } from "@/stores/survey";
  import { resetAnnotationReplyStore } from "@/stores/annotation";
</script>

<div class="flex items-center gap-8">
  <div class="flex items-center gap-4">
    <label class="block text-sm font-medium text-gray-900" for="data_upload">
      {#if $isDemoStore}
        Upload&nbsp;Data
      {:else}
        Replace&nbsp;Data
      {/if}
    </label>
    <div>
      <input
        class="block w-full cursor-pointer rounded-lg border border-gray-200 text-sm shadow-md file:me-4 file:border-0 file:bg-gray-50 file:px-4 file:py-3"
        id="data_upload"
        type="file"
        accept=".json"
        onchange={async (event) => {
          dataStore.set((await uploadJSON(event)) as Data);
          isDemoStore.set(false);
          resetSurveyReplyStore();
          resetAnnotationReplyStore();
          window.location.href = window.location.href.replace("/setup", "");
        }}
      />
    </div>
  </div>
  <div class="text-sm text-slate-500">or</div>
  <div>
    <a class="button" href="/Open-Text-Annotation-Tool">
      <span class="inner">
        {#if $isDemoStore}
          Show Demo
        {:else}
          Goto Survey
        {/if}
      </span>
    </a>
  </div>
</div>
