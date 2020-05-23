<template>
    <div id="catagory-list">
        <ul>
            <li v-for="(item, index) in catagory" :key=index v-on:click="catagoryClick($event,index)" :class="{active : selectedIndex == index}">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CatagoryList',
    data(){
        return {
            selectedIndex : -1
        }
    },
    methods : {
        catagoryClick(event,index){
            this.selectedIndex = index;
            this.$store.state.selectedCatagory = event.target.innerText;
        }
    },
    computed: {
        catagory () {
        return this.$store.state.catagory;
        }
    }
}
</script>

<style scoped>
#catagory-list{
    width: 20%;
    float: left;
    padding-right: 10px;
}
ul{
    list-style-type: none;
    padding-left: 15px;
}
li{
    border: 1px solid #9d9d9d;
    border-radius: 75px;
    font-size: 16px;
    text-align: center;
    padding: 10px;
    margin: 5px 0;
    cursor: pointer;
    transition: 200ms;
}
li:hover{
    background-color: black;
    color:white;
}
.active{
    color: #fff;
    background-color: #080808;
}
</style>