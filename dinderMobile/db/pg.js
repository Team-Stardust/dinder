const {Pool} = require("pg");
let url = "postgres://hddufohk:1ur6fgrvf7bVO_oN61Qbd-xr5gBuk_mi@salt.db.elephantsql.com:5432/hddufohk";
const pool = new Pool({
	connectionString: url
});

const pgConnect = {};
const bcrypt = require('bcrypt');
const saltRounds = 10;

pgConnect.verifyUser = (req, res, next) => {
    let arr = [req.body.user];
	let queryforPass = `SELECT "password" FROM "Users" WHERE "user" = $1`;
	pool.query(queryforPass, arr, (err, result) => {
        if (err) {
            res.locals.validated = false;
            return next();
        }
        bcrypt.compare(req.body.password, result.rows[0].password, (err, result)=>{
            if (err){ 
                console.log("no result for user found");
            };
            res.locals.validated = result;
            return next();
        });
    })
};

pgConnect.createUser = (req, res, next) => {
    let arr = [req.body.user];
    if (req.body.user && req.body.password){
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                arr.push(hash);
                let queryForSignUp = `INSERT INTO "Users" ("user","password") VALUES ($1,$2) RETURNING *`;
                pool.query(queryForSignUp, arr, (err, result) => {
                    if (err) {
                        console.log("QUERY NOT FOUND");
                        res.locals.signedup = false;
                        return next();
                    };
                    if (result.rows.length > 0){
                        res.locals.signedup = true;
                        return next();
                    } else {
                        res.locals.signedup = false;
                        return next();
                    }
                    
                });
            });
        });
    }
};

// pgConnect.

module.exports = pgConnect;
