// import { Client } from "pg";

// const client = new Client({
//     connectionString: "postgresql://postgres:mypassword@localhost/postgres"
// });

// async function createUsersTable() {
//     try {
//         await client.connect();
        
//         const result = await client.query(`
//             CREATE TABLE IF NOT EXISTS users (
//                 id SERIAL PRIMARY KEY,
//                 username VARCHAR(50) UNIQUE NOT NULL,
//                 email VARCHAR(255) UNIQUE NOT NULL,
//                 password VARCHAR(255) NOT NULL,
//                 created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//             );
//         `);

//         console.log('Table created successfully:', result);
//     } catch (error) {
//         console.error('Error creating table:', error);
//     } finally {
//         await client.end(); // Always close the connection
//     }
// }

// createUsersTable();
import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://postgres:mypassword@localhost/postgres"
});

async function createUsersTable() {
    try {
        await client.connect();
        
        const result = await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);

        console.log('Table created successfully:', result);
    } catch (error) {
        console.error('Error creating table:', error);
    } finally {
        await client.end(); // Always close the connection
    }
}

createUsersTable();
