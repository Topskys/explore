import { Model, Table, Column } from "sequelize-typescript";

@Table
class Admin extends Model {
    @Column
    name!: string
    @Column
    username!: string
    @Column
    password!: string
    @Column
    email!: string
    @Column
    mobile!: string
}

export default Admin;