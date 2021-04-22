<template>
    <div class="home_header">
        <HeadItem></HeadItem>
    </div>
    <div class="home_body">
        <div class="home_left" :style="{'width': changeWidth}" >
            <!-- <div class="home_left_title" >医保智能审核系统</div> -->
            <div class="home_left_body">
                <LeftItem @changeCollapse="changeCollapse" ></LeftItem>
            </div>
        </div>
        <div class="home_right" :style="{'margin-left': `-${changeWidth}`}" >
            <div class="home_right_padding" :style="{'padding-left': changeWidth }" >
                <div class="home_right_body">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div class="clean"></div>
    </div>
</template>
<style lang="less" scoped>
.home_header{
    height: 48px;
}
.home_body{
    height: calc(100% - 48px);
    .home_left{
        float: left;
        text-align: left;
        height: 100%;
        background: #033b79;
        overflow-y: auto;
        overflow-x: hidden;   
        .home_left_body{
            height: 100% ;
            
        }
    }
    .home_right{
        float: right;
        width: 100%;
        height: 100%;
        .home_right_padding{
            height: 100%;
            .home_right_body{
                height: 100%;
                background: #f5f6f9;
                padding:16px;
                box-sizing: border-box;
                position: relative;
                overflow: hidden;
                overflow-y: auto;
            }
        }
    }
}
</style>
<script>
import HeadItem from "@/components/home/HeadItem"
import LeftItem from "@/components/home/LeftItem"
import { reactive, toRefs } from 'vue'
export default {
    components:{
        HeadItem,
        LeftItem
    },
    setup(){
        const data = reactive({
            changeWidth:"220px",
        })

        function changeCollapse(val){
            if(val){
                data.changeWidth = "50px"
            }else{
                data.changeWidth = "220px"
            }
        }
        return{
            ...toRefs(data),
            changeCollapse
        }
    },
}
</script>