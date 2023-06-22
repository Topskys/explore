/**
 * 1. 变量的概念
 * 内存中的一个存储区域，该区域的数据可以在同一类型范围内不断变化
 * <p>
 * 2. 变量的基本使用
 * 格式：数据类型 变量名 = 变量值
 * <p>
 * 3. Java的变量数据类型
 * 基本数据类型（8种）：
 * 整型：byte、short、int、long
 * 浮点型：float、double
 * 布尔类型：boolean
 * 引用数据类型：
 * 类（class）
 * 数组（array）
 * 接口（interface）
 * 枚举（enum）
 * 注解（annotation）
 * 记录（record）
 * <p>
 * 4. 整型存储
 * 类型     占用存储空间       表示范围
 * byte     1字节=8bit位      -128 ~ 127
 * short    2字节             -2^15 ~ 2^15 - 1
 * int      4字节             -2^31 ~ 2^31 - 1 （~21亿）
 * long     8字节             -2^63 ~ 2^63 - 1
 * <p>
 * 8bit=1Byte
 * 1024Byte=1KB
 * 1024KB=1MB
 * 1024MB=1GB
 * 1024GB=1TB
 * <p>
 * 5. 浮点储存
 * float    4字节             -3.403E38 ~ 3.403E38
 * double   8字节             -1.798E308 ~ 1.798E308
 * <p>
 * 6. 注意
 * 浮点型变量的精度不高，如需要极高的精度，可使用BigDecimal类替换浮点数据类型
 *
 * 7. 变量间的运算规则
 * 基本数据类型有7中可以做运算，不包含Boolean类型
 * 运算规则：
 * ① 自动类型提升
 * ② 强制类型转换
 * 自动类型提升
 * 当容量最小的变量与容量最大的变量做运算时，结果自动转换为容量最大的数据类型。
 * 所述容量最小或大，非占用内存空间的大小，是指数据类型的范围大小。
 * byte、short、char ---> int ---> long ---> float ---> double
 * 特殊：
 * byte、short、char之间运算的数据类型为int，byte与byte不可运算。
 * 强制转换
 * 大转小：类型 变量名=(类型)转换变量名
 * 类型转换过程中，精度可能会损失。
 */
class Variable {

    public static void main(String[] args) {

        char name; // 声明变量 char(2字节)，使用一对''表示，内部有且仅有一个字符
        name = 'T'; // 变量的复制
        char c1='6'; // 表示1
        char c2='\u0036'; // 表示2，直接使用Unicode值来表示字符型常量
        char c3='\n'; // 表示3，转义字符
        char c4=97; // a 表示4，ASCII码表示

        int age = 18;  // 声明并初始化变量

        byte b1 = 2;

        // 编译不通过，赋值的128超出了byte的存储范围
        //byte b2=128;

        // 声明long类型变量时，需要提供后缀（'l'或'L'）
        long l1 = 123123123L;

        // 声明float类型变量时，需要提供后缀（'f' or 'F'）
        float f1 = 1.0f;

        double hua = 80.0;
        double she = (hua - 32) / 1.8; // ℃=(F-32) /1.

        // 变量运算规则
        char c5='4';
        byte b3=3;
        // char c6=c5+b3; // 编译不通过
        int i1=c5+b3;

        // long l2=123123123123123; // 123123123123123理解为int，因超出int范围，故报错
        long l3=123123123123123L; // 123123123123123理解为long

        // float f2=12.3; // 不满足自动类型提升规则（double ---> float）

        byte b4=4;
        // byte b5=b4+1; // 整型常量，规则为int
        int i2=b4+1;

        // 浮点常量，规定为double
        double d1=b4+12.3;


        // 强制类型转换
        double d2=12; // 自动类型提升
        int i3=(int) d2;
        short s1=(short)l3;
        // 精度损失
        int i4=128;
        byte b5=(byte)i4; // -128


        // String
        String s2="Topsky";
        int i5=5;

        System.out.println(s2+i5);
    }
}
