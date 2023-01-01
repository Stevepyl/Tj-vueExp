<template>

    <va-navbar color="#165DFF" gradient style="height: 8%; min-height: 60px;">
        <template v-slot:center>
            <span style="font-weight: bold; font-size: 18px">实验教学管理系统</span>
        </template>
        <template v-slot:right>
            <div style="height: 60px; min-height: 60px; display: flex">
                <div style="height: 60px">
                    <a-button style="top: 12px" round @click="this.$router.push({ name: 'BasicInfo' })" shape="circle">
                        <va-avatar :src="myAvatarUrl()" />
                    </a-button>
                </div>
                <div style="line-height: 60px; margin-left: 20px">
                    欢迎，{{ this.name }}
                </div>
            </div>
        </template>
    </va-navbar>

    <div>
        <!-- manager -->
        <a-menu v-if="this.identity == 4" mode="horizontal" :default-selected-keys="['1']">
            <a-sub-menu key="0">
                <template #icon><icon-notification /></template>
                <template #title>通知公告</template>
                <a-menu-item key="0_0" @click="this.$router.push({ name: 'Announcement' })">
                    通知公告
                </a-menu-item>
            </a-sub-menu>
            
            <a-sub-menu key="1">
                <template #icon><icon-user /></template>
                <template #title>基本信息</template>
                <a-menu-item key="1_0" @click="onClickBasicInfo()">
                    查看基本信息
                </a-menu-item>
                <a-menu-item key="1_1" @click="onClickEditBasicInfo()">
                    修改基本信息
                </a-menu-item>
                <a-menu-item key="1_1" @click="this.$router.push({ name: 'Security' })">
                    账号安全
                </a-menu-item>
            </a-sub-menu>
            
            <a-sub-menu key="2">
                <template #icon><icon-storage /></template>
                <template #title>用户管理</template>
                <a-menu-item key="2_0" @click="this.$router.push({ name: 'AccountManagement' })">
                    用户管理
                </a-menu-item>
            </a-sub-menu>
            
            <a-menu-item key="3" @click="handleLogout">
                <template #icon><icon-left-circle /></template>
                退出登录
            </a-menu-item>
        </a-menu>
        <!-- teacher -->
        <a-menu v-if="this.identity == 2 || this.identity == 3" mode="horizontal" :default-selected-keys="['1']">
            <a-sub-menu key="0">
                <template #icon><icon-notification /></template>
                <template #title>通知公告</template>
                <a-menu-item key="0_0" @click="this.$router.push({ name: 'Announcement' })">
                    通知公告
                </a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="1">
                <template #icon><icon-user /></template>
                <template #title>基本信息</template>
                <a-menu-item key="1_0" @click="onClickBasicInfo()">
                    查看基本信息
                </a-menu-item>
                <a-menu-item key="1_1" @click="onClickEditBasicInfo()">
                    修改基本信息
                </a-menu-item>
                <a-menu-item key="1_1" @click="this.$router.push({ name: 'Security' })">
                    账号安全
                </a-menu-item>
            </a-sub-menu>
            
            <a-sub-menu key="2">
                <template #icon><icon-storage /></template>
                <template #title>课程资源</template>
                <a-menu-item key="2_0" @click="onClickCourseResources()">
                    课程资源
                </a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="3">
                <template #icon><icon-folder /></template>
                <template #title>课程管理</template>
                <a-menu-item key="3_0" @click="onClickCourseManagement()">
                    课程管理
                </a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="4">
                <template #icon><icon-find-replace /></template>
                <template #title>实验项目管理</template>
                <a-menu-item key="4_0" @click="onClickTaskManagement()">
                    实验项目管理
                </a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="5">
                <template #icon><icon-trophy /></template>
                <template #title>成绩管理</template>
                <a-menu-item key="5_0" @click="onClickGradeManagement()">
                    成绩管理
                </a-menu-item>
            </a-sub-menu>

            <a-menu-item key="6" @click="handleLogout">
                <template #icon><icon-left-circle /></template>
                退出登录
            </a-menu-item>
        </a-menu>
        <!-- student -->
        <a-menu v-if="this.identity == 1" mode="horizontal" :default-selected-keys="['1']">
            <a-sub-menu key="0">
                <template #icon><icon-notification /></template>
                <template #title>通知公告</template>
                <a-menu-item key="0_0" @click="this.$router.push({ name: 'Announcement' })">
                    通知公告
                </a-menu-item>
            </a-sub-menu>
        
            <a-sub-menu key="1">
                <template #icon><icon-user /></template>
                <template #title>基本信息</template>
                <a-menu-item key="1_0" @click="onClickBasicInfo()">
                    查看基本信息
                </a-menu-item>
                <a-menu-item key="1_1" @click="onClickEditBasicInfo()">
                    修改基本信息
                </a-menu-item>
                <a-menu-item key="1_1" @click="this.$router.push({ name: 'Security' })">
                    账号安全
                </a-menu-item>
            </a-sub-menu>
        
            <a-sub-menu key="2">
                <template #icon><icon-storage /></template>
                <template #title>课程资源</template>
                <a-menu-item key="2_0" @click="onClickCourseResources()">
                    课程资源
                </a-menu-item>
            </a-sub-menu>
        
            <a-sub-menu key="3">
                <template #icon><icon-folder /></template>
                <template #title>我的课程</template>
                <a-menu-item key="3_0" @click="onClickMyCourses()">
                    我的课程
                </a-menu-item>
            </a-sub-menu>
        
            <a-sub-menu key="4">
                <template #icon><icon-find-replace /></template>
                <template #title>我的实验项目</template>
                <a-menu-item key="4_0" @click="onClickMyTasks()">
                    我的实验项目
                </a-menu-item>
            </a-sub-menu>
        
            <a-sub-menu key="5">
                <template #icon><icon-trophy /></template>
                <template #title>我的成绩</template>
                <a-menu-item key="5_0" @click="onClickMyGrades()">
                    我的成绩
                </a-menu-item>
            </a-sub-menu>
        
            <a-menu-item key="6" @click="handleLogout">
                <template #icon><icon-left-circle /></template>
                退出登录
            </a-menu-item>
        </a-menu>
    </div>
    <el-container style="width: 100%; height: 92%; border: 1px solid #eee">
        <el-container>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// import Announcement from '../components/Announcement.vue'
