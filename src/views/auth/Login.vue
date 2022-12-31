<template>
    <!-- <a-card direction="vertical">
        <a-form :model="formModel" layout="vertical" size="large" @submit="submit">
            <a-form-item field="userInfo.id" label="学/工号" validate-trigger="input">
                <a-input v-model="userInfo.id" placeholder="请输入您的学/工号">
                    <template #prefix>
                        <icon-user />
                    </template> -->
                <!--</a-input>
            </a-form-item>

            <a-form-item field="userInfo.password" label="密码" validate-trigger="a-input-password" allow-clear>
                <a-input-password v-model="userInfo.password" placeholder="请输入密码...">
                    <template #prefix>
                        <IconLock />
                    </template> -->
                <!--</a-input-password>
            </a-form-item>
            <div>
                <a-button type="primary" @click="onsubmit" font-bold>
                    登录
                </a-button>
            </div>
        </a-form>

    </a-card> -->
    <div>
        <form @submit.prevent="onSubmit" style="margin-top: 30px">
            <va-input v-model="id" type="id" label="id" :error="!!idErrors.length" :error-messages="idErrors" />
    
            <va-input v-model="password" type="password" label="password" :error="!!passwordErrors.length"
                :error-messages="passwordErrors" style="margin-top: 10px" />
            <div style="margin-top: 15px">
                <va-button @click="onSubmit">登录</va-button>
                <va-button flat style="margin-left: 10px"
                    @click="this.$router.push({ name: 'RecoverPassword', params: { id: this.id } })">忘记密码？</va-button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: 'LogIn',
    data() {
        return {
            id: '',
            password: '',
            idErrors: [],
            passwordErrors: [],

            activated: '',
        }
    },
    computed: {
        formReady() {
            return !this.idErrors.length && !this.passwordErrors.length
        }
    },
    mounted() {

        this.id = this.$route.params.id ? this.$route.params.id : 101
        this.password = this.$route.params.password ? this.$route.params.password : 12345

        fetch(this.$URL + "/user/isLogin", {
            method: "GET",
            headers: { "satoken": localStorage.getItem("token") }
        }).then(res => res.text())
            .then(res => {
                console.log(res)
                if (res == 1) {
                    // this.$message.success("当前用户已登录")
                    this.$router.push({ name: 'Home' })
                } else {
                    return
                }
            })

        fetch(this.$URL + "/user/get?id=" + this.id, {
            method: "GET",
            headers: { "satoken": localStorage.getItem("token") }
        })
            .then(res => res.json())
            .then((res) => {
                this.activated = res.activated
            })



        console.log('params from the last page:')
        console.log(this.$route.params.id, this.$route.params.password)
        this.id = this.$route.params.id ? this.$route.params.id : 101
        this.password = this.$route.params.password ? this.$route.params.password : 12345
    },
    methods: {
        onSubmit() {
            // let myReg=/^(\w|(\.\w+))+@([a-zA-Z0-9_-]+\.)+(com|org|cn|net)+$/
            console.log(this.id, this.password)
            if (!this.id) {
                this.idErrors = ['id不能为空']
            } else {
                this.idErrors = []
            }
            this.passwordErrors = this.password ? [] : ['密码不能为空']
            if (!this.formReady) {
                return
            } else {
                fetch(this.$URL + "/user/login?id=" + this.id + "&password=" + this.password, {
                    method: "GET"
                }).then(res => res.json())
                    .then((res) => {
                        console.log(res)
                        if (res.code == 200) {
                            if (this.activated) {
                                this.$message.success("登录成功")
                            }
                            localStorage.setItem("userId", this.id)
                            localStorage.setItem("password", this.password)
                            localStorage.setItem("token", res.data.tokenValue)
                            this.$router.push({ name: 'Home' })
                        } else {
                            this.$message.error("用户不存在或密码错误")
                        }
                    })
            }
        },
    }
}

// import { reactive } from 'vue'

// export default {
//     name: 'Login',
//     setup() {
//         const userInfo = reactive({
//             id: '',
//             password: '',
//             idErrors: [],
//             passwordErrors: [],

//             isActivated: ''
//         })

//         return {userInfo}
//     },
//     computed: {
//         formReady() {
//             return this.userInfo.idErrors.length && this.userInfo.passwordErrors.length
//         }
//     },
//     mounted() {
//         // this.userInfo.id = this.$route.params.id ? this.$route.params.id : 101
//         // this.userInfo.password = this.$route.password ? this.$route.password : 12345
        
//         fetch(this.$URL + "/user/isLogin", {
//             method: 'GET',
//             headers: { "satoken": localStorage.getItem("token") }
//         }).then(res => res.text())
//         .then(res => {
//             console.log('登录状态:' + res)
//             // 后端返回true，代表已登录
//             if ("true" == res) {
//                 this.$message.success("登录成功")
//                 this.$router.push({name: 'Home'})
//             } else {
//                 return
//             }
//         })

//         fetch(this.$URL + "/user/get?id=" + this.userInfo.id, {
//             method: 'GET',
//             headers: { "satoken": localStorage.getItem("token")}
//         })
//         .then(res => res.json())
//         .then(res => {
//             this.userInfo.isActivated = res.isActivated
//         })
        
//         console.log('params from the last page:')
//         console.log(this.$route.params.id, this.$route.params.password)
//         // this.id = this.$route.params.id ? this.$route.params.id : 101
//         // this.password = this.$route.params.password ? this.$route.params.password : 12345
//     },
//     methods: {
//         onsubmit() {
//             // for test
//             console.log(this.userInfo.id, this.userInfo.password)

//             this.userInfo.idErrors = (null == this.userInfo.idErrors) ? ['id不能为空!'] : []
//             this.userInfo.passwordErrors = this.userInfo.password ? [] : ['密码不能为空!'] 

//             if (null == this.formReady) {
//                 return
//             } else {
//                 fetch(this.$URL + "/user/login?id=" + this.userInfo.id + "&password=" + this.userInfo.password , {
//                     method: "GET"
//                 }).then(res => res.json())
//                 .then((res) => {
//                     console.log(res)
//                     if (200 == res.code) {
//                         if (this.userInfo.isActivated) {
//                             this.$message.success("Welcome")
//                         }
//                         localStorage.setItem("userId", this.userInfo.id)
//                         localStorage.setItem("password", this.userInfo.password)
//                         localStorage.setItem("token", res.data.tokenValue)
//                         this.$router.push('Home')
//                     } else {
//                         this.$message.error("用户不存在或密码错误")
//                     }
//                 })
//             }
//         },
//         onMounted() {

//         }
//     }
// }
</script>

<style>
</style>