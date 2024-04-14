import { userState } from "../atom/user";
import { selector } from "recoil";
export const userEmailState = selector({
  key: "userEmailState",

  get: ({ get }) => {
    const state = get(userState);
    return state.userMail;
  },
});
