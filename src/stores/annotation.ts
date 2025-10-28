import { computed } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

import type {
  SampleID,
  AnnotationID,
  SampleItem,
  AnnotationItem,
} from "@/types";

import { STORE_PARSER } from "@stores/_constants";
import { samplesStore, annotationStore } from "@stores/data";

export type AnnotationReplyItem = {
  id: AnnotationID;
  response: string;
};

export type SampleAnnotationReplyItem = {
  id: SampleID;
  annotations: Array<AnnotationReplyItem>;
};

// Utility
function formatAnnotations(): SampleAnnotationReplyItem[] {
  return samplesStore.get().map((sItem: SampleItem) => ({
    id: sItem.id,
    annotations: annotationStore.get().map((aItem: AnnotationItem) => ({
      id: aItem.id,
      response: aItem.options[0],
    })),
  }));
}

// Store Management
export const activeAnnotationItemStore = persistentAtom<number>(
  "activeAnnotation:",
  0,
  STORE_PARSER,
);

export const annotationReplyStore = persistentAtom<
  Array<SampleAnnotationReplyItem>
>("annotationReply:", formatAnnotations(), STORE_PARSER);

// Derived Stores
export const annotationsStoreActiveItem = computed(
  activeAnnotationItemStore,
  (index: number): SampleItem => {
    return samplesStore.get()[index];
  },
);

// Getters
export function getAnnotationReply(
  sID: SampleID,
  aID: AnnotationID,
): AnnotationReplyItem {
  return annotationReplyStore
    .get()
    .find((item: SampleAnnotationReplyItem) => item.id === sID)
    ?.annotations.find(
      (item: AnnotationReplyItem) => item.id === aID,
    ) as AnnotationReplyItem;
}

// Modifiers
export function setAnnotationReply(
  sID: SampleID,
  aID: AnnotationID,
  response: string,
): void {
  const annotationReplies: Array<SampleAnnotationReplyItem> =
    annotationReplyStore.get();
  const sampleIndex: number = annotationReplies.findIndex(
    (item: SampleAnnotationReplyItem) => item.id === sID,
  );
  const annotationIndex: number = annotationReplies[
    sampleIndex
  ].annotations.findIndex((item: AnnotationReplyItem) => item.id === aID);

  annotationReplies[sampleIndex].annotations[annotationIndex].response =
    response;
  annotationReplyStore.set(annotationReplies);
}

export function previousActiveAnnotationItem(): void {
  const val = activeAnnotationItemStore.get();

  if (val > 0) activeAnnotationItemStore.set(val - 1);
}

export function nextActiveAnnotationItem(): void {
  const val = activeAnnotationItemStore.get();

  if (val < samplesStore.get().length - 1)
    activeAnnotationItemStore.set(val + 1);
}

export function resetAnnotationReplyStore(): void {
  annotationReplyStore.set(formatAnnotations());
  activeAnnotationItemStore.set(0);
}
