const mysql_ = require("mysql2/promise");
const config = require("./config");



// get all rows from database
async function getAll() {
    let q = 'SELECT * FROM aldata';
    const connection = await mysql_.createConnection(config.db);
    const [result, ] = await connection.execute(q);
    return result;
}
// add data to table
async function addData(data) {
    let q = `INSERT INTO aldata(name) VALUES('${data}')`;
    const connection = await mysql_.createConnection(config.db);
    const result = await connection.execute(q);
    // console.log(result[0].affectedRows);
    if (result[0].affectedRows) {
        return "1";
    } else {
        return "Error Adding Data";
    }
}
// delete data from table.
async function deleteData(id) {
    let q = `DELETE FROM aldata WHERE id='${id}'`;
    const connection = await mysql_.createConnection(config.db);
    const result = await connection.execute(q);
    // console.log(result);
    if (result[0].affectedRows) {
        return "1";
    } else {
        return "Error Deleting Data";
    }
}
// update data in the table.
async function updateData(id, data) {
    let q = `UPDATE aldata SET name='${data}' WHERE id='${id}'`;
    const connection = await mysql_.createConnection(config.db);
    const result = await connection.execute(q);
    // console.log(result);
    if (result[0].affectedRows) {
        return "1";
    } else {
        return "Error Updating Data";
    }
}


module.exports = {
    getAll,
    addData,
    deleteData,
    updateData,
}