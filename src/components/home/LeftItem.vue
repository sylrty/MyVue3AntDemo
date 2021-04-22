<template>
    <div>
        <div class="menu_collapse">
            <span v-if="!isCollapse" >收起左侧栏</span>
            <i>
                <CaretRightOutlined v-if="isCollapse" @click="changeCollapse(false)" title="展开"   />
                <CaretLeftOutlined v-else   @click="changeCollapse(true)" title="收起"   />
            </i>
        </div>
        <a-menu
            :inline-collapsed="isCollapse"
            mode="inline"
            @click="clickMenu"
            :default-selected-keys="[path]"
        >
         <template  v-for="(item) in mymenu" :key="item.routerUrl"  >
            
            <a-sub-menu  v-if="item.children" >
                <template v-slot:title >
                    <component :is="$antIcons[item.icon]" /> 
                    <span  >{{item.name}}</span>
                </template>
                 <a-menu-item v-for="(subitem) in item.children" :key="subitem.routerUrl" >
                    {{subitem.name}}
                </a-menu-item>
            </a-sub-menu>
            
            <a-menu-item v-else  :key="item.routerUrl">
                <component :is="$antIcons[item.icon]" /> 
                <span  >{{item.name}}111</span>
            </a-menu-item>

         </template>
    </a-menu>
    </div>
</template>
<style lang="less" scoped>
    .menu_collapse{
        position: relative;
        height: 30px;
        padding: 0 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        text-align: left;
        i {  
            margin-left:10px ;
            font-size: 18px;
            &:hover{
                background: #333;
            }
        }
        
    }
    :deep(.ant-menu-inline-collapsed > .ant-menu-item) ,:deep(.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title) {
        padding: 0 16px !important;
    }
</style>
<script>
import {CaretLeftOutlined,CaretRightOutlined} from '@ant-design/icons-vue';
import { reactive, toRefs ,watch} from 'vue';
import {useRouter,useRoute} from "vue-router"
export default {
    components:{
       CaretLeftOutlined,CaretRightOutlined
    },
    setup(props, context){
        // 获取路由器实例
        const router = useRouter();
        const route = useRoute();

        const data = reactive({
            path: "",
            isCollapse:false,//是否折叠
            mymenu:[
                {
                    "name": "首页",
                    "routerUrl": "/MainPage/HomePage",
                    "icon":"RadarChartOutlined"
                },
                // {
                //     "name": "数据综合查询",//暂时没有
                //     "icon":"AreaChartOutlined"
                // },
                // {
                //     "name": "大数据中心",//暂时没有
                //     "icon":"BarChartOutlined"
                // },
                {
                    "name": "医保运营管理",
                    "icon":"ApartmentOutlined",
                    "children": [
                        {
                            "name": "单据审核",
                            "routerUrl": "/MainPage/DocReview"
                        }, 
                        {
                            "name": "机构单据",
                            "routerUrl": "/MainPage/OrgDocReview"
                        }, 
                        {
                            "name": "审核意见书生成",
                            "routerUrl": "/MainPage/ApplicationOpinionFormCreate"
                        },
                        {
                            "name": "剔除费用表生成",
                            "routerUrl": "/MainPage/ExcludeFeeTableCreate"
                        },
                        {
                            "name": "权限管理",
                            "routerUrl": "/MainPage/RightsManage"
                        },
                        {
                            "name": "用户管理",
                            "routerUrl": "/MainPage/UserManage"
                        },
                        {
                            "name": "机构管理",
                            "routerUrl": "/MainPage/OrgManage"
                        },
                        {
                            "name": "审核意见书下载",
                            "routerUrl": "/MainPage/ApplicationOpinionFormDownload"
                        },
                        {
                            "name": "剔除费用表下载",
                            "routerUrl": "/MainPage/ExcludeFeeTableDownload"
                        },
                        {
                            "name": "审核日志",
                            "routerUrl": "/MainPage/ExamineLog"
                        },
                        {
                            "name": "操作日志",
                            "routerUrl": "/MainPage/OperationLog"
                        },
                      

                    ],
                },
                {
                    "name": " 系统设置",//暂时没有
                    "icon":"EditOutlined"
                },
            ]
        });

        onRouteChanged();
        watch(
            () => route.path,
            () => {
                onRouteChanged()
            }
        )
        function clickMenu(menu){
            // const {item, key, keyPath} = menu;
            const {key} = menu;
            router.push(key)
        }
        function changeCollapse(val){
            data.isCollapse = val;
            context.emit("changeCollapse",val);
        }
        function onRouteChanged(){
            const nowPath = route.path;
            data.path = nowPath;
        }
        return{
            clickMenu,
            changeCollapse,
            onRouteChanged,
            ...toRefs(data),
        }
    },
}
</script>