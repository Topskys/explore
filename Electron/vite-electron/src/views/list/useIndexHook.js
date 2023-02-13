/*
 * @Author: Topskys
 * @Date: 2022-12-03 10:23:57
 * @LastEditTime: 2022-12-10 16:53:53
 */
import { ref } from 'vue';

const useIndexHook = () => {
    const currentIndex = ref(0);

    const handleItemClick = (i, url) => {
        currentIndex.value = i;
        myApi.open(url);// window.open(url, '_blank', 'width=1000,height=800'); // 打开url窗口
    }

    return {
        currentIndex,
        handleItemClick
    };
}

export default useIndexHook