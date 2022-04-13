const util = require( 'util' );
const mysql = require( 'mysql' );

class DB{
    
    constructor( config ) {
        this.connection = mysql.createConnection( config );
        this.config = config
        this.connection.connect((err) => {
            if (err){
                console.log(err + config.database)
                throw err;
            }else{
                console.log(`${config.database} runnig`)
            }  
        });
    }
    query( sql, args ) {
        return util.promisify( this.connection.query )
        .call( this.connection, sql, args );
    }
    close() {
        console.log(`${this.config.host} close`)
        return util.promisify( this.connection.end ).call( this.connection );
    }


}

module.exports = DB;