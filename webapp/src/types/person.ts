export type Person = {
  id: number;
  name: string;
  jobTitle: string;
  country: string;
  salary: number;
  currency: string;
  employment: string;
};

export type PersonFilters = {
  name_like: string;
  employment: string[];
};
