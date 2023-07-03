import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, BeforeCreate, ModelStatic } from 'sequelize-typescript';


@Table({ tableName: "product" })
export default class Product extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        comment: "产品名称"
    })
    name: string | undefined;

    @Column({
        type: DataType.STRING,
        comment: "生产批次"
    })
    batch: string | undefined;

    @Column({
        type: DataType.STRING,
        comment: "产品描述"
    })
    description: string | undefined;

    @Column({
        type: DataType.STRING,
        comment: "生产地址"
    })
    address: string | undefined;
}
