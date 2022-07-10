export interface IFields {
  name: string;
  age: number;
}

const tableName: string = "users";

class User {
  find() {
    return `SELECT * From ${tableName}`;
  }
  // findById(id: number) {
  //   return `SELECT * FROM ${tableName} where id = ${id}`;
  // }
  findById(whereClaus: {}) {
    return `SELECT * FROM ${tableName} where ${Object.keys(whereClaus)[0]} = ${
      Object.values(whereClaus)[0]
    }`;
  }
  create({ name, age }: IFields) {
    return `INSERT INTO ${tableName} (name,age) VALUES ('${name}','${age}')`;
  }
  deleteById(id: number) {
    return `DELETE FROM ${tableName} where id = ${id}`;
  }
  updateByID(id: number, { name, age }: IFields) {
    return `UPDATE ${tableName} SET name ='${name}',age='${age}' WHERE id = ${id}`;
  }
}

export default User;
