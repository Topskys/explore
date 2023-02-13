/*
 * @Author: Topskys
 * @Date: 2022-10-05 18:51:49
 * @LastEditTime: 2022-10-31 19:51:08
 */

/**
 * @description: 数组去重；
 * uniqueArr1：ES6，Set()；
 * uniqueArr2: ES6，Set()；
 * uniqueArr3：filter()+indexOf()；
 * uniqueArr4: for()+indexOf()；
 * uniqueArr5: ES6，includes()；
 */
export const uniqueArr1 = arr => [...new Set(arr)];

export const uniqueArr2 = arr => Array.from(new Set(arr))

export const uniqueArr3 = arr => arr.filter((item, index) => arr.indexOf(item) === index);

export const uniqueArr4 = (arr, tmp = []) => {
    for (let i = 0; arr.length; i++) {
        if (tmp.indexOf(arr[i]) === -1) {
            tmp.push(arr[i]);
        }
    }
    return tmp
}

export const uniqueArr5 = (arr, tmp = []) => {
    arr.forEach(item => !tmp.includes(item) && tmp.push(item))
    return tmp
}








