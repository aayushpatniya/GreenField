<template>
    <div>
        <h2>Your Cart</h2>
        <ul class="list-group" v-if="items.length">
            <li class="list-group-item" v-for="(item,index) in items" :key=index :item="item">
                <div class="row">
                    <div class="item-name">
                        {{ item.itemName }}
                    </div>
                    <div class="item-price">
                        {{item.quantity}} x {{ item.price }} ₹
                    </div>
                    <div class="btn-group">
                        <button v-on:click="removeItem(item)" type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">-</button>
                        <label>{{item.quantity}}</label>
                        <button v-on:click="addItem(item)" type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">+</button>
                    </div>
                </div>

                <!-- Modal -->
                <div v-if="modalShow" id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">

                    <!-- Modal content-->
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{ modalHeader }}</h4>
                    </div>
                    <div class="modal-body">
                        <p>{{modalBody}}</p>
                    </div>
                    <div class="modal-footer" v-if="modalFor == 'item'">
                        <button type="button" id="yes" class="btn btn-default" data-dismiss="modal" v-on:click="deleteItem(item)">Yes</button>
                        <button type="button" id="no" class="btn btn-default" data-dismiss="modal" v-on:click="reset">No</button>
                    </div>
                    <div class="modal-footer" v-if="modalFor == 'clear cart'">
                        <button type="button" id="clear" class="btn btn-default" data-dismiss="modal" v-on:click="deleteAll">Clear</button>
                        <button type="button" id="cancel" class="btn btn-default" data-dismiss="modal" v-on:click="reset">Cancel</button>
                    </div>
                    </div>
                </div>
                </div>
                <!-- Modal End -->
            </li>
            <li>
                <div class="row">
                    <div class="item-price" style="width:100%">
                        Total Price: {{ totalPrice() }} ₹
                    </div>
                </div>
            </li>
        </ul>
        <div class="btn-div" v-if="items.length">
            <button class="btn btn-warning" data-toggle="modal" data-target="#myModal" v-on:click="clearCart">Clear Cart</button>
            <br>
            <button class="btn btn-success" v-on:click="placeOrder">Place Order</button>
        </div>
        <div v-if="!items.length" id="empty-message">
            <p>Your Cart is empty. <br>Please go to Orders to add items to the cart.</p><br>
            <button class="btn btn-primary" v-on:click="goToOrders">Go to Orders</button>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Cart',
    data() {
        return {
            modalShow : 0,
            modalHeader : '',
            modalBody : '',
            modalFor : '',
            temp:0,
            itemToDelete:''
        }
    },
    computed:{
        items(){
            return this.$store.state.placedItems;
        },
    },
    methods: {
        totalPrice(){
            this.temp = 0;
            this.$store.state.placedItems.forEach(element => {
                this.temp = this.temp + element.price*element.quantity;
            });
            console.log('total: ',this.temp)
            return this.temp;
        },
        removeItem:function(item){
            if(item.quantity > 1)
            {
                this.$store.state.placedItems.forEach(element => {
                    if(element.itemName == item.itemName){
                        element.quantity -= 1;
                    }
                });/* 
                this.$store.state.Items.forEach(element => {
                    if(element.itemName == item.itemName){
                        element.quantity -= 1;
                    }
                }); */
            } 
            else{
                this.itemToDelete = item.itemName;
                this.modalShow = 1;
                this.modalHeader = 'Delete Item'
                this.modalBody = 'Do you want to delete this item from the list?'
                this.modalFor = 'item'
            }
            //console.log(this.$store.state.placedItems);
        },
        addItem:function(item){
            this.$store.state.placedItems.forEach(element => {
                    if(element.itemName == item.itemName){
                        element.quantity += 1;
                    }
            });/* 
            this.$store.state.Items.forEach(element => {
                    if(element.itemName == item.itemName){
                        element.quantity += 1;
                    }
            }); */
            //console.log(this.$store.state.placedItems);
        },
        deleteItem:function(item){
            let index = -1
            console.log(this.itemToDelete)
            this.$store.state.placedItems.forEach(element => {
                    index++;
                    if(element.itemName == this.itemToDelete){
                        this.$store.state.placedItems.splice(index,1);
                        console.log(element.itemName, item.itemName,index);
                    }
            });
            this.$store.state.items.forEach(element => {
                    if(element.itemName == this.itemToDelete){
                        element.quantity = 0;
                        console.log(this.$store.state.Items);
                    }
            });
            this.itemToDelete=''
            this.modalShow = 0;
            this.modalHeader = ''
            this.modalBody = ''
            this.modalFor = ''
            //console.log(this.$store.state.placedItems);
        },
        reset(){
            this.itemToDelete=''
            this.modalShow = 0;
            this.modalHeader = ''
            this.modalBody = ''
            this.modalFor = ''
        },
        deleteAll(){
            this.$store.state.placedItems=[];
            //console.log(this.$store.state.placedItems);
            this.modalShow = 0;
            this.modalHeader = ''
            this.modalBody = ''
            this.modalFor = ''
            this.$store.state.items.forEach(element => {
                element.quantity = 0;
            });
        },
        clearCart(){
            this.modalShow = 1;
            this.modalHeader = 'Clear Cart'
            this.modalBody = 'Do you want to clear the cart?'
            this.modalFor = 'clear cart'
        },
        goToOrders(){
            this.$router.push({path: 'Order'})
        },
        placeOrder(){
            this.$router.push({path: 'orderPlaced'})
        }
    }
}
</script>

<style scoped>
h2{
    text-align: center;
}
.btn-div{
    width: 35%;
    margin: auto;
}
.btn-div .btn{
    margin-top: 10px;
}
.btn-div .btn-success{
    width: 100%;
}
.list-group {
    /* padding-left: 0; */
    width: 35%;
    margin: 150px auto 0 auto;
    /* margin-bottom: 20px; */
}
.list-group-item {
    padding: 2px 15px;
}
.btn-group button{
    font-size: 18px;
    margin: 4px;
    padding: 0px 7px;
    line-height: 26px;
    border-radius: 0px;
}
.btn-group label {
    padding: 5px 10px;
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 500;
    float: left;
    font-size: 17px;
}
.row{
    width: 100%;
    padding: 5px;
    margin: 0;
}
.item-name{
    width: 45%;
    float: left;
    line-height: 37px;
    font-size: 16px;
}
.btn-group{
    width: 35%;
    float: left;
}
.btn-group::after{
    clear: both;
}
#empty-message{
    text-align: center;
    font-size: 18px;
    color: grey;
}
.item-price{
    width: 20%;
    line-height: 38px;
    float: left;
    font-size: 17px;
}
ul{
    list-style-type: none;
}
</style>