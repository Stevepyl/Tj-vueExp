<template>
    <div class="login-container">
        <a-carousel class="carousel-box" auto-play show-arrow="never" indicator-type="never" indicator-position="bottom" :style="{
            width: '25%',
            minWidth: '400px',
            height: '50vh',
            marginTop: '10vh',
        }">
            <a-carousel-item v-for="image in imagesList" :key="image">
                <img :src="getImageUrl(image)" :style="{
                      width: '100%',
                    }" />
            </a-carousel-item>
        </a-carousel>
        <div class="slogan">
            <div style="font-size: 40px">
                实验教学管理系统
            </div>
            <div />
            <div style="font-size: 22px">
                Experiment Teaching Management System
            </div>
        </div>
        
        <div style="z-index: 1">
            <a-card class="auth-box" hoverable>
                <va-card-content>
                    <va-tabs style="font-size: 16px" center v-model="tabIndex">
                        <template #tabs>
                            <va-tab name="Login">登录</va-tab>
                            <va-tab name="Signup">注册</va-tab>
                        </template>
                    </va-tabs>
                    <va-separator />
                    <div>
                        <router-view />
                    </div>
                </va-card-content>
            </a-card>
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
    setup() {
        const imagesList = [
            'one',
            'two',
            'three',
        ];
        const getImageUrl = (name) => new URL(`../../assets/login/${name}.png`, import.meta.url).href;
        return {
            getImageUrl,
            imagesList,
            tabValue: 0,
            activeName: ""
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

<style>
html {
    width: 100%;
}

body {
    width: 100%;
}

.login-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: url('../../assets/bg.png') no-repeat;
    overflow: hidden;
}

.slogan {
    position: absolute;
    top: 23%;
    left: 60%;
    right: 30%;
    min-width: 400px;
    font-weight: bold;
    color: #4080FF;
}

.auth-box {
    width: 35%;
    height: 50%;
    min-height: 240px;
    position: fixed;
    margin: auto;
    left: 55%;
    right: 30%;
    top: 35%;
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media only screen and (max-width: 1200px) {
    .bg-img-box,
    .carousel-box {
        display: none !important;
    }
}

@keyframes move_wave {
    0% {
        transform: translateX(0) translateZ(0) scaleY(1)
    }

    50% {
        transform: translateX(-25%) translateZ(0) scaleY(0.55)
    }

    100% {
        transform: translateX(-50%) translateZ(0) scaleY(1)
    }
}

.waveWrapper {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
}

.waveWrapperInner {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
    bottom: -1px;
    background-image: linear-gradient(to top, #75adee 20%, #002b88 80%);
}

.bgTop {
    z-index: 15;
    opacity: 0.5;
}

.bgMiddle {
    z-index: 10;
    opacity: 0.75;
}

.bgBottom {
    z-index: 5;
}

.wave {
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom;
}

.waveTop {
    background-size: 50% 100px;
}

.waveAnimation .waveTop {
    animation: move-wave 3s;
    -webkit-animation: move-wave 3s;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
}

.waveMiddle {
    background-size: 50% 120px;
}

.waveAnimation .waveMiddle {
    animation: move_wave 10s linear infinite;
}

.waveBottom {
    background-size: 50% 100px;
}

.waveAnimation .waveBottom {
    animation: move_wave 15s linear infinite;
}
</style>