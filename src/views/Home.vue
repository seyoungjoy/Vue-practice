<template>
    <div>
        <h1>Welcome to {{ title }}</h1>
        <input type="text" v-model="input1"/>
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>

        <select class="form-control" v-model="region" @change="changeRegion">
            <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
        </select>

        <table class="table table-bordered" v-if="tableShow">
            <tr :key="i" v-for="(d,i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>
    </div>

</template>

<script>
export default{
    data(){
        return{
            title: "홈",
            title2: "홈2",
            input1:"abc",
            options:[
                {v:"S", t:"Seoul"},
                {v:"J", t:"Jeju"},
                {v:"B", t:"Busan"},
            ],
            region:"J",
            tableShow :false,
        }
    },
    watch:{
        input1(){
            console.log(this.input1);
        }

    },
    //항상 그 데이터를 감시하고있다가 변화가 있을 때 작동하게 하는것. 특정 데이터르르 계속 관찰, 변경시 그걸 캐치해서 사용.
    methods:{
        getData(){
            alert(this.input1);
        },
        setData(){
            this.input1 = "12345";
        },
        changeRegion(){
            alert(this.region);
        }
    },
    beforeCreate() {
        console.log("beforeCreate")

    },
    created(){
        console.log("created")

    },
    beforeMount() {
        console.log("beforeMount")

    },
    mounted(){
        console.log("mounted")

    },
    beforeUpdate() {
        console.log("beforeUpdate")

    },
    updated() {
        console.log("updated")

    },
    beforeDestroy() {
        console.log("beforeDestroy")

    },
    destroyed() {
        console.log("destroyed")

    }


}
</script>