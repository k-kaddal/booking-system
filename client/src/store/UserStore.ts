import { makeAutoObservable, toJS } from "mobx";
import { User } from "./types/types";
import { loginUser } from "../api/api";

export class UserStore {
  activeUser: User = {
    _id: "",
    name: "",
    email: "",
    password: "",
    company: "",
  };

  isLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  loginUser = async (user: User) => {
    let validUser = await loginUser(user);

    if (!validUser) return false;
    return (this.activeUser = validUser);
  };

  logoutUser = () => {
    this.activeUser = {
      name: "",
      email: "",
      password: "",
      company: "",
    };
  };
}
