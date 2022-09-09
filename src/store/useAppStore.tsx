import { Client, Product } from '@api-types';
import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { CognitoUser } from 'amazon-cognito-identity-js';

interface AppState {
  menuProducts: Product[];
  cognitoUser: CognitoUser | undefined;
  userHasProfile: boolean;
  userProfile?: Client;
  isAdmin: boolean;
  isLogged: boolean;
  toogleState: boolean;
  setCognitoUser: (user?: CognitoUser) => void;
  setHasProfile: (hasProfile: boolean) => void;
  setUserProfile: (client?: Client) => void;
  setIsAdmin: (role?: boolean) => void;
  setIsLogged: (role?: boolean) => void;
  setProducts: (products: Product[]) => void;
  setToogleState: () => void;
  resetUserSession: () => void;
}

const useAppStore = create<AppState>()(
  devtools((set) => ({
    toogleState: false,
    isAdmin: false,
    isLogged: false,
    userHasProfile: false,
    menuProducts: [],
    cognitoUser: undefined,
    setCognitoUser: (user) => {
      set((state) => ({ ...state, cognitoUser: user }));
    },
    setHasProfile: (hasProfile) =>
      set((state) => ({ ...state, userHasProfile: hasProfile })),
    setUserProfile: (client) =>
      set((state) => ({ ...state, userProfile: client })),
    setIsAdmin: (role) => set((state) => ({ ...state, isAdmin: role })),
    setIsLogged: (isLogged) => set((state) => ({ ...state, isLogged })),
    setProducts: (product) =>
      set((state) => ({ ...state, menuProducts: product })),
    setToogleState: () =>
      set((state) => ({ ...state, toogleState: !state.toogleState })),
    resetUserSession: () =>
      set((state) => ({
        ...state,
        isAdmin: false,
        isLogged: false,
        userHasProfile: false,
        cognitoUser: undefined,
        userProfile: undefined,
      })),
  }))
);

export default useAppStore;
