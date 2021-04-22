<template>
  <div id="noPage">
    <div class="no-found--page-bg">
      <div class="no-page">
        <div class="text-box">
          <div>哎呀，您访问的页面不存在...</div>
          <a-button @click="_goBack" class="go-back">返回</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {onMounted}from "vue"
import {useRouter} from "vue-router"
  export default {
    setup(){
      // 获取路由器实例
      const router = useRouter()
      // route是响应式对象,可监控器变化
      // const route = useRoute()
      const _goBack = ()=>{
        router.go(-1)
      }
      onMounted(() => {
        let el = document.getElementById('noPage')
        let appH = document.getElementById('app').clientHeight
        el.style.height = appH + 'px'
      })


      return{
        _goBack
      }
    
    },
  }
</script>

<style scoped lang="less" >
  .no-found--page-bg{
    width: 100%;
    height: 100%;
    background: url(../../../public/image/notFoundPageBg.png);
    background-size: cover;
    position: relative;
    .no-page{
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -355px;
      margin-left: -550px;
      width: 1100px;
      height: 710px;
      background: url(../../../public/image/noPage.png);
    }
  }
  .text-box{
    float: right;
    margin : 200px 200px 0 0;
    font-size : 20px;
    color: #383f53;
  }

  .go-back{
    margin-top : 20px;
    width : 180px;
    height :40px;
    background : #383f53;
    color: #fff;
    margin-left :40px;
  }
</style>
