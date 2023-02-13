"use strict";
/*
 * @Author: Topskys
 * @Date: 2022-10-10 10:20:19
 * @LastEditTime: 2022-10-10 10:45:21
 */
(function () {
    // const obj: itf = { name: 'T', age: 10, gender: 'male' };
    /**
     * 实现接口，需满足接口得要求，编译后会只剩该类
     */
    class impItf {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        sayHi() {
            console.log('Hi');
        }
    }
})();
