export interface IFields {
  name: string;
  age: number;
}

class User {
  find() {
    return "SELECT * From Users";
  }
  findById(id: number) {
    return `SELECT * FROM Users where id = ${id}`;
  }
  create({ name, age }: IFields) {
    return `INSERT INTO users (name,age) VALUES ('${name}','${age}')`;
  }
}

export default User;
