export interface ISignIn {
  email: string;
  password: string;
  device?: string;
}

export interface ISignUp extends ISignIn {
  name: string;
  gender: 'F' | 'M' | 'O';
}
