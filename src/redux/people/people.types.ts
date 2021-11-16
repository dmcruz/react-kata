export type PersonData = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

export type IPeopleState = {
  list: PersonData[];
  loading: boolean;
  error: any;
};
