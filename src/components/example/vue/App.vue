<template>
    <div class="bg">

        <!--img标签必须按正确的层级目录引用不然webpack不会将图片正确编译,-->
        <!--如果用 image/logo.png将不无法生成图片，-->
        <!--控制台并不会有错误信息，但是图片文件无法成成-->
        <div class="bg1">
            <img src="../../../image/logo.png"/>
        </div>
        <div class="bg2">
            {{msg}}
        </div>

    </div>
</template>

<script>
    export default {
        name: 'cq-app',
        data () {
            return {
                msg: '组件开发基本事例!'
            }
        }
    }
</script>

