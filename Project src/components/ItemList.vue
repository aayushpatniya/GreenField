<template>
    <div id="item-list">
        <!-- <ul>
            <li >{{ item.itemName }}</li>
        </ul> -->
        <Card v-for="(item,index) in items" :key=index :item="item"></Card>

        <div class="flexslider" v-if="selectedCatagory == ''">
            <img :src="require(`@/Assets/slider-img1.jpg`)" alt="Pizza Image 1">
            <div class="flex-caption">
            <h2 class="slider-title">We make Meals</h2>
            <h3 class="slider-subtitle">Fresh, clean, and delicious.</h3>
            <p class="slider-description">Praesent tincidunt neque semper elementum gravida. Donec id euismod magna. Ut erat ligula, malesuada eu quam a, fringilla auctor augue.</p>
            </div>
        </div>
    </div>
</template>

<script>
import Card from './Card'
export default {
    name: 'ItemList',
    components:{
        Card
    },
    computed:{
        items(){
            return this.$store.state.items;
        },
        selectedCatagory(){
            return this.$store.state.selectedCatagory;
        }
    }
}
</script>

<style scoped>
#item-list{
    width: 80%;
    height: 708px;
    overflow: auto;
    float: left;
}
.flexslider {
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  overflow: hidden;
}
.flex-caption {
  position: absolute;
    top: 39%;
    width: 80%;
    text-align: center;
    z-index: 999;
    color: white;
}
.slider-title {
  font-size: 50px;
}
.slider-subtitle {
  color: #ffffff;
}
.slider-title,
.slider-subtitle {
  text-transform: uppercase;
}
.slider-description {
  font-size: 18px;
  line-height: 28px;
  padding-left: 200px;
  padding-right: 200px;
}
.flexslider img {
    vertical-align: middle;
    width: 100%;
    height: 683px;
}
</style>
