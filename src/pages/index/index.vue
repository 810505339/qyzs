<template>
    <div id="main_manage" style="height: 100%;width: 100%">

        <div class="navigate">
            <img src="../../statics/img/logo.png" class="logo" />
            <router-link tag="div" to="/test_1">
                <span>测试一</span>
            </router-link>
            <router-link tag="div" to="/test_2">测试二</router-link>
            <div class="tag">
                其他
                <i class="el-icon-arrow-up icon" />
                <div class="list">
                    <router-link tag="div" to="/test_3">测试三</router-link>
                    <router-link tag="div" to="/test_4">测试四</router-link>
                    <router-link tag="div" to="/test_5">测试五</router-link>
                </div>
            </div>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
//按照如图所示的样式和顺序，完善路由配置

export default {
    components: {

    },
    data() {
        return {

        };
    },
    mounted() {

    },
    computed: {

    },
    watch: {

    },
    methods: {

    }
};
</script>

<style scoped lang="less">
.navigate {
    height: 64px;
    background: #2d313a;
    color: white;
    font-weight: 500;
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 20px;
    position: relative;

    >div {
        width: 160px;
        text-align: center;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0px;
    }

    .tag {


        .list {
            position: absolute;
            top: 64px;
            z-index: 10;
            background: #c89f67;
            width: 160px;

            >div {
                padding: 20px;
            }

            display: none;

            :hover {
                background: #f0c181;
            }
        }

        .icon {
            font-weight: bold;
            margin-left: 20px;
        }


    }

    .tag:hover.tag {
        background: #c89f67;
    }

    .tag:hover .list {
        display: block;
    }



    .tag:hover .icon {
        display: block;
    }

    .logo {
        scale: 0.4;
        margin-right: 100px;
    }
}
</style>
