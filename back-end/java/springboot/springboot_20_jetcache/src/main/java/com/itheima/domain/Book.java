package com.itheima.domain;

//Lombok，一个Java类库，提供给一组注解，简化POJO实体类开发。like：代替数据的get和set方法
import lombok.Data;

import java.io.Serializable;

@Data // 代替 @Getter 和 @Setter，但没有提供构造方法@Controller
public class Book implements Serializable { // jetCache方法缓存的对象序列化，否则报错

    private Integer id;
    private String type;
    private String name;
    private String description;
}
