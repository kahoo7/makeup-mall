const sqlMap = {
  user: {
    login: `SELECT password FROM user WHERE uname = ?`,
    addUser: `INSERT IGNORE INTO user(name, password, gender) VALUES (?, ?, ?)`,
    deleteUser: `DELETE * FROM user WHERE userid = ?`,
    changePassword: `UPDATE user SET password = ? WHERE userid = ?`
  },
}

module.exports = sqlMap;