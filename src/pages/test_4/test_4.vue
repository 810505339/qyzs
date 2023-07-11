<template>
    <div class="test-content test4">
        <div class="left-require">
            <div>
                <img class="" src="../../statics/img/table-list.jpg" alt="">
                <h2>在右侧空白区域完成如图所示的表格,表格数据见参数table_data，不得使用其他插件或组件（包括elementUI）</h2>
                <h2>表格数据查询，根据查询条件筛选数组中的值，实现搜索功能</h2>
                <h2>性别列下拉筛选功能实现</h2>
                <h2>入学时间和毕业时间排序功能实现</h2>
                <h2 style="color: red">确认完成所有测试后需使用webpack将代码打包到文件夹dist</h2>
            </div>
        </div>

        <div class="right-content">
            <!--代码区域-->

            <div class="flex">
                <div>
                    <label for="name">姓名:</label>
                    <input name="name" placeholder="请输入姓名模糊查询" v-model="name" class="input" />
                </div>
                <div>
                    <label for="phone">电话号码:</label>
                    <input name="phone" placeholder="请输入电话号码查询" v-model="phone" class="input" />
                </div>
                <div>
                    <button @click="clear">清除</button>
                    <button @click="select">查询</button>
                </div>
            </div>

            <table>
                <tr>
                    <th>姓名</th>
                    <th>电话号码</th>
                    <th class="sort" @click="selectSex()">
                        <div :class="[{ 'sex-list': !show }]">
                            性别
                            <i class="el-icon-arrow-down sex"></i>
                        </div>
                        <select v-model="sex" :class="[{ 'sex-list': show }]">
                            <option value="">--</option>
                            <option value="male">男</option>
                            <option value="female">女</option>
                        </select>
                    </th>
                    <th>身份证号</th>
                    <th class="sort">
                        入学时间

                        <span>
                            <i class="el-icon-arrow-up" @click="up('start_date')"></i>
                            <i class="el-icon-arrow-down" @click="down('start_date')"></i>
                        </span>

                    </th>
                    <th class="sort">
                        毕业时间
                        <span>
                            <i class="el-icon-arrow-up" @click="up('end_date')"></i>
                            <i class="el-icon-arrow-down" @click="down('end_date')"></i>
                        </span>
                    </th>
                </tr>
                <tr v-for=" item  in  table_data " :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.sex === "male" ? "男" : "女" }}</td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.start_date }}</td>
                    <td>{{ item.end_date }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
//表格数据查询，根据查询条件筛选数组中的值，实现搜索功能
//下拉筛选功能实现
//排序功能实现


const table_data = [
    { name: '张三', phone: '15222222222', sex: 'male', id: '510000000000000000', start_date: '2018-12-14 09:00', end_date: '2022-12-14 09:00' },
    { name: '李四', phone: '15221232222', sex: 'male', id: '510000000000000001', start_date: '2018-12-14 15:00', end_date: '2022-12-14 16:00' },
    { name: '韩梅梅', phone: '15222224562', sex: 'female', id: '51000000004500000', start_date: '2020-12-14 09:00', end_date: '2024-12-14 09:00' },
    { name: '李雷', phone: '15222662222', sex: 'male', id: '510000067000000000', start_date: '2017-12-14 09:00', end_date: '2020-12-14 09:00' },
    { name: '王雪', phone: '17822222222', sex: 'female', id: '515400004500000000', start_date: '2016-12-14 09:00', end_date: '2019-12-14 09:00' }
]

export default {
    name: "test_4",
    data() {
        return {
            //表格数据
            name: '',
            phone: '',
            table_data: table_data,
            sex: '',
            show: true
        }
    },
    methods: {
        select() {
            this.table_data = table_data.filter((t) => {
                if (this.phone == '') {
                    return t.name.includes(this.name)
                }
                if (this.name == '') {
                    return t.phone === this.phone
                }

                return t.phone === this.phone && t.name.includes(this.name)

            })

        },
        clear() {
            this.name = ''
            this.phone = ''
            this.sex = ''

            this.table_data = table_data
            this.show = true
        },
        up(timeType) {
            //升序
            this.table_data = this.table_data.sort((a, b) => {
                const timeA = Date.parse(new Date(a[timeType]).toString())
                const timeB = Date.parse(new Date(b[timeType]).toString())
                return timeA > timeB ? -1 : timeA < timeB ? 1 : 0
            })
        },
        down(timeType) {
            this.table_data = this.table_data.sort((a, b) => {
                const timeA = Date.parse(new Date(a[timeType]).toString())
                const timeB = Date.parse(new Date(b[timeType]).toString())
                console.log(timeB);
                return timeA < timeB ? -1 : timeA > timeB ? 1 : 0
            })
        },
        selectSex() {
            this.show = false
        }
    },
    watch: {
        sex(newValue) {

            this.show = !this.show
            if (newValue == '') {
                this.table_data = this.table
                return
            }
            this.table_data = this.table.filter((d) => {
                return d.sex == newValue
            })

        }
    },
    computed: {
        table() {
            return table_data.filter((t) => {
                if (this.phone == '') {
                    return t.name.includes(this.name)
                }
                if (this.name == '') {
                    return t.phone === this.phone
                }

                return t.phone === this.phone && t.name.includes(this.name)

            })
        }
    }

}
</script>

<style scoped lang="less">
.flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.sex-list {
    display: none;
}

.sort .sex {
    top: 50%;
    transform: translate(0, -50%);
}

.el-icon-arrow-up {
    top: 7px;
}

td {
    text-align: center;
}

.el-icon-arrow-down {
    bottom: 7px;
}

.input {
    border-radius: 5px;
    width: 240px;
    height: 26px;
}

label {
    font-size: 14px;

}

button {

    outline: none;
    background-color: transparent;
    border: 1px #c89f67 solid;
    border-radius: 5px;
    padding: 4px 12px;
}

i {
    position: absolute;
}

.sort {
    width: 200px;
    text-align: center;
    position: relative;
}

th {
    width: 100px;
    background: #c89f67;
    border: none;
    height: 32px;

}
</style>
