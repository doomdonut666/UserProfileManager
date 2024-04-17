import _ from 'lodash';

class UserProfileManager {
  constructor() {
    this.users = [];
  }

  addUser(userInfo) {
    this.users.push(userInfo);
    const index = this.users.indexOf(userInfo);
    this.users[index].id = index + 1;
  }

  removeUser(id) {
    const userWeNeed = this.users.find((user) => user.id === id);
    this.users = _.without(this.users, userWeNeed);
  }

  getAllUsers() {
    return this.users;
  }

  findUserByName(name) {
    const filterByName = this.users.filter((user) => {
      const userName = user.name;
      if (userName.includes(name)) {
        return true;
      }

      return false;
    });

    return filterByName[0];
  }

  updateUser(id, infoToUpdate) {
    const userWeNeed = this.users.find((user) => user.id === id);
    const infoToUpdateEntries = Object.entries(infoToUpdate);
    infoToUpdateEntries.map((user) => {
      const key = user[0];
      const value = user[1];
      userWeNeed[key] = value;
      const index = this.users.indexOf(userWeNeed);
      this.users[index] = userWeNeed;
      return 0;
    });
  }
}

export default UserProfileManager;
