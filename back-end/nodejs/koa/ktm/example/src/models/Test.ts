import { sequelize } from './../db/index';
import { createHash } from "crypto";
import { decorate, injectable } from "inversify";
import { provide } from "inversify-binding-decorators";
import { ModelAttributes, InitOptions, Sequelize, DataTypes } from "sequelize";
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, BeforeCreate, ModelStatic } from 'sequelize-typescript';


// decorate(injectable(), Model)
// @provide(Symbol.for("Test"))
@Table({ tableName: "test" })
export default class Test extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column @Column({
        type: DataType.STRING,
        unique: true,
        comment: "账户名"
    })
    username!: string;

    @Column({
        type: DataType.STRING,
        comment: "用户密码"
    })
    password!: string;

    @Column({
        type: DataType.INTEGER,
        comment: "用户id"
    })
    user_id!: number;
}


// export default class Test extends Model {
//     constructor(){
//         super();
//     }
//     private id!: string;
//     public username!: string;
//     public password!: string;

//     public static initialize(sequelize: Sequelize): void {
//         this.init({
//             id: {
//                 type: DataTypes.INTEGER,
//                 autoIncrement: true,
//                 primaryKey: true,
//             },
//             username: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//             password: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             }
//         }, {
//             sequelize,
//             modelName: "user",
//         })
//     }
// }
