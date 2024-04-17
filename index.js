import _ from 'lodash';

class ProfileManager {
  constructor() {
    this.users = [];
  }

  addUser(userInfo) {
    this.users.push(userInfo);
  }

  removeUser(id) {
    const userWeNeed = this.users[id];
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
    const userWeNeed = this.users[id];
    const infoToUpdateEntries = Object.entries(infoToUpdate);
    infoToUpdateEntries.map((user) => {
      const key = user[0];
      const value = user[1];
      userWeNeed[key] = value;
      this.users[id] = userWeNeed;
      return 0;
    });
  }
}

export default ProfileManager;
