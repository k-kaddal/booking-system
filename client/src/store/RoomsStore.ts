import { makeAutoObservable, toJS } from "mobx";
import { Room } from "./types/types";
import { getRooms } from "../api/api";

export class RoomsStore {
  rooms: Room[] = [];
  isLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchRooms = async (company?: string) => {
    this.rooms = await getRooms(company);
    this.isLoading = false;
  };

  getRoom = (id: String | undefined) => {
    return this.rooms.find((r) => r.id === id);
  };
}
