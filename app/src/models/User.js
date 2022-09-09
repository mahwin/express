"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const body = this.body;

    const { id, password } = await UserStorage.getUserInfo(body.id);

    if (id) {
      if (password === body.password) {
        return { success: true };
      }
      return { success: false, message: "비밀번호가 틀렸습니다." };
    }
    return { success: false, message: "아이디가 존재하지 않습니다." };
  }
  register() {
    const body = this.body;
    UserStorage.save(body);
  }
}

module.exports = { User };
