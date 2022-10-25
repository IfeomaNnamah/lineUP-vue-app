<template>
  <div>
    <TopNav />

    <SideBar />    
    <div class="main-content">

    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue"
import TopNav from "@/components/TopNav.vue"

export default {
    name: "LUDashboard",
    data () {
        return {

        }
    },
    components: { SideBar, TopNav }
}
</script>

<style>

</style>