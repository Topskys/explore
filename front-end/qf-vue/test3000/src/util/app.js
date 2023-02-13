import { onMounted, creative } from 'vue'
import axios from 'axios'
// 外包函数仓库 hooks
function getData() {
    const obj = reactive({
        list: [],
    })
    onMounted(() => {
        axios.get().then(res => {
            obj.list = res.data.list
        })
    })
    return { obj }
}
export default {
    getData
}