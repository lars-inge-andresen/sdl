/* Created by Lars-Inge Andresen  */

export const ROLE_VALUES = {
  GLOBALADMIN: "GLOBALADMIN",
  LOCALADMIN: "LOCALADMIN",
  OFFICE: "OFFICE",
  PM: "PM",
  CHIEF: "CHIEF",
  OPERATOR: "OPERATOR",
  CLIENT: "CLIENT",
  GUEST: "GUEST",
} as const;

export const ROLE_LEVELS: Record<Role, number> = {
  GUEST: 10,
  CLIENT: 20,
  OPERATOR: 30,
  CHIEF: 40,
  PM: 40,
  OFFICE: 50,
  LOCALADMIN: 60,
  GLOBALADMIN: 70,
};

export type Role = keyof typeof ROLE_VALUES;

export function canAccess(userRole: Role, targetRole: Role) {
  return ROLE_LEVELS[userRole] >= ROLE_LEVELS[targetRole];
}
