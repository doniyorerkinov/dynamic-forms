export interface menu {
  label: string;
  link: string;
  icon?: string;
}

export interface ISelectList {
  orderCode?: string;
  text: string;
  value: number | string;
}

export interface IUser {
  id: number;
  fullName: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  age: number;
  isMarried: boolean;
  companyId: number | null;
  company: string;
  companyLocation: string;
  locationId: number | null;
  location: string;
  salary: number;
  position: string;
  isRemote: boolean;
  isFullTime: boolean;
  hasCar: boolean;
  hasHouse: boolean;
  debt: number;
  credit: number;
  isStudent: boolean;
  isEmployed: boolean;
}

export interface IFormFields {
  name: string;
  value: (string | number) | (string | number)[] | null | boolean;
  type: string;
  label: string;
  id: string;
  inputType?: string;
  options?: ISelectList[];
  placeholder?: string;
  variant?: "primary" | "success" | "warn" | "danger" | "outlined";
  class?: string;
  isCustom?: boolean;
}
