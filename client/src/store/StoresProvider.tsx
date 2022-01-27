import React, { PropsWithChildren } from "react";
import { BookingsStore } from "./BookingsStore";
import { RoomsStore } from "./RoomsStore";
import { UserStore } from "./UserStore";

type StoresContextValue = {
  bookingsStore: BookingsStore;
  roomsStore: RoomsStore;
  userStore: UserStore;
};

const StoresContext = React.createContext<StoresContextValue>(
  {} as StoresContextValue
);

export const StoresProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const bookingsStore = new BookingsStore();
  const roomsStore = new RoomsStore();
  const userStore = new UserStore();

  return (
    <StoresContext.Provider value={{ bookingsStore, roomsStore, userStore }}>
      {children}
    </StoresContext.Provider>
  );
};

export const useStores = () => React.useContext(StoresContext);
