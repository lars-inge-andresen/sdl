/* Created by Lars-Inge Andresen */

/* External resources */
import {
  faNoteSticky,
  faArrowRightArrowLeft,
  faArrowDownWideShort,
  faIdCard,
  faShip,
  faBuilding,
  faUserFriends,
  faDiagramProject,
  faSnowboarding,
  faFolderTree,
  faLocationDot,
  faTriangleExclamation,
  type IconDefinition,
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
  role: ROLE_VALUES.OPERATOR,
};

const DROPTEST_MENU_ITEM: DepartmentMenuItem = {
  to: "droptest",
  icon: faArrowDownWideShort,
  label: "Droptest",
  role: ROLE_VALUES.OPERATOR,
};

const ADMIN_CUSTOMER: DepartmentMenuItem = {
  to: "../admin/customer",
  icon: faIdCard,
  label: "Customer",
  role: ROLE_VALUES.GLOBALADMIN,
};

const ADMIN_VESSEL: DepartmentMenuItem = {
  to: "../admin/vessel",
  icon: faShip,
  label: "Vessel",
  role: ROLE_VALUES.GLOBALADMIN,
};

const ADMIN_DEPARTMENT: DepartmentMenuItem = {
  to: "../admin/department",
  icon: faBuilding,
  label: "Departments",
  role: ROLE_VALUES.OFFICE,
};

const ADMIN_USER: DepartmentMenuItem = {
  to: "../admin/user",
  icon: faUserFriends,
  label: "Users",
  role: ROLE_VALUES.OFFICE,
};

const ADMIN_PROJECT: DepartmentMenuItem = {
  to: "../admin/project",
  icon: faDiagramProject,
  label: "Projects",
  role: ROLE_VALUES.OFFICE,
};

const ADMIN_ACTIVITY: DepartmentMenuItem = {
  to: "../admin/activity",
  icon: faSnowboarding,
  label: "Activities",
  role: ROLE_VALUES.OFFICE,
};

const ADMIN_CATEGORY: DepartmentMenuItem = {
  to: "../admin/category",
  icon: faFolderTree,
  label: "Categories",
  role: ROLE_VALUES.OFFICE,
};

const ADMIN_POSITION: DepartmentMenuItem = {
  to: "../admin/position",
  icon: faLocationDot,
  label: "Positions",
  role: ROLE_VALUES.OFFICE,
};

const ADMIN_FAILURE: DepartmentMenuItem = {
  to: "../admin/failure",
  icon: faTriangleExclamation,
  label: "Failures",
  role: ROLE_VALUES.OFFICE,
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
  ],

  DECK: [
    depmenu__link("deck", DAILY_LOG_MENU_ITEM),
    depmenu__link("deck", CHANGE_LOG_MENU_ITEM),
  ],

  ENG: [
    depmenu__link("eng", DAILY_LOG_MENU_ITEM),
    depmenu__link("eng", CHANGE_LOG_MENU_ITEM),
  ],

  GAL: [
    depmenu__link("gal", DAILY_LOG_MENU_ITEM),
    depmenu__link("gal", CHANGE_LOG_MENU_ITEM),
  ],

  INS: [
    depmenu__link("ins", DAILY_LOG_MENU_ITEM),
    depmenu__link("ins", CHANGE_LOG_MENU_ITEM),
  ],

  MEC: [
    depmenu__link("ins", DAILY_LOG_MENU_ITEM),
    depmenu__link("ins", CHANGE_LOG_MENU_ITEM),
    depmenu__link("ins", DROPTEST_MENU_ITEM),
  ],

  NAV: [
    depmenu__link("nav", DAILY_LOG_MENU_ITEM),
    depmenu__link("nav", CHANGE_LOG_MENU_ITEM),
  ],

  OFF: [
    depmenu__link("off", DAILY_LOG_MENU_ITEM),
    depmenu__link("off", CHANGE_LOG_MENU_ITEM),
    depmenu__link("sdl", ADMIN_DEPARTMENT),
    depmenu__link("sdl", ADMIN_USER),
    depmenu__link("sdl", ADMIN_PROJECT),
    depmenu__link("sdl", ADMIN_ACTIVITY),
    depmenu__link("sdl", ADMIN_CATEGORY),
    depmenu__link("sdl", ADMIN_POSITION),
    depmenu__link("sdl", ADMIN_FAILURE),
  ],

  PM: [
    depmenu__link("pm", DAILY_LOG_MENU_ITEM),
    depmenu__link("pm", CHANGE_LOG_MENU_ITEM),
  ],

  PROC: [
    depmenu__link("proc", DAILY_LOG_MENU_ITEM),
    depmenu__link("proc", CHANGE_LOG_MENU_ITEM),
  ],

  QHSE: [
    depmenu__link("qhse", DAILY_LOG_MENU_ITEM),
    depmenu__link("qhse", CHANGE_LOG_MENU_ITEM),
  ],

  SDL: [
    depmenu__link("sdl", ADMIN_CUSTOMER),
    depmenu__link("sdl", ADMIN_VESSEL),
    depmenu__link("sdl", ADMIN_DEPARTMENT),
    depmenu__link("sdl", ADMIN_USER),
    depmenu__link("sdl", ADMIN_PROJECT),
    depmenu__link("sdl", ADMIN_ACTIVITY),
    depmenu__link("sdl", ADMIN_CATEGORY),
    depmenu__link("sdl", ADMIN_POSITION),
    depmenu__link("sdl", ADMIN_FAILURE),
  ],

  WB: [
    depmenu__link("wb", DAILY_LOG_MENU_ITEM),
    depmenu__link("wb", CHANGE_LOG_MENU_ITEM),
  ],
};

export default DEP_MENUS;
