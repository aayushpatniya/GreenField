import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
      catagory : ['Chinese','South Indian','Snacks','Main Course','Chapati','Sweets'],
      items:[
        {itemName:'Manchurian', price: 140, quantity: 0, catagory: 'Chinese'},
        {itemName:'Noodles', price: 130, quantity: 0, catagory: 'Chinese'},
        {itemName:'Fried Rice', price: 100, quantity: 0, catagory: 'Chinese'},
        {itemName:'Szechwan', price: 140, quantity: 0, catagory: 'Chinese'},
        {itemName:'Manchow Soup', price: 80, quantity: 0, catagory: 'Chinese'},
        
        {itemName:'Dosa', price: 80, quantity: 0, catagory: 'South Indian'},
        {itemName:'Idli Sambhar', price: 80, quantity: 0, catagory: 'South Indian'},
        {itemName:'Vada', price: 50, quantity: 0, catagory: 'South Indian'},
        {itemName:'Uttapam', price: 100, quantity: 0, catagory: 'South Indian'},
        {itemName:'Banana Chips', price: 150, quantity: 0, catagory: 'South Indian'},
        {itemName:'Appam', price: 90, quantity: 0, catagory: 'South Indian'},
        {itemName:'Biryani', price: 170, quantity: 0, catagory: 'South Indian'},

        {itemName:'Poha', price: 15, quantity: 0, catagory: 'Snacks'},
        {itemName:'Samosa', price: 15, quantity: 0, catagory: 'Snacks'},
        {itemName:'Kachori', price: 15, quantity: 0, catagory: 'Snacks'},
        {itemName:'Jalebi', price: 15, quantity: 0, catagory: 'Snacks'},
        {itemName:'Khamand', price: 20, quantity: 0, catagory: 'Snacks'},
        {itemName:'Aloo Bada', price: 15, quantity: 0, catagory: 'Snacks'},
        {itemName:'Dal Pakwan', price: 25, quantity: 0, catagory: 'Snacks'},

        {itemName:'Dal Fry', price: 180, quantity: 0, catagory: 'Main Course'},
        {itemName:'Dal Pulao', price: 220, quantity: 0, catagory: 'Main Course'},
        {itemName:'Masal Bheendi', price: 150, quantity: 0, catagory: 'Main Course'},
        {itemName:'Kaju Curry', price: 200, quantity: 0, catagory: 'Main Course'},
        {itemName:'Mattar Paneer', price: 220, quantity: 0, catagory: 'Main Course'},
        {itemName:'Shaahi Paneer', price: 200, quantity: 0, catagory: 'Main Course'},
        {itemName:'Malai Kofta', price: 220, quantity: 0, catagory: 'Main Course'},
        {itemName:'Palak Paneer', price: 180, quantity: 0, catagory: 'Main Course'},
        {itemName:'Sev Tamatar', price: 140, quantity: 0, catagory: 'Main Course'},
        {itemName:'Dam Aloo', price: 120, quantity: 0, catagory: 'Main Course'},

        {itemName:'Tawa Roti', price: 10, quantity: 0, catagory: 'Chapati'},
        {itemName:'Tandoori Roti', price: 15, quantity: 0, catagory: 'Chapati'},
        {itemName:'Laccha Paratha', price: 40, quantity: 0, catagory: 'Chapati'},
        {itemName:'Naan Roti', price: 50, quantity: 0, catagory: 'Chapati'},
        {itemName:'Rumali Roti', price: 70, quantity: 0, catagory: 'Chapati'},
        {itemName:'Cheese Garlic Naan', price: 100, quantity: 0, catagory: 'Chapati'},
        
        {itemName:'Rasgulla', price: 30, quantity: 0, catagory: 'Sweets'},
        {itemName:'Gulaab Jamun', price: 30, quantity: 0, catagory: 'Sweets'},
        {itemName:'Indrani', price: 40, quantity: 0, catagory: 'Sweets'},
        {itemName:'Ras Malai', price: 40, quantity: 0, catagory: 'Sweets'},
        {itemName:'Shri Khand', price: 80, quantity: 0, catagory: 'Sweets'}
      ],
      placedItems : [],
      selectedCatagory:'',
      user:{}
    },
    mutations: {
        addItemToPlacedItems(state, payload){
            let temp = 0
            state.placedItems.forEach(element => {
                if(element.itemName == payload.itemName){
                    element.quantity = payload.quantity;
                    temp = 1;
                }
            });
            if(temp == 0){
                state.placedItems.push(payload);
            }
            //console.log('in store--------',state.placedItems);
        }
    }
});