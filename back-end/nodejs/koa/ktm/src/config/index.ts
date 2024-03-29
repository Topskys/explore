const config = {
    server: {
        port: process.env.SERVER_PORT || 3000,
        env: process.env.NODE_ENV
    },
    db: {
        db_host: process.env.DB_HOST,
        db_port: process.env.DB_PORT,
        db_name: process.env.DB_NAME,
        db_user: process.env.DB_USER,
        db_password: process.env.DB_PASSWORD,
        //db_dialect:process.env.DB_DIALECT,
    },
    log: {
        appenders: {
            cheese: {
                type: "file",
                filename: "logs/cheese.log",
            },
            access: {
                type: "file",
                filename: "logs/access.log",
            },
            db: {
                type: "file", // 输出类型，console 或 file
                filename: "logs/db.log",
            }
        },
        categories: {
            default: {
                appenders: ["cheese"],
                level: "info" // 记录info以上的级别，info、warn 和 error 级别的日志。
            },
            access: {
                appenders: ["access"],
                level: "info"
            },
            db: {
                appenders: ["db"],
                level: "info"
            }
        }
    },
    jwt: {
        jwt_secret: process.env.JWT_SECRET,
        jwt_expire: process.env.JWT_EXPIRE,
    }
}


export default config;