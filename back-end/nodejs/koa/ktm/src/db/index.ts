import path from "path"; 
import { Sequelize } from 'sequelize-typescript';
import config from '../config';
import { dbLogger } from "../logger"


const sequelize = new Sequelize(config.db.db_name as string, config.db.db_user as string, config.db.db_password as string, {
    host: config.db.db_host,
    port: config.db.db_port as unknown as number,
    dialect: 'mysql',
    models: [
        path.join(__dirname, "..", "model/**/*.ts"), 
        path.join(__dirname, "..", "model/**/*.js")
    ],
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: msg => dbLogger.info('info', msg),
    dialectOptions: {
        charset: 'utf8mb4', // 字符集
    },
    define: {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    }

});


const db = async () => {
    try {
        await sequelize.authenticate();
        // if (config.server.env === 'dev') {
        //     await sequelize.sync({ alter: true })// 根据模型同步创建表,生成环境需要关闭
        //     console.log('table sync done')
        // }
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}

export default db;
