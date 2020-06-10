import { reqFromMysql } from "./reqFromMysql";

export function reqForLogin() {
  return reqFromMysql({
    url: "/login"
  });
}

