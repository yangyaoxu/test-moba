<template>
  <div>
      <swiper :options="swiperOption">
    <swiper-slide>
        <img class="w-100" src="../assets/images/d798304fe8f38a6aab84a7f92e295dc5.jpeg" />
    </swiper-slide>
    <swiper-slide>
        <img class="w-100" src="../assets/images/d798304fe8f38a6aab84a7f92e295dc5.jpeg" />
    </swiper-slide>
    <swiper-slide>
        <img class="w-100" src="../assets/images/d798304fe8f38a6aab84a7f92e295dc5.jpeg" />
    </swiper-slide>
     <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
  </swiper>
   <!-- end of swiper -->
        <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
          <div class="d-flex flex-wrap">
            <div class="nav-item mb-3" v-for="n in 10" :key="n">
              <i class="sprite sprite-news"></i>
              <div class="py-2">爆料站</div>
            </div>
          </div>
          <div class="bg-light py-2 fs-sm">
            <i class="sprite sprite-arrow"></i>
            <span>收起</span>
          </div>
        </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
          pagination: {
            el: ".pagination-home"
          }
      },
    }
  }
}
</script>
<style lang="scss">
  @import '../assets/scss/variables';
  .pagination-home {
    .swiper-pagination-bullet {
      opacity: 1;
      border-radius:0.1538rem;
      background: map-get($colors, 'white' );
      &.swiper-pagination-bullet-active {
        background: map-get($colors, 'info')
      }
      
    }
  }
  .nav-icons {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    .nav-item {
      width: 25%;
      border-left: 1px solid $border-color;
      &:nth-child(4n + 1) {
        border-left: none;
      }
    }
 }
</style>