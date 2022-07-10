class User {
  find() {
    return "SELECT * From Users";
  }
  findById(id: number) {
    return `SELECT * FROM Users where id = ${id}`;
  }
}

export default User;
