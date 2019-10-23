<template>
    <div>
        <div class="topbar d-flex bg-black px-3 py-2 ai-center">
            <img src="../assets/logo.png" height="30">
            <div class="flex-1 px-2">
                <div class="text-white">王者荣耀</div>
                <div class="text-grey-1 fs-sm pt-1">团队成就更多</div>
            </div>
            <button type="button" class="btn bg-primary">立即下载</button>
        </div>
        <div class="bg-primary py-2">
            <div class="nav nav-inverse jc-around">
                <div class="nav-item active">
              <router-link class="nav-link" tag="div" to="/">首页</router-link>
                </div>
                <div class="nav-item">
              <router-link class="nav-link" tag="div" to="/">攻略中</router-link>
                </div>
                <div class="nav-item">
              <router-link class="nav-link" tag="div" to="/">赛事中</router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>
.<style lang="scss" scoped>
.topbar {
    position: sticky;
    top: 0;
    z-index: 999;
}
</style>