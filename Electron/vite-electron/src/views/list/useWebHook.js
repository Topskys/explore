/*
 * @Author: Topskys
 * @Date: 2022-12-03 10:21:42
 * @LastEditTime: 2022-12-03 10:58:06
 */
import { onMounted, inject, toRef } from 'vue';
import useWebStore from '@/store/webStore.js';

const useWebHook = () => {

    const webStore = useWebStore();
    const { keywords } = inject('searchBar-keywords');
    
    onMounted(() => {
        webStore.init();
    });

    

    return {
        webStore,
        keywords,
    }
}

export default useWebHook