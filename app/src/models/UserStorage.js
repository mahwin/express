"use strict";
const fs = require("fs").promises;

class UserStorage {
  static #getUserInfo() {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
  //# 붙이면 외부에서 불러올 수 없음.
  static getUsers(...fields) {
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
        return newUsers;
      }
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }

  static save(userInfo) {
    userInfo.id.push(userInfo.id);
    userInfo.name.push(userInfo.name);
  }
}

module.exports = UserStorage;
