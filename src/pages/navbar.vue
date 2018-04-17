<template>
  <div>
    <h1>navbar</h1>
    <div class="navbar" v-for="(item,index) in datas" :key="index">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu :index=item.index>
          <template slot="title">
            <span>{{ item.label }}</span>
          </template>
          <el-submenu :index=subitem.index v-for="(subitem,index) in item.children" :key="index">
            <template slot="title">{{ subitem.label }}</template>
            <el-menu-item :index=ssubitem.index v-for="(ssubitem,index) in subitem.children" :key="index">{{ ssubitem.label }}</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>

  import nav from '../data/nav'

  export default {
    data() {
      return {
        datas: nav
      }
    },
    created() {
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>
