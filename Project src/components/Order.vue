<template>
    <div>
        <CatagoryList></CatagoryList>
        <ItemList></ItemList>
    </div>
</template>

<script>
import CatagoryList from './CatagoryList'
import ItemList from './ItemList'

export default {
    name: 'Order',
    components : {      
        CatagoryList,
        ItemList
    }
}
</script>

<style scoped>

</style>