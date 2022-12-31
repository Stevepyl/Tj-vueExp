<template>
    <a-card direction="vertical">
        <div text="32px center" font-bold>
            实验教学管理系统
        </div>
        <div text="26px center" font-bold>
            Experiment Teaching Management System
        </div>
        <div id="lottie" h150px />

        <a-form :model="formModel" layout="vertical" size="large" @submit="submit">
            <a-form-item field="userInfo.id" label="学/工号" validate-trigger="input">
                <a-input v-model="userInfo.id" placeholder="请输入您的学/工号">
                    <template #prefix>
                        <icon-user />
                    </template> -->
                </a-input>
            </a-form-item>

            <a-form-item field="userInfo.password" label="密码" validate-trigger="a-input-password" allow-clear>
                <a-input-password v-model="userInfo.password" placeholder="请输入密码...">
                    <template #prefix>
                        <IconLock />
                    </template> -->
                </a-input-password>
            </a-form-item>
            <div>
                <a-button type="primary" @click="onsubmit" font-bold>
                    登录
                </a-button>
            </div>
        </a-form>

    </a-card>
</template>

<script>
import { reactive } from 'vue'



export default {
    name: 'Login',
    setup() {
        const userInfo = reactive({
            id: '',
            password: '',
            idErrors: [],
            passwordErrors: [],

            isActivated: ''
        })

        return {userInfo}
    },
    computed: {
        formReady() {
            return this.userInfo.idErrors.length && this.userInfo.passwordErrors.length
        }
    },
    mounted() {
        // this.userInfo.id = this.$route.params.id ? this.$route.params.id : 101
        // this.userInfo.password = this.$route.password ? this.$route.password : 12345
        
        fetch(this.$URL + "/user/isLogin", {
            method: 'GET',
            headers: { "satoken": localStorage.getItem("token") }
        }).then(res => res.text())
        .then(res => {
            console.log('登录状态:' + res)
            // 后端返回true，代表已登录
            if ("true" == res) {
                this.$message.success("登录成功")
                this.$router.push({name: 'Home'})
            } else {
                return
            }
        })

        fetch(this.$URL + "/user/get?id=" + this.userInfo.id, {
            method: 'GET',
            headers: { "satoken": localStorage.getItem("token")}
        })
        .then(res => res.json())
        .then(res => {
            this.userInfo.isActivated = res.isActivated
        })
        
        console.log('params from the last page:')
        console.log(this.$route.params.id, this.$route.params.password)
        // this.id = this.$route.params.id ? this.$route.params.id : 101
        // this.password = this.$route.params.password ? this.$route.params.password : 12345
    },
    methods: {
        onsubmit() {
            // for test
            console.log(this.userInfo.id, this.userInfo.password)

            this.userInfo.idErrors = (null == this.userInfo.idErrors) ? ['id不能为空!'] : []
            this.userInfo.passwordErrors = this.userInfo.password ? [] : ['密码不能为空!'] 

            if (null == this.formReady) {
                return
            } else {
                fetch(this.$URL + "/user/login?id=" + this.userInfo.id + "&password=" + this.userInfo.password , {
                    method: "GET"
                }).then(res => res.json())
                .then((res) => {
                    console.log(res)
                    if (200 == res.code) {
                        if (this.userInfo.isActivated) {
                            this.$message.success("Welcome")
                        }
                        localStorage.setItem("userId", this.userInfo.id)
                        localStorage.setItem("password", this.userInfo.password)
                        localStorage.setItem("token", res.data.tokenValue)
                        this.$router.push('Home')
                    } else {
                        this.$message.error("用户不存在或密码错误")
                    }
                })
            }
        },
        onMounted() {

        }
    }
}
</script>

<style>
</style>