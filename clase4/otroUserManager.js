const fs = require("fs").promises;
const crypto = require("crypto");

class UserManager {
  constructor() {
    this.users = [];
  }

  createUser(name, lastName, username, password) {
    const user = {
      id: this.users.length + 1,
      name,
      lastName,
      username,
      password: crypto.createHash("sha256").update(password).digest("hex"),
    };

    if (
      name === undefined ||
      lastName === undefined ||
      username === undefined ||
      password === undefined
    ) {
      return console.log("Todos los campos son obligatorios");
    }

    let condition = this.users.find((user) => user.username === username);
    if (condition) {
      return console.log("El usuario ya existe");
    } else {
      this.users.push(user);
    }
  }

  getUsers() {
    return this.users;
  }

  async getUserById(id) {
    let myID = parseInt(id);
    let myUser = null;
    this.users.forEach((user) => {
      if (user.id === myID) {
        myUser = user;
      }
    });
    if (myUser === null) {
      return console.log("No existe el usuario");
    } else {
      return myUser;
    }
  }

  async getUserByUsername(username) {
    let myUsername = username;
    let myUser = null;
    this.users.forEach((user) => {
      if (user.username === myUsername) {
        myUser = user;
      }
    });
    if (myUser === null) {
      return console.log("No existe el usuario");
    } else {
      return myUser;
    }
  }

  async deleteUser(username, password) {
    let myUsername = username;
    let myPassword = crypto.createHash("sha256").update(password).digest("hex");
    let myUser = null;
    this.users.forEach((user) => {
      if (user.username === myUsername && user.password === myPassword) {
        myUser = user;
        console.log("El usuario se encontró, se eliminará");
      }
    });
    if (myUser === null) {
      return console.log("No existe el usuario");
    } else {
      let index = this.users.indexOf(myUser);
      this.users.splice(index, 1);
    }
  }

  async updateUser(
    username,
    password,
    newName,
    newLastName,
    newUsername,
    newPassword
  ) {
    let myUsername = username;
    let myPassword = crypto.createHash("sha256").update(password).digest("hex");
    let myUser = null;
    this.users.forEach((user) => {
      if (user.username === myUsername && user.password === myPassword) {
        myUser = user;
      }
    });
    if (myUser === null) {
      return console.log("No existe el usuario");
    } else {
      myUser.name = newName;
      myUser.lastName = newLastName;
      myUser.username = newUsername;
      myUser.password = crypto
        .createHash("sha256")
        .update(newPassword)
        .digest("hex");
    }
  }

  async saveUsers() {
    try {
      await fs.writeFile("users.json", JSON.stringify(this.users));
    } catch (err) {
      console.log("Error al guardar el archivo");
    }
  }

  async loadUsers() {
    try {
      const data = await fs.readFile("users.json");
      this.users = JSON.parse(data);
    } catch (err) {
      console.log("Error al leer el archivo");
    }
  }
}

module.exports = UserManager;