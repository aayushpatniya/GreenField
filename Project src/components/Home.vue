<template>
  <div class="flexslider">
    <img :src="require(`@/Assets/slider-img1.jpg`)" alt="Pizza Image 1">
    <div class="flex-caption">
      <h2 class="slider-title">We make Meals</h2>
      <h3 class="slider-subtitle">Fresh, clean, and delicious.</h3>
      <p class="slider-description">Praesent tincidunt neque semper elementum gravida. Donec id euismod magna. Ut erat ligula, malesuada eu quam a, fringilla auctor augue.</p>
    </div>
	</div>
</template>

<script>
export default {
    name: 'Home'  
}
</script>

<style scoped>
.flexslider {
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  overflow: hidden;
}
.flexslider img {
    vertical-align: middle;
    height: 708px;
    width: 100%;
}
.flex-caption {
  position: absolute;
  top: 39%;
  width: 100%;
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
</style>