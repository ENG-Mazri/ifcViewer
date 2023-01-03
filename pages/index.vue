<template>
    <div>
        <Viewer/>
        <Comp/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:"index-comp",
    setup () {
        

        return {}
    }
})
</script>

<style>

/* html, body { height: 100%; box-sizing: content-box; } */
* {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
body {
    height: 100%;
    background-color: #57FFA6;
    color: #221F51;
    font-size: 62.5%;
    font-family: arial, sans-serif;
}
</style>