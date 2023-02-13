/*
 * @Author: Topskys
 * @Date: 2022-10-31 20:16:13
 * @LastEditTime: 2022-10-31 20:18:33
 */

/**
 * window.onresize=function(){flexible()}
 */
export function flexible() {
    let doc = document.documentElement;
    let w = document.clientWidth / 10;
    doc.style.fontSize = w + 'px';
}