<template>
  <div>
    <div class="text">首页</div>
    <Button>按钮</Button>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "vant"
import { getDataApi, getData2Api } from "../api";

async function getData() {
  let data = await getDataApi()
  console.log(data)
}
async function getData2() {
  let data = await getData2Api()
  console.log(data)
}
getData()
getData2()
</script>

<style  scoped>
</style>