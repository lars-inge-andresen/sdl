/* Created by Lars-Inge Andresen  */

export const Role = {
  GLOBALADMIN: "GLOBALADMIN",
  LOCALADMIN: "LOCALADMIN",
  OFFICE: "OFFICE",
  PM: "PM",
  CHIEF: "CHIEF",
  OPERATOR: "OPERATOR",
  CLIENT: "CLIENT",
  GUEST: "GUEST",
};

export const roleLevels = {
  GUEST: 10,
  CLIENT: 20,
  OPERATOR: 30,
  CHIEF: 40,
  OFFICE: 50,
  LOCALADMIN: 60,
  GLOBALADMIN: 70,
};

export function canAccess(userRole, targetRole) {
  return roleLevels[userRole] >= roleLevels[targetRole];
}
