import { IsNotEmpty, MinLength, MaxLength, IsNumber, Min, Max, IsEmail, IsPhoneNumber, IsDate, IsBoolean } from 'class-validator'


export default class TestDTO {

    @MaxLength(20, { message: "用户名长度不能超过20个字符" })
    @MinLength(5, { message: "用户名长度不能少于5个字符" })
    @IsNotEmpty({ message: "请输用户名" })
    username!: string;

    @MaxLength(20, { message: "密码长度不能超过20个字符" })
    @MinLength(6, { message: "密码长度不能少于6个字符" })
    @IsNotEmpty({ message: "请输用户名" })
    password!: string;

    id: string | undefined;

    // @IsNotEmpty({ message: "姓名不能为空" })
    // @MaxLength(15, { message: "姓名长度不能超过20个字符" })
    // name!: string;

    // @IsEmail({}, { message: "邮箱格式不正确" })
    // email: string | undefined;

    // @IsNotEmpty({ message: "手机号不能为空" })
    // @IsPhoneNumber('CN', { message: "手机号格式不正确" })
    // phone: string | undefined;

    // @IsNotEmpty({ message: "部门不能为空" })
    // @MaxLength(15, { message: "部门长度不能超过20个字符" })
    // department: string | undefined;

    // @IsNotEmpty({ message: "角色不能为空" })
    // role!: string;

    // @IsBoolean({ message: "参数数据类型错误，需要布尔类型" })
    // enable: boolean | undefined;
}