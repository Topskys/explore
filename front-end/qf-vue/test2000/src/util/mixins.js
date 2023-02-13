const obj = {
    created() { //进隐藏
        this.$store.commit('hidden')
    },
    destroyed() { //出去显示
        this.$store.commit('show')
    },
    //methods: {},

}
export default obj