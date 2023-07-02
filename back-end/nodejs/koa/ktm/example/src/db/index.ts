import path from "path";
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { config } from '../config';
import logger from "../middleware/loggerMiddleware";
import { Dialect } from "sequelize";


const options: SequelizeOptions | undefined = {
    host: config.db.db_host,
    port: config.db.db_port as unknown as number,
    dialect:'mysql',
    // dialect: config.db.db_dialect //as Dialect,
    models: [ // 绑定数据库模型
        // path.join(__dirname, "..", "models/**/*.ts"),
        // path.join(__dirname, "..", "models/**/*.js"),
        path.join(__dirname, "..", "/models/*.ts"),
        path.join(__dirname, "..", "/models/*.js")
    ],
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: msg => logger("db").info('info', msg),
    dialectOptions: {
        charset: 'utf8mb4', // 字符集
    },
    define: {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    }
}

export const sequelize = new Sequelize(
    config.db.db_name as string,
    config.db.db_user as string,
    config.db.db_password as string,
    options
);

/**
 * 建立连接mysql
 */
const db = async () => {
    try {
        await sequelize.authenticate();
        if (config.server.env === 'dev') {
            await sequelize.sync({ alter: true })// 根据模型同步创建表,生成环境需要关闭
            console.log('table sync done')
        }
        logger().info('MySQL connection has been established successfully.')
        console.log('MySQL connection has been established successfully.');
    } catch (err) {
        logger().error(`Unable to connect to the database:${err}`);
        console.error('Unable to connect to the database:', err);
    }
}

export default db
