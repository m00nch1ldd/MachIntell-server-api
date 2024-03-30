const con = require('../db');
const updateproductSpecsModel = (product_specs, product_unit, product_value, id) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE product_specifications SET product_specs = ?, product_unit = ?, product_value = ? WHERE product_specs_id = ?', [product_specs, product_unit, product_value, id],
            (error, result) => 
            {
                if(error)
                {
                    console.log(error);
                    reject(error);
                }
                else
                {
                    console.log(result);
                    resolve(result);
                }
            }
            );
        })
}

module.exports = updateproductSpecsModel;