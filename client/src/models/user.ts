export interface UserModel {
  name: string;
  userType: string;
  instruments: string[];
  email: string;
  admin: Boolean;
  address?: string;
  phone?: string;
  authenticated?: Boolean;
  photo?: string;
  passwordHash: string;
  comments?: string[];
  posts?: string[];
  feed?: string[];
  followers?: string[];
  following?: string[];
  _id: string;
  __v: number;
}
