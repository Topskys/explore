/*
 * @Author: Topskys
 * @Date: 2022-12-02 20:12:56
 * @LastEditTime: 2022-12-03 16:41:30
 */
import { defineStore } from 'pinia';
import store2 from 'store2';
import _ from 'lodash';


const useWebStore = defineStore('webStore', {
    state() {
        return {
            websites: [],
        }
    },
    actions: {
        // 新增
        add(item) {
            if (_.find(this.websites, { url: item.url })) {
                myApi.alert("此网站已被添加")
            } else {
                this.websites.unshift(item); // 将添加数据放进数组头部
                store2('websites', this.websites); // 本地存储 
            }
        },
        // 初始化
        init() {
            this.websites = store2.get('websites') || []; // 获取本地数据
        },
        // 删除
        del(url) {
            this.websites = this.websites.filter((v) => v.url !== url);
            store2('websites', this.websites);
        }
    },
    getters: {
        // 计算属性，该方法类似computed
        // 搜索
        //   g ：表示全局（global）模式，即模式将被应用于所有字符串，而非在发现第一个匹配项时立即停止；
        //  i ：表示不区分大小写（case -insensitive）模式，即在确定匹配项时忽略模式与字符串的大小写；
        // m ：表示多行（multiline）模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项。
        find() {
            return (keywords) => {
                if (keywords === '') {
                    return this.websites;
                } else {
                    const res = _.filter(this.websites, (x) => {
                        let reg = new RegExp(keywords, 'i');
                        return reg.test(x.title)
                    });
                    console.log(res)
                    return res;
                }
            }
        }
    }
})


export default useWebStore