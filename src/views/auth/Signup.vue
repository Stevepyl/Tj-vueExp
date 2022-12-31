<template>

    <a-form :model="formModel" layout="vertical" size="large" @submit="submit">
        <a-form-item field="signupUserInfo.id" label="学/工号" validate-trigger="input">
            <a-input v-model="signupUserInfo.id" placeholder="请输入您的学/工号">
                <template #prefix>
                    <icon-user />
                </template>
            </a-input>
        </a-form-item>

        <a-form-item field="signupUserInfo.email" label="邮箱" validate-trigger="input">
            <a-input v-model="signupUserInfo.email" placeholder="请输入您的邮箱">
                <template #prefix>
                    <icon-email />
                </template>
            </a-input>
        </a-form-item>

        <a-form-item field="signupUserInfo.password" label="密码" validate-trigger="a-input-password" allow-clear>
            <a-input-password v-model="signupUserInfo.password" placeholder="请输入密码...">
                <template #prefix>
                    <IconLock />
                </template>
            </a-input-password>
        </a-form-item>
        <div>
            <a-button type="primary" @click="onsubmit" font-bold>
                注册
            </a-button>
        </div>
    </a-form>
    <!-- <form @submit.prevent="onsubmit">
        <va-input v-model="id" type="id" label="id" :error="!!idErrors.length" :error-messages="idErrors" />

        <va-input v-model="email" type="email" label="email" :error="!!emailErrors.length" :error-messages="emailErrors"
            style="margin-top: 10px" />

        <va-input v-model="password" type="password" label="password" :error="!!passwordErrors.length"
            :error-messages="passwordErrors" style="margin-top: 10px" />
        <div style="margin-top: 15px">
            <va-button @click="onsubmit">注册</va-button>
        </div>
    </form> -->
</template>

<script>
import { reactive } from 'vue';

export default {
    name: 'SignUp',
    setup() {
        const signupUserInfo = reactive({
            id: '',
            email: '',
            password: '',
            idErrors: [],
            emailErrors: [],
            passwordErrors: [],
        })
        return { signupUserInfo }
    },
    computed: {
        formReady() {
            return !this.signupUserInfo.emailErrors.length && !this.signupUserInfo.passwordErrors.length && !this.signupUserInfo.idErrors.length
        }
    },
    methods: {
        onsubmit() {
            let myReg = /^(\w|(\.\w+))+@([a-zA-Z0-9_-]+\.)+(com|org|cn|net)+$/
            console.log(this.signupUserInfo.id, this.signupUserInfo.email, this.signupUserInfo.password)
            if (!this.signupUserInfo.email) {
                this.signupUserInfo.emailErrors = ['email不能为空！']
            } else if (!myReg.test(this.signupUserInfo.email)) {
                this.signupUserInfo.emailErrors = ['请填入正确格式的email!']
            } else {
                this.signupUserInfo.emailErrors = []
            }
            this.signupUserInfo.passwordErrors = this.signupUserInfo.password ? [] : ['密码不能为空！']
            this.signupUserInfo.idErrors = this.signupUserInfo.id ? [] : ['ID不能为空！']
            if (!this.formReady) {
                return
            } else {
                let request = {
                    id: this.signupUserInfo.id,
                    password: this.signupUserInfo.password,
                    email: this.signupUserInfo.email,
                }
                console.log(request)
                fetch(this.$URL + "/user/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(request)
                }).then(res => res.json())
                    .then((res) => {
                        console.log(res)
                        if (res.code == 200) {
                            this.$message.success('注册成功！')
                            this.$router.push({
                                name: 'SignupSuccess',
                                params: {
                                    id: this.id,
                                    password: this.password
                                }
                            })
                        } else if (res.code == 403) {
                            this.$message.error("用户已存在！")
                        } else if (res.code == 409) {
                            this.$message.error('该邮箱已被注册！')
                        } else {
                            this.$message.error("注册失败！")
                        }
                    })
            }
        },
    }
}
</script>

<style>

</style>