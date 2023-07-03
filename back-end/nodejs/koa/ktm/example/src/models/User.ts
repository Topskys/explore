import { sequelize } from '../db/index';
import { createHash } from "crypto";
import { decorate, injectable } from "inversify";
import { provide } from "inversify-binding-decorators";
import { ModelAttributes, InitOptions, Sequelize, DataTypes } from "sequelize";
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, BeforeCreate, ModelStatic } from 'sequelize-typescript';


@Table({ tableName: "user" })
export default class User extends Model {
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
        type: DataType.STRING,
        comment: "用户名称"
    })
    name: string | undefined;
}
