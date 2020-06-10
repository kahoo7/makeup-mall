import { reqFromMysql } from "./reqFromMysql";

export function reqForReg() {
  return reqFromMysql({
    url: "/register"
  });
}
