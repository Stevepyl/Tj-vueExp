<template>
    <div class="auth">
        <div class="auth-login">
            <div class="login-banner">
                <div class="banner-title">实验教学管理系统</div>
                <img src="src/assets/login01.jpg" />
            </div>

            <div class="login-content">
                <div class="content-form">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Login from './Login.vue'
// import Signup from './Signup.vue'

export default {
    name: 'Auth',
    components: {
        // Login,
        // Signup,
    },
    data() {
        return {
            tabValue: 0,
            activeName: ""
            // valueStr: 0
        }
    },
    computed: {
        tabIndex: {
            set(tabName) {
                this.$router.push({ name: tabName })
            },
            get() {
                return this.$route.name
            }
        }
    },
    mounted() {
        console.log("tabValue transferred here: ", this.$route.params.tabValue)
        this.$router.push({ name: 'Login' })
        this.activeName = 'login'
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event)
            console.log('activeName: ', this.activeName)
            this.$router.push({ name: this.activeName })
        }
    }
}
</script>

<style lang="less" scoped>
.auth {
    position: relative;
    width: 100vw;
    min-width: 1200px;
    height: 100vh;
    min-height: 100vh;
    background-color: rgb(69, 136, 250);
    // background: url('../../assets/images/login-bg.jpg') 0 0 no-repeat;
    // background-size: 100% 100%;

    .auth-login {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 9;
        height: 560px;
        transform: translate(-50%, -50%);
        // .flex_vertical_center_horizontal_between();

        .login-banner {
            position: relative;
            width: 800px;
            height: 100%;
            margin-right: 35px;
            border-radius: 15px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

            .banner-title {
                position: absolute;
                top: 30px;
                left: 30px;
                z-index: 9;
                font-size: 30px;
                color: #fff;
                text-align: left;
            }

            img {
                width: 100%;
                height: 100%;
                border-radius: 15px;
            }
        }

        .login-content {
            position: relative;
            width: 340px;
            height: 100%;
            border-radius: 15px;
            background-color: #fff;
            overflow: hidden;

            .content-form {
                position: absolute;
                top: 60px;
                left: 0;
                z-index: 9;
                width: 100%;
                // height: 400px;
                padding: 20px 25px;
                text-align: left;
                background-color: #fff;

                .form-title {
                    font-size: 32px;
                    color: #165dff;
                    margin-bottom: 10px;
                }

                .form-tip {
                    width: 100%;
                    font-size: 16px;
                    color: rgba(0, 0, 0, 0.5);
                    margin-bottom: 20px;
                }

                .form-wrap {
                    width: 100%;

                    .wrap-item {
                        // .flex_vertical_center();
                        width: 100%;
                        height: 52px;
                        padding: 15px 10px 0 5px;
                        margin-bottom: 15px;
                        border-bottom: 1px solid #ccc;

                        .item-icon {
                            font-size: 20px;
                            color: #999;
                        }

                        .item-pwd {
                            font-size: 16px;
                            color: #999;
                            cursor: pointer;
                        }

                        input {
                            flex: 1;
                            height: 100%;
                            padding: 0 10px;
                            border: none;
                            outline: none;

                            &::placeholder {
                                color: #ccc;
                                font-size: 14px;
                            }
                        }

                        .verify-img {
                            height: 100%;

                            img {
                                height: 100%;
                            }
                        }
                    }

                    .wrap-forgot {
                        width: 100%;
                        font-size: 14px;
                        color: #165dff;
                        text-align: left;
                    }

                    .wrap-submit {
                        margin-top: 30px;
                    }

                    .wrap-no {
                        width: 100%;
                        font-size: 14px;
                        color: rgba(0, 0, 0, 0.6);
                        text-align: center;
                        margin-top: 40px;
                    }
                }
            }
        }
    }
}

/* 右滑动画 */
.slider-enter-active,
.slider-leave-active {
    transition: all 1s;
}

.slider-enter-from {
    transform: translateX(100%);
    opacity: 1;
}

.slider-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

/* 左滑动画 */
.slidel-enter-active,
.slidel-leave-active {
    transition: all 1s;
}

.slidel-enter-from {
    transform: translateX(-100%);
    opacity: 1;
}

.slidel-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style>
