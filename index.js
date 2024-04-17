import _ from 'lodash';

class ProfileManager {
  constructor() {
    this.users = [];
  }

  addUser(userInfo) {
    this.users.push(userInfo);
  }

  removeUser(userId) {
    const userWeNeed = this.users[userId];
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
}

export default ProfileManager;
