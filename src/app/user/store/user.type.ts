export type UserType = {
  id: string,
  name: string,
  username: string,
  email: string,
  address: string,
  phone: string,
  website: string,
  company: string
};

export type address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lgn: string,
    }
};

export type geo = {
  lat: string,
  lgn: string,
};

export type company = {
  name: string,
  catchPhrase: string,
  bs: string,
};
