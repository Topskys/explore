addCart(){
        // 把商品加入购物车，购物车数据是一个数组，需要存入用户信息的shoppingcart
        // 1. 读取用户的购物车数据
        let { shoppingcart } = this.getProfile;
        // 2. 如果用户该字段有值，则需要转为js对象
        if(shoppingcart){
          shoppingcart = JSON.parse(shoppingcart);
        } else {
          shoppingcart = [];
        }
        // 3. 商品id,颜色，尺寸相同的则为同一商品，不能直接追加到购物，只是让其num递增1.
        let inCart = false; // 商品是否已经加入购物车
        for(let i=0;i<shoppingcart.length;i++){
          let o = shoppingcart[i];
          if(o.id===this.data.id&&o.color===this.selectColor&&o.size===this.selectSize){
            shoppingcart[i].num++;
            inCart = true;
            break;
          }
        }
        // 4. 像购物车字段添加商品数据
        if(!inCart){
          shoppingcart.push({
            id: this.data.id,
            title: this.data.title,
            img: this.images[0],
            price: (this.data.price*this.data.discount/10).toFixed(2),
            num: 1,
            color: this.selectColor,
            size: this.selectSize,
            createTime: new Date().getTime()
          })
        }
        //5. 把购物车数据更新到后端全局状态也要更新
        updateProfile({
          filedname: "shoppingcart",
          filedvalue: JSON.stringify(shoppingcart)
        }, ()=>{
          Notify({type:"success",message: "添加成功!"})
          this.setProfileAction({
            data: {...this.getProfile,shoppingcart:JSON.stringify(shoppingcart)}
          })
        })
      }