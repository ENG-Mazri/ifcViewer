<template>
    <div>
<!--  
        <v-expansion-panels>
            <v-expansion-panel
                title="Properties"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
            >
            </v-expansion-panel>
        </v-expansion-panels> -->
        <!-- <n-tree
            block-line
            :data="list"
            :default-expand-all= "true"
            selectable
        /> -->
        <v-toolbar class="toolbar" rounded="true" density="compact" :elevation="3" color="rgb(255, 255, 255)">
            <v-btn icon @click="toggleActive" :class="{'v-btn--active': isActive}">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <tools-TestTool />
            <v-btn icon @click="toggleActive" :class="{'v-btn--active': isActive}">
                <v-icon>mdi-nature-people</v-icon>
            </v-btn>
            <v-btn icon @click="toggleActive" :class="{'v-btn--active': isActive}">
                <v-icon>mdi-home-map-marker</v-icon>
            </v-btn>
            <v-btn icon @click="toggleActive" :class="{'v-btn--active': isActive}">
                <v-icon>mdi-cube</v-icon>
            </v-btn>
            <v-btn icon @click="toggleActive" :class="{'v-btn--active': isActive}">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { repeat } from 'seemly'
import { TreeOption } from 'naive-ui'

const list = [{
    children:[
        {
            children:[{key:4, label:'ghjkl;'}],
            key:2,
            label:'klo'},
        {
      
            key:3,
            label:'kok'}
        ],
    key:1,
    label:'ko'
}]

export default defineComponent({
  setup () {
    let isActive = ref(false);
    const toggleActive = ()=>{
        isActive.value = !isActive.value;
    } 
    return {
      defaultExpandedKeys: ref(['40', '41']),
      list,
      isActive, toggleActive
    }
  }
})
// export default defineComponent({
//     setup () {
//         const items = [1,2,4,4,5,8,90];
        

//         return {items}
//     }
// })

</script>

<style scoped>
.toolbar{
    position: absolute;
    bottom: 15px;
    right: 10px;
}
.v-btn--active i{
    color:cornflowerblue
}
</style>
