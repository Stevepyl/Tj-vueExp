<template>
    <div hw-screen p0 m0>
        <div class="login-container m0">
            <a-carousel class="carousel-box" auto-play show-arrow="never" indicator-type="line" indicator-position="bottom"
                :style="{
                    width: '25%',
                    minWidth: '400px',
                    height: '50vh',
                    marginTop: '10vh',
                }"
                @change="handleChange">
                <a-carousel-item v-for="image in carousels" :key="image">
                    <img :src="image" :style="{width: '100%',}"> 
                </a-carousel-item>
            </a-carousel>
            <div hfull flex-y-center relative>
            
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Auth',
    components: {
        // Login,
        // Signup,
    },
    setup() {
        const carousels = [
            'src/assets/login/one.png',
            'src/assets/login/two.png',
            'src/assets/login/three.png',
        ];
        const handleChange = (value) => {
            console.log(value)
        }
        return {
            carousels,
            handleChange,
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
};
</script>

<style scoped lang="less">
.login-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: url('src/assets/login/bg.png') no-repeat 0 -120px;
    overflow: hidden;
}

.form {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 450px;
    height: 580px;
    margin-top: 20px;
    background-color: v-bind(formBgColor);
    backdrop-filter: blur(20px);
    padding: 20px;
    box-shadow: 0 0 20px 5px rgba(40, 40, 40, 0.3);
    border-radius: 8px;
    z-index: 2;
}

.bg-img-box {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 770px;
    margin-right: -20px;

    &-li {
        img {
            margin-right: 20px;
            margin-top: 20px;
            width: 230px;
            border-radius: 2 * 8px;
            opacity: 0.9;
        }
    }
}

@media only screen and (max-width: 1200px) {

    .bg-img-box,
    .carousel-box {
        display: none !important;
    }
}

.list-complete-item {
    transition: all 1s;
}

.list-complete-enter-from,
.list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.list-complete-leave-active {
    position: absolute;
}

:deep(.arco-carousel-indicator-wrapper-bottom) {
    background: none;
}
</style>
