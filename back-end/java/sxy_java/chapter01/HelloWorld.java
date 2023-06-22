/**
 * *.java ----> 编译 ----> *(Hello).class（字节码）
 * java文件运行过程，需要使用javac先将*.java编译成*.class，然后使用java *.class执行字节码文件。或者直接java HelloWorld.java运行。
 */


/**
 这是一个文档注释，文档注释内容可以被JDK提供的工具 javadoc所解析，生成一套以网页文件形式体现的该程序的说明文档。
 要使用javadoc命令，要先将Hello类升级为public class HelloWorld，类名要与，然后在终端输入 javadoc -encoding UTF-8 -d folderName -author -version HelloWorld.java 即可生成文档。
 */


/**
 这是我的第一个Java程序。（文档注释）

 @author Topskys
 @version 1.0
 */
public class HelloWorld {
    /**
     这是main()方法。格式是固定的。（文档注释）
     */
    /**
     这是main()方法。格式是固定的。（多行文档注释）
     */
    public static void main(String[] args) {
        // 输出语句
        System.out.println("Hello,world!");
    }
}



