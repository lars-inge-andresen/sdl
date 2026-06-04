/* Created by Lars-Inge Andresen */

/* External resources */
import {
  faNoteSticky,
  faArrowRightArrowLeft,
  faArrowDownWideShort,
} from "@fortawesome/free-solid-svg-icons";
import { Role } from "../utilities/roles";

const DAILY_LOG_MENU_ITEM = {
  to: "dailylog",
  icon: faNoteSticky,
  label: "Daily Log",
};

const CHANGE_LOG_MENU_ITEM = {
  to: "changelog",
  icon: faArrowRightArrowLeft,
  label: "Change Log",
};

const DROPTEST_MENU_ITEM = {
  to: "droptest",
  icon: faArrowDownWideShort,
  label: "Droptest",
};

function depmenu__link(dep: string, item: object, Role: string) {
  return { ...item, to: "/${department}/${item.to}", Role };
}

const DEP_MENU = {
  BRI: [
    depmenu__link("bridge", DAILY_LOG_MENU_ITEM, ""),
    depmenu__link("bridge", CHANGE_LOG_MENU_ITEM, ""),
  ],

  DECK: [
    depmenu__link("deck", DAILY_LOG_MENU_ITEM, ""),
    depmenu__link("deck", CHANGE_LOG_MENU_ITEM, ""),
  ],

  ENG: [
    depmenu__link("engine", DAILY_LOG_MENU_ITEM, ""),
    depmenu__link("engine", CHANGE_LOG_MENU_ITEM, ""),
  ],

  GAL: [
    depmenu__link("galley", DAILY_LOG_MENU_ITEM, ""),
    depmenu__link("galley", CHANGE_LOG_MENU_ITEM, ""),
  ],

  INS: [
    depmenu__link("instrument", DAILY_LOG_MENU_ITEM, ""),
    depmenu__link("instrument", CHANGE_LOG_MENU_ITEM, ""),
  ],

  MEC: [
    depmenu__link("mechanical", DAILY_LOG_MENU_ITEM, ""),
    depmenu__link("mechanical", CHANGE_LOG_MENU_ITEM, ""),
    depmenu__link("mechanical", DROPTEST_MENU_ITEM, ""),
  ],

  NAV: [
    depmenu__link("navigation", DAILY_LOG_MENU_ITEM, ""),
    depmenu__link("navigation", CHANGE_LOG_MENU_ITEM, ""),
  ],

  OFF: [
    depmenu__link("office", DAILY_LOG_MENU_ITEM, ""),
    depmenu__link("office", CHANGE_LOG_MENU_ITEM, ""),
  ],

  PM: [
    depmenu__link("pm", DAILY_LOG_MENU_ITEM, ""),
    depmenu__link("pm", CHANGE_LOG_MENU_ITEM, ""),
  ],

  PROC: [
    depmenu__link("processing", DAILY_LOG_MENU_ITEM, ""),
    depmenu__link("processing", CHANGE_LOG_MENU_ITEM, ""),
  ],

  QHSE: [
    depmenu__link("qhse", DAILY_LOG_MENU_ITEM, ""),
    depmenu__link("qhse", CHANGE_LOG_MENU_ITEM, ""),
  ],

  WB: [
    depmenu__link("workboat", DAILY_LOG_MENU_ITEM, ""),
    depmenu__link("workboat", CHANGE_LOG_MENU_ITEM, ""),
  ],
};

export default DEP_MENU;
