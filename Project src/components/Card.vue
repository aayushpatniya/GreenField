<template>
<div>
    <div class="card" v-if="selectedCatagory == item.catagory">
        <img :src="require('@/Assets/'+imgPath+'.jpg')">
        <h3>{{ item.itemName }}</h3>
        <h4>{{ item.price }} ₹</h4>
        <div class="btn-group">
            <button type="button" class="btn btn-default" v-on:click="removeItem(item)">-</button>
            <label>{{item.quantity}}</label>
            <button type="button" class="btn btn-default" v-on:click="addItem(item)">+</button>
        </div>
        <br>
        <button class="btn btn-default btn-cart" v-on:click="addToCart(item)">Add to Cart</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'Card',
    computed:{
        imgPath(){
            //console.log(this.item.itemName.replace(/\s/g,''));
            return this.item.itemName.replace(/\s/g,'');
            //'@/Assets/'+this.item.itemName.replace(/\s/g,'')+'.jpg';
        },
        selectedCatagory(){
            return this.$store.state.selectedCatagory;
        }
    },
    methods: {
        removeItem:function(item){
            if(item.quantity > 0)
            {
                item.quantity -=1
            } 
            //console.log(item);
        },
        addItem:function(item){
            item.quantity +=1
            //console.log(item);
        },
        addToCart:function(item){
            if(item.quantity > 0)
            {
                this.$store.commit('addItemToPlacedItems', item);
            } 
            //console.log(item);
        }
    },
    props:{
        item : Object
    }
}
</script>

<style scoped>
.card{
    width: 245px;
    height: 390px;
    border: 1px solid #d6d6d6;
    margin: 15px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    float: left;
}
img{
    width: 100%;
    height: 50%;
    border-radius: 5px;
}
.btn-group button{
    margin: 4px;
}
.btn-group label {
    padding: 5px 10px;
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 100;
    float: left;
    font-size: 21px;
}
.btn-cart {
    margin-top: 12px;
    width: 80%;
}
</style>