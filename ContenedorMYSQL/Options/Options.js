import {config} from "dotenv"; 
config()



export const Options = {
      client: "mysql",
      connection: {
        host: "127.0.0.1",
        port: 3307,
        user: process.env.MYSQL_DATABASE_USER,
        password: process.env.MYSQL_DATABSE_PASSWORD ,
        database: process.env.MYSQL_DATABASE_NAME,
      },
    };
  
