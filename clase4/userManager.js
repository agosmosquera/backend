const fs = require("fs");
const crypto = require("crypto");

let secret = "coderhouse, secret";

class UserManager {
  constructor() {
    this.users = [];
  }

  async createUser(name, lastName, username, password) {
    const user = {
      id: this.users.length + 1,
      name,
      lastName,
      username,
      password: crypto
        .createHmac("sha256", secret)
        .update(password)
        .digest("hex"),
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
    }

    this.users.push(user);
    await this.saveUsersToFile();
  }

  async getUsers() {
    await this.loadUsersFromFile();
    return this.users;
  }

  async validateUser(username, password) {
    await this.loadUsersFromFile();
    let myPassword = crypto
      .createHmac("sha256", secret)
      .update(password)
      .digest("hex");
    let isUserInDatabase = this.users.findIndex(
      (dato) => dato.username === username
    );

    if (isUserInDatabase === -1) {
      console.log("Por favor verifique, algo ha pasado!!");
    } else {
      let user = this.users[isUserInDatabase];
      if (user.password === myPassword) {
        console.log("Bienvenido " + user.name + " " + user.lastName);
      } else {
        console.log("La contraseña es incorrecta");
      }
    }
  }

  async saveUsersToFile() {
    try {
      await fs.promises.writeFile("users.json", JSON.stringify(this.users));
      console.log("Usuarios guardados en el archivo.");
    } catch (error) {
      console.error("Error al guardar los usuarios en el archivo:", error);
    }
  }

  async loadUsersFromFile() {
    try {
      const data = await fs.promises.readFile("users.json");
      this.users = JSON.parse(data.toString());
    } catch (error) {
      console.error("Error al cargar los usuarios desde el archivo:", error);
    }
  }
}

let coderhouseUsers = new UserManager();

(async () => {
  await coderhouseUsers.createUser("luis", "menendez", "lmenendez", "123456");
  await coderhouseUsers.createUser("bruno", "lezcano", "blezcnao", "12345777");

  //console.log(await coderhouseUsers.getUsers());
  await coderhouseUsers.validateUser("lmenendez", "123456");
})();

//   async getUserById(id) {
//     let myID = parseInt(id);
//     let myUser = null;
//     this.users.forEach((user) => {
//       if (user.id === myID) {
//         myUser = user;
//       }
//     });
//     if (myUser === null) {
//       return console.log("No existe el usuario");
//     } else {
//       return myUser;
//     }
//   }

//   async getUserByUsername(username) {
//     let myUsername = username;
//     let myUser = null;
//     this.users.forEach((user) => {
//       if (user.username === myUsername) {
//         myUser = user;
//       }
//     });
//     if (myUser === null) {
//       return console.log("No existe el usuario");
//     } else {
//       return myUser;
//     }
//   }

//   async deleteUser(username, password) {
//     let myUsername = username;
//     let myPassword = crypto.createHash("sha256").update(password).digest("hex");
//     let myUser = null;
//     this.users.forEach((user) => {
//       if (user.username === myUsername && user.password === myPassword) {
//         myUser = user;
//         console.log("El usuario se encontró, se eliminará");
//       }
//     });
//     if (myUser === null) {
//       return console.log("No existe el usuario");
//     } else {
//       let index = this.users.indexOf(myUser);
//       this.users.splice(index, 1);
//     }
//   }

//   async updateUser(
//     username,
//     password,
//     newName,
//     newLastName,
//     newUsername,
//     newPassword
//   ) {
//     let myUsername = username;
//     let myPassword = crypto.createHash("sha256").update(password).digest("hex");
//     let myUser = null;
//     this.users.forEach((user) => {
//       if (user.username === myUsername && user.password === myPassword) {
//         myUser = user;
//       }
//     });
//     if (myUser === null) {
//       return console.log("No existe el usuario");
//     } else {
//       myUser.name = newName;
//       myUser.lastName = newLastName;
//       myUser.username = newUsername;
//       myUser.password = crypto
//         .createHash("sha256")
//         .update(newPassword)
//         .digest("hex");
//     }
//   }

//   async saveUsers() {
//     try {
//       await fs.writeFile("users.json", JSON.stringify(this.users));
//     } catch (err) {
//       console.log("Error al guardar el archivo");
//     }
//   }

//   async loadUsers() {
//     try {
//       const data = await fs.readFile("users.json");
//       this.users = JSON.parse(data);
//     } catch (err) {
//       console.log("Error al leer el archivo");
//     }
//   }
// }

// module.exports = UserManager;