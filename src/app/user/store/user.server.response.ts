/**
 * Represents the structure of server response. To be restructured to fit UserModel
 */
export type ServerResponse = {
  id: string,
  name: string,
  username: string,
  email: string,
  address: address,
  geo: geo,
  phone: string,
  website: string,
  company: company
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