// import PersonalInfo from '../components/PersonalInfo.vue'
// import EditPersonalInfo from '../components/EditPersonalInfo.vue'

export default {
    name: 'Home',
    components: {
        // HelloWorld
        // Announcement,
        // PersonalInfo,
        // EditPersonalInfo,
    },
    data() {
        return {
            minimized: false,
            mainIndex: 0,


            id: '',
            name: '',
            gender: '',
            email: '',
            password: '',
            isActivated: '',
            identity: '',

            studentHome: true,

        }
    },
    mounted() {
        // console.log("this.$URL: ", this.$URL)

        this.id = localStorage.getItem("userId")
        console.log("mounted获取到id了吗? id = " + this.id)


        fetch(this.$URL + "/user/get?id=" + this.id, {
            method: "GET",
            headers: { "satoken": localStorage.getItem("token") }
        }).then(res => res.json())
            .then((result) => {
                console.log(result)
                this.id = result.id
                this.name = result.name
                this.gender = result.gender
                this.email = result.email
                this.password = result.password
                this.identity = result.identity
                this.isActivated = result.isActivated

                if (!this.isActivated) {
                    this.$message.info("当前账号未激活，无法使用完整功能。请尽快激活账号。")
                }

                if (this.identity == 1) {
                    fetch(this.$URL + '/user/sign?userId=' + this.id, {
                        method: "PUT",
                        headers: { "satoken": localStorage.getItem("token") }
                    })
                        .then(res => res.json())
                        .then(res => {
                            console.log(res)
                            if (res.code == 200) {
                                this.$message.success("签到记录+1")
                            } else if (res.code == 403) {
                                this.$message.info("今日已签到")
                            } else {
                                this.$message.error("签到失败")
                            }
                        })
                }

                // localStorage.setItem("userId", this.id)
                // localStorage.setItem("password", this.password)
                localStorage.setItem("username", this.name)
                localStorage.setItem("gender", this.gender)
                localStorage.setItem("userIdentity", this.identity)
                localStorage.setItem("userEmail", this.email)
                localStorage.setItem("userActivated", this.isActivated)

                if (this.identity == 2 || this.identity == 3 || this.identity == 4) {
                    this.studentHome = false
                } else {
                    this.studentHome = true
                }

                this.$router.push({
                    name: 'Announcement'
                })

            })


    },
    methods: {

        myAvatarUrl() {
            // console.log("看看哪个先加载：this.id = " + this.id)
            let myAvatar = this.$URL + "/file/download/avatar/avatar_" + this.id + ".jpg"
            // console.log("avatarUrl: ", myAvatar)
            return myAvatar

        },
        onClickAnnouncement() {
            this.$router.push({
                name: 'Announcement',
                params: {
                    userInfo: this.userInfo
                }
            })
        },
        onClickBasicInfo() {
            this.$router.push({
                name: 'BasicInfo',
                params: {
                    userInfo: this.userInfo
                }
            })
        },
        onClickEditBasicInfo() {
            this.$router.push({
                name: 'EditBasicInfo',
                params: {
                    userInfo: this.userInfo
                }
            })
        },
        onClickCourseResources() {
            this.$router.push({
                name: 'CourseResources',
                params: {
                    userInfo: this.userInfo
                }
            })
        },
        onClickMyCourses() {
            this.$router.push({
                name: 'MyCourses',
                params: {
                    userInfo: this.userInfo
                }
            })
        },
        onClickCourseManagement() {
            if (this.identity == 0 || this.identity == 1) {
                this.$message.warning('无操作权限')
            } else {
                this.$router.push({
                    name: 'CourseManagement',
                    params: {
                        userInfo: this.userInfo
                    }
                })
            }
        },
        onClickMyTasks() {
            this.$router.push({
                name: 'MyTasks',
                params: {
                    userInfo: this.userInfo
                }
            })
        },
        onClickTaskManagement() {
            this.$router.push({
                name: 'TaskManagement',
                params: {
                    userInfo: this.userInfo
                }
            })

        },
        onClickMyGrades() {
            this.$router.push({
                name: 'MyGrades',
                params: {
                    userInfo: this.userInfo
                }
            })
        },
        onClickGradeManagement() {
            if (this.identity == 0 || this.identity == 1) {
                this.$message.warning('无操作权限')
            } else {
                this.$router.push({
                    name: 'GradeManagement',
                    params: {
                        userInfo: this.userInfo
                    }
                })
            }
        },

        handleLogout() {
            console.log("当前登录的id：", this.id)
            fetch(this.$URL + "/user/logout?id=" + this.id, {
                method: "GET",
                headers: { "satoken": localStorage.getItem("token") }
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    if (res.code == 200) {
                        this.$message.success("成功注销")
                        this.$router.replace({ name: 'Login' })
                    } else {
                        this.$message.error("注销失败")
                    }
                })
        }
    }
}
</script>

<style>
html,
body,
#app {
    padding: 0;
    margin: 0;
    height: 100%
}

.el-container {
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
}

.fade-enter {
    opacity: 0;
}

.fade-leave {
    opacity: 1;
}

.fade-enter-active {
    transition: opacity .5s;
}

.fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
}

.menu-demo {
    box-sizing: border-box;
    width: 100%;
    height: 600px;
    background-color: var(--color-neutral-2);
    font-weight: bold;
}
</style>