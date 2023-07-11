<template>
    <div class="test-content">

        <div class="left-require">
            <div>
                <img src="../../statics/img/form-list.jpg" alt="">
                <h2>1、在右侧空白区域按照图片所示完成表单(可使用elementui)，并添加表单验证，点击保存时如果验证通过，将表单数据保存到vuex中</h2>
                <h2>2、在右侧空白区域以键值对的形似显示保存到vuex的数据</h2>
                <h2>3、给首页的 "跳转表单按钮" 添加点击事件，点击后可跳转到本页面，并读取上一次验证通过并保存到的vuex中的数据，显示到表单</h2>
                <h2>4、给身份证号码、电话号码添加正则验证，毕业时间需比入学时间晚3年</h2>
                <h2 style="color: red">确认完成所有测试后需使用webpack将代码打包到文件夹dist</h2>
            </div>
        </div>

        <div class="right-content">
            <!--代码区域-->

            <el-form ref="form" :model="form" label-width="100px" :rules="rules">
                <el-form-item label="学生名称" prop="name">
                    <el-col :span="10">
                        <el-input v-model="form.name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="身份证号码" prop="idCard">
                    <el-col :span="10">
                        <el-input v-model="form.idCard"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="电话号码" prop="phone">
                    <el-col :span="10">
                        <el-input v-model="form.phone"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-col :span="10">
                        <el-radio-group v-model="form.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-col>

                </el-form-item>
                <el-form-item label="民族" prop="group">
                    <el-col :span="10">
                        <el-select v-model="form.group" placeholder="民族">
                            <el-option label="汉族" value="han"></el-option>

                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="入学时间" prop="date1">
                    <el-col :span="10">
                        <el-date-picker type="date" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期"
                            v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="毕业时间" prop="date2">
                    <el-col :span="10">
                        <el-date-picker type="date" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期"
                            v-model="form.date2" style="width: 100%;"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="所选课程" prop="lesson">
                    <el-checkbox-group v-model="form.lesson">
                        <el-checkbox label="语文" name="语文"></el-checkbox>
                        <el-checkbox label="数学" name="数学"></el-checkbox>
                        <el-checkbox label="英语" name="英语"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="备注" prop="desc">
                    <el-col :span="10">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button @click="reset">清空</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
//测试一：
//1、按照图片完成表单，并添加表单验证，点击保存时如果验证通过，将表单数据保存到vuex中
//2、在右侧空白区域以键值对的形似显示保存到vuex的数据
//3、给首页的 "跳转表单按钮" 添加点击事件，点击后可跳转到本页面，并读取vuex中的数据，显示到表单




export default {
    name: "test_2",
    data() {
        const validatePhone = (rule, value, callback) => {
            const regExp = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
            if (!regExp.test(value)) {
                callback(new Error('请输入正确的手机号'))
            } else {
                callback()
            }
        }

        const validateIdCard = (rule, value, callback) => {
            const regExp = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
            if (!regExp.test(value)) {
                callback(new Error('请输入正确的身份证'))
            } else {
                callback()
            }
        }

        const validateDate2 = (rule, value, callback) => {
            console.log(Date.parse(new Date(this.form.date1).toString()))


            const d = new Date(this.form.date1)
            const year = d.getFullYear() + 3
            d.setFullYear(year)
            const time = Date.parse(new Date(d).toString()) //三年后的时间戳
            const time2 = Date.parse(new Date(this.form.date2).toString())  //所选的时间戳
            if (this.form.date1 == '') {
                callback(new Error('请先选择入学时间'))
            }
            if (time2 - time > 0) {
                callback()
            } else {
                callback(new Error('毕业时间需比入学时间晚3年'))

            }
        }

        return {
            form: {
                name: '',
                idCard: '',
                phone: '',
                sex: '',
                group: '',
                date1: '',
                date2: '',
                lesson: [],
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入学生名称', trigger: 'blur' },
                ],
                lesson: [
                    { required: true, message: '请选择课程', trigger: 'blur' },
                ],
                sex: [
                    { required: true, message: '请选择性别', trigger: 'blur' },
                ],
                phone: [
                    { required: true, message: '请输入电话号码', trigger: 'blur' },
                    {
                        validator: validatePhone,
                        message: '请输入正确的手机号',
                        trigger: 'change',
                    },
                    { validator: validatePhone, message: '请输入正确的手机号', trigger: 'blur' },
                ],
                idCard: [
                    { required: true, message: '请输入身份证号码', trigger: 'blur' },
                    { validator: validateIdCard, message: '请输入正确的身份证号码', trigger: 'blur' },
                    { validator: validateIdCard, message: '请输入正确的身份证号码', trigger: 'change' },
                ],
                group: [
                    { required: true, message: '请选择民族', trigger: 'blur' },
                ],
                date1: [
                    { required: true, message: '请选择毕业时间', trigger: 'blur' },
                ],
                date2: [
                    { required: true, message: '请选择毕业时间', trigger: 'blur' },
                    { validator: validateDate2, trigger: 'change', message: '毕业时间需比入学时间晚3年' },

                ]

            }

        }
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    //todo 存入vuex
                    console.log(this.form)
                    console.log(this.$store)
                    this.$store.commit('saveForm', this.form)
                    this.$message({

                        message: '添加成功',
                        type: 'success'
                    });
                    this.$refs.form.resetFields();
                } else {
                    console.log('error submit!!');
                    return false;
                }

            })
        },
        reset() {
            this.$refs.form.resetFields();
        }
    },
    mounted() {
        console.log(this.$route.query.user)
        if (this.$route.query.user == 1) {
            console.log(this.$store.state.form)
            this.$store.commit('getForm')
            this.form = this.$store.state.form
        }

    }
}
</script>

<style scoped>
.right-content {
    margin: 50px;
}
</style>
