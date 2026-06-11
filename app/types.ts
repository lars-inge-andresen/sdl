import type { DepartmentMenuItem } from "./constants/department-menu";

export interface RouteHandle {
  menu__links: (department: string) => DepartmentMenuItem[];
}
