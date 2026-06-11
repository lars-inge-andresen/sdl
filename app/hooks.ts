import { useMatches, type UIMatch } from "react-router";
import type { RouteHandle } from "./types";

export function useTypedMatches() {
  const matches = useMatches() as UIMatch<unknown, RouteHandle>[];
  return matches;
}
