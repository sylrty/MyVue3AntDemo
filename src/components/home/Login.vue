<template>
    <div class="login_main">
        <div class="login_container">
            <div class="login_container_header" >
                <div @click="loginType = 1 " :class="loginType===1?'':'header_inType_noChoise'" class="header_inType"  >账号登录</div>
                <div @click="loginType = 2 " :class="loginType===2?'':'header_inType_noChoise'" class="header_inType" >管理员登录</div>
            </div>
            <div class="login_container_body" >
                <a-input class="body_input" v-model:value="username" placeholder="账号" />
                <a-input class="body_input" v-model:value="password" placeholder="密码" type="password"  />
                <div class="login_container_body_verifyCode" >
                    <a-input :maxlength="4" class="body_verify_input" v-model:value="verifyCode" placeholder="验证码" />
                    <img @click="changeVerifyCode" :src="verifySrc" alt="">
                    <div class="clean"></div>
                </div>
                <div class="body_tip" >
                    <div class="body_tip_keep" > 
                      <a-checkbox v-model:checked="isKeep">记住账号</a-checkbox>   
                    </div>
                    <div class="body_tip_forget" >忘记密码</div>
                </div>
            </div>
            <div class="login_container_footer" >
                <a-button class="footer_botton" type="primary"  @click="login" >登录</a-button>
                <div class="footer_visiter" >暂不登录，游客访问>></div>
            </div>
        </div>
    </div>
</template>
<script>
// import md5 from "js-md5"
// import sha512 from "js-sha512"
import sha256 from "js-sha256"
import * as _ from '@/assets/js/config'
import{saveLocalStorage} from '@/assets/js/util'
import { reactive ,toRefs ,getCurrentInstance,onBeforeUnmount,ref } from 'vue'
import {useRouter} from "vue-router"
export default {
    setup(){
        const { ctx } = getCurrentInstance();
        // 获取路由器实例
        const router = useRouter()

        const data =reactive({
            loginType:1,//登录方式 1账号登录 2管理员登录
            username:"",//用户名
            password:"",//密码
            verifyCode:"",//验证码
            verifySrc:"",//验证码图片地址
            isKeep:false,//是否记住密码
        })
        
        const enterLogin = (e)=>{
            if(e.keyCode === 13){
                login();
            }
        }
        const login= ()=>{
            console.log(data , data.username , data.password)
            if(!data.username || !data.password){
                ctx.$message.error("请填入账号及密码");
                return;
            }
            if(!data.verifyCode){
                ctx.$message.error("请填入验证码");
                return;
            }
            const params={
                captcha: data.verifyCode,
                username: data.username,
                password:sha256(sha256(data.password ) + data.verifyCode),
            }
            ctx.$http.fetch("/login",params,"post").then((res)=>{
                if (res.data.code === _.ERR_OK) {
                    let resData = res.data.data
                    saveLocalStorage(resData, 'userInfo');
                    router.push('/MainPage')
                }
                changeVerifyCode();
            })
        }
        const changeVerifyCode= ()=>{
            let random = Math.random()
            data.verifySrc = `${window.BASE_URL}captcha?${random}`
        }
    
        
        window.addEventListener('keydown',enterLogin);
        changeVerifyCode();
        onBeforeUnmount(
            ()=>{
                window.removeEventListener('keydown',enterLogin)
            }
        )
  
        return{
            login,
            changeVerifyCode,
            ...toRefs(data),
        }
    },

}
</script>
<style lang="less" scoped>
    .login_main{
        height: 100%;
        .login_container{
            width: 450px;
            background: #fff;
            margin: 0 auto;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .login_main  :deep(.ant-input){
        height: 40px ;
        line-height: 40px;
    }
    .login_container_header{
        width: 100%;
        height: 65px;
        line-height: 65px;
        margin-bottom: 10px;
        .header_inType{
            width: 50%;
            display: inline-block;
            text-align: center;
            font-weight: 650;
            font-style: normal;
            font-size: 20px;
            cursor: pointer;
            color: #3b78dd;
        }
        .header_inType_noChoise{
            background: rgba(240, 240, 240, 1);
        }
    }
    .login_container_body{
        margin: 20px 25px;
        .body_input{
            margin-bottom: 15px;
        }
        
        .login_container_body_verifyCode{
            margin-bottom: 15px;
            .body_verify_input{
                float: left;
                width: 200px;
    
            }
            img{
                float: right;
                height:40px
            }
        }
        .body_tip_keep{
            display: inline-block;
            width: 50%;
            text-align: left;
            padding-left: 5px;
            box-sizing: border-box;
        }
        .body_tip_forget{
            display: inline-block;
            width: 50%;
            text-align: right;
            padding-right: 5px;
            box-sizing: border-box;
            cursor: pointer;
            color: #3b78dd;
            &:hover{
                color: #5c7fd1;
            }
        }
    }
    .login_container_footer{
        margin: 0px 25px;
        .footer_botton{
            width:100%;
            background: #3b78dd;
            color: #fff;
            margin-bottom: 15px;
            font-size: 18px;
            letter-spacing: 15px;
            &:hover{
                background: #216adf;
            }
        }
        .footer_visiter{
            padding-bottom: 10px;
            color: #EC808D;
            cursor: pointer;
            &:hover{
                color: #f06071;
            }
        }
    }
</style>