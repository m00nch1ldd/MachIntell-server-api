const con = require('../db');
const addsubassemblyModel = (id, sub_assembly_name, sub_assembly_id, sub_assembly_bought_up, file_location, to_add_assemblies) => {
    return new Promise((resolve, reject)=>
    {
        con.query('INSERT INTO sub_assemblies(product_id, sub_assembly_name, sub_assembly_id, sub_assembly_bought_up, file_location, to_add_assemblies) VALUES(?, ?, ?, ?, ?, ?)', [id, sub_assembly_name, sub_assembly_id, sub_assembly_bought_up, file_location, to_add_assemblies],
        (error, result) => {
            if(error)
            {
                console.log("Problem");
                reject(error);
            }
            else
            {
                console.log(result);
                resolve(result);
            }
        })
    })  
}
module.exports = addsubassemblyModel;