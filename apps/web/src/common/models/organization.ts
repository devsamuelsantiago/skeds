export type ClassType = {
  name: string;
  subjects: Record<string, string>;
  subclasses: Record<string, { subjects: Record<string, string> }>;
};

export type GridType = {
  classes: Record<string, ClassType>;
  subjects: Record<string, { name: string }>;
};

export type OrganizationType = {
  ownerUid: string;
  grid: GridType;
  // teachers: Record<string, string>;
  // students: Record<string, string>;
};
