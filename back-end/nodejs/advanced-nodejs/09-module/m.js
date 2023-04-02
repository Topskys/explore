const name = 'Topsky'
const age = 18
const addFn = (x, y) => x + y

module.exports = {
    name: name,
    age: age,
    addFn: addFn,
}

//console.log(module,'\n',exports) // {...}  {}

//exports.phone='12344445555' // { phone: '12344445555' }

// exports={} // x 不能重新赋值

//console.log(require.main==module) // false
