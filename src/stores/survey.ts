import _ from "lodash";

import { persistentAtom } from "@nanostores/persistent";

import type { SurveyItemID, SurveyItem } from "@/types";

import { STORE_PARSER } from "@stores/_constants";
import { surveyStore } from "@stores/data";

export type SurveyReplyItem = {
  id: SurveyItemID;
  response: string;
};

// Utility
function formatSurvey(): SurveyReplyItem[] {
  return surveyStore
    .get()
    .map((item: SurveyItem) => ({ id: item.id, response: item.options[0] }));
}

// Store Management
export const surveyReplyStore = persistentAtom<Array<SurveyReplyItem>>(
  "surveyReply:",
  formatSurvey(),
  STORE_PARSER,
);

// Getters
export function getSurveyReply(id: SurveyItemID): SurveyReplyItem {
  return surveyReplyStore
    .get()
    .find((item: SurveyReplyItem) => item.id === id) as SurveyReplyItem;
}

// Modifiers
export function setSurveyReply(id: SurveyItemID, response: string): void {
  const surveyReplies: Array<SurveyReplyItem> = surveyReplyStore.get();
  const responseID: number = surveyReplies.findIndex(
    (item: SurveyReplyItem) => item.id === id,
  );

  surveyReplies[responseID].response = response;
  surveyReplyStore.set(surveyReplies);
}

export function resetSurveyReplyStore(): void {
  surveyReplyStore.set(formatSurvey());
}
