<template>
    <div class="test-content">
        <div class="left-require">
            <div>
                <h2>请求接口http://quan.suning.com/getSysTime.do，将返回的结果显示在右侧空白区域（返回结果为对象；有可能会请求失败，多试几次）</h2>
                <h2>请求失败或报错时需要在右侧空白区域显示"请求失败"</h2>
                <h2 style="color: red">确认完成所有测试后需使用webpack将代码打包到文件夹dist</h2>
            </div>
        </div>

        <div class="right-content">
            <button class="request-button" @click="send">点击发送请求</button>
            <div>
                {{ res }}
                <!--代码区域-->
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

//请求接口http://quan.suning.com/getSysTime.do，将返回的结果显示在右侧空白区域（返回结果为对象；有可能会请求失败，多试几次）
//请求失败或报错时需要在右侧空白区域显示"请求失败"
export default {
    name: "test_5",
    data() {
        return {
            res: ''
        }
    },
    methods: {
        async send() {
            const { data, status } = await Axios.get('http://quan.suning.com/getSysTime.do').catch(err => {
                this.res = "请求错误"
            })
            if (status == 200) {
                this.res = data
            } else {
                this.res = "请求错误"
            }


        }
    }
}
</script>

<style scoped>
</style>
