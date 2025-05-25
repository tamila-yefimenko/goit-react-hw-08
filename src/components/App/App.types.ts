import { ReactNode } from 'react';
import { ReactElement } from 'react';

export interface RegisterBody {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export interface refreshResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export interface RootState {
  auth: {
    token: string | null;
  };
}

export interface AuthUser {
  name: string | null;
  email: string | null;
}

export interface AuthState {
  user: AuthUser;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isError: boolean;
  isPending: boolean;
}

export interface Contact {
  id: string;
  name: string;
  number: string;
}

export interface NewContact {
  name: string;
  number: string;
}

export interface UpdateContactData {
  id: string;
  name?: string;
  number?: string;
}

export interface ContactState {
  items: Contact[];
  isLoading: boolean;
  error: string | null;
}

export interface FiltersState {
  filter: string;
}

export interface ContactProps {
  contact: Contact;
}

export interface ContactFormValues {
  name: string;
  number: string;
}

export interface PrivateRouteProps {
  children: ReactNode;
}

export interface RestrictedRouteProps {
  component: ReactElement;
  redirectTo?: string;
}
