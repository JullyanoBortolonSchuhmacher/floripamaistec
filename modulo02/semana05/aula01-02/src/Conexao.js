const { Pool } = require('pg');

class Conexao {
    constructor() {
        this.pool = new Pool({
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: '6535',
            database: 'livraria'
        });
    }

    async query(text, params) {
        const client = await this.pool.connect();
        try {
            const res = await client.query(text, params);
            return res;
        } finally {
            client.release();
        }
    }
}

module.exports = Conexao;