export type SubjectType = { name: string };

export type ClassType = {
  name: string;
  subjects: Record<string, SubjectType>;
  subclasses: Record<string, { subjects: Record<string, SubjectType> }>;
};

export type GridType = {
  classes: Record<string, ClassType>;
  subjects: Record<string, SubjectType>;
};

export type OrganizationType = {
  ownerUid: string;
  grid: GridType;
};
