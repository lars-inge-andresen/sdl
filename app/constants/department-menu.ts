/* Created by Lars-Inge Andresen */

/* External resources */
import {
  faNoteSticky,
  faArrowRightArrowLeft,
  faArrowDownWideShort,
  type IconDefinition,
  faToolbox,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ROLE_VALUES, type Role } from "../utilities/roles";

export interface DepartmentMenuItem {
  to: string;
  icon: IconDefinition;
  label: string;
  role: Role;
}

const DAILY_LOG_MENU_ITEM: DepartmentMenuItem = {
  to: "dailylog",
  icon: faNoteSticky,
  label: "Daily Log",
  role: ROLE_VALUES.GUEST,
};

const CHANGE_LOG_MENU_ITEM: DepartmentMenuItem = {
  to: "changelog",
  icon: faArrowRightArrowLeft,
  label: "Change Log",
  role: ROLE_VALUES.GUEST,
};

const DROPTEST_MENU_ITEM: DepartmentMenuItem = {
  to: "droptest",
  icon: faArrowDownWideShort,
  label: "Droptest",
  role: ROLE_VALUES.OPERATOR,
};

const TOOLS_MENU_ITEM: DepartmentMenuItem = {
  to: "tools",
  icon: faToolbox,
  label: "Tools",
  role: ROLE_VALUES.GUEST,
};

const ABOUT_MENU_ITEM: DepartmentMenuItem = {
  to: "about",
  icon: faInfoCircle,
  label: "About",
  role: ROLE_VALUES.GUEST,
};

function depmenu__link(
  department: string,
  item: DepartmentMenuItem,
): DepartmentMenuItem {
  return { ...item, to: `/${department}/${item.to}` };
}

const DEP_MENUS = {
  BRI: [
    depmenu__link("bridge", DAILY_LOG_MENU_ITEM),
    depmenu__link("bridge", CHANGE_LOG_MENU_ITEM),
    depmenu__link("bridge", TOOLS_MENU_ITEM),
    depmenu__link("bridge", ABOUT_MENU_ITEM),
  ],

  DECK: [
    depmenu__link("deck", DAILY_LOG_MENU_ITEM),
    depmenu__link("deck", CHANGE_LOG_MENU_ITEM),
  ],

  /*   ENG: [
    depmenu__link("", DAILY_LOG_MENU_ITEM),
    depmenu__link("", CHANGE_LOG_MENU_ITEM),
  ],

  GAL: [
    depmenu__link("", DAILY_LOG_MENU_ITEM),
    depmenu__link("", CHANGE_LOG_MENU_ITEM),
  ],

  INS: [
    depmenu__link("", DAILY_LOG_MENU_ITEM),
    depmenu__link("", CHANGE_LOG_MENU_ITEM),
  ],

  MEC: [
    depmenu__link("", DAILY_LOG_MENU_ITEM),
    depmenu__link("", CHANGE_LOG_MENU_ITEM),
    depmenu__link("", DROPTEST_MENU_ITEM),
  ],

  NAV: [
    depmenu__link("", DAILY_LOG_MENU_ITEM),
    depmenu__link("", CHANGE_LOG_MENU_ITEM),
  ],

  OFF: [
    depmenu__link("", DAILY_LOG_MENU_ITEM),
    depmenu__link("", CHANGE_LOG_MENU_ITEM),
  ],

  PM: [
    depmenu__link("", DAILY_LOG_MENU_ITEM),
    depmenu__link("", CHANGE_LOG_MENU_ITEM),
  ],

  PROC: [
    depmenu__link("", DAILY_LOG_MENU_ITEM),
    depmenu__link("", CHANGE_LOG_MENU_ITEM),
  ],

  QHSE: [
    depmenu__link("", DAILY_LOG_MENU_ITEM),
    depmenu__link("", CHANGE_LOG_MENU_ITEM),
  ],

  WB: [
    depmenu__link("", DAILY_LOG_MENU_ITEM),
    depmenu__link("", CHANGE_LOG_MENU_ITEM),
  ], */
};

export default DEP_MENUS;
