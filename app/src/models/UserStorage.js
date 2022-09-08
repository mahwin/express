"use strict";

class UserStorage {
  //# 붙이면 외부에서 불러올 수 없음.
  static #users = {
    id: ["user", "admin", "user1"],
    password: ["user", "admin", "user1"],
    name: ["가", "나", "다"],
  };
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
        return newUsers;
      }
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
  static save(userInfo) {
    userInfo.id.push(userInfo.id);
    userInfo.name.push(userInfo.name);
  }
}

module.exports = UserStorage;
