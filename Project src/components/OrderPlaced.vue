<template>
    <div>
        <h3>Your Order will be arriving soon</h3>
        <img src="https://miro.medium.com/max/700/0*4_6SlM3lVujkzBJo.gif">
    </div>
</template>

<script>
export default {
    name : 'OrderPlaced'
}
</script>

<style scoped>
img{
    position: absolute;
    left: 50%;
    top: 32%;
    transform: translateX(-50%);
}
h3
{
    text-align: center;
    margin-top: 147px;
}
</style>