<template>
  <div>  

    <SideBar />    
    <div class="main-content">
      <TopNav /> 
      <div class="d-flex justify-content-between mx-5" style="flex-wrap: wrap">
        <div class="top-card card-1 d-flex justify-content-center align-items-center">
          <div>
            <p class="top-card-title d-flex justify-content-center">All Tasks</p>
            <div class="d-flex justify-content-center align-items-center" style="color: orangered">
              <font-awesome-icon icon="fa-solid fa-bars" class="pr-3" style="font-size: 25px" /><h1>12</h1>
            </div>
          </div>
        </div>
        <div class="top-card card-2 d-flex justify-content-center align-items-center">
          <div>
            <p class="top-card-title d-flex justify-content-center">Upcoming</p>
            <div class="d-flex justify-content-center align-items-center" style="color: orangered">
              <font-awesome-icon icon="fa-solid fa-hourglass-start" class="pr-3" style="font-size: 25px" /><h1>3</h1>
            </div>
          </div>
        </div>
        <div class="top-card card-3 d-flex justify-content-center align-items-center">
          <div>
            <p class="top-card-title d-flex justify-content-center">Pending</p>
            <div class="d-flex justify-content-center align-items-center" style="color: orangered">
              <font-awesome-icon icon="fa-solid fa-spinner" class="pr-3" style="font-size: 25px" /><h1>5</h1>
            </div>
          </div>
        </div>
        <div class="top-card card-4 d-flex justify-content-center align-items-center">
          <div>
            <p class="top-card-title d-flex justify-content-center">Completed</p>
            <div class="d-flex justify-content-center align-items-center" style="color: orangered">
              <font-awesome-icon icon="fa-solid fa-circle-check" class="pr-3" style="font-size: 25px" /><h1>8</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-between mx-5 mt-4" style="flex-wrap: wrap">
        <div class="bottom-card left my-2">
          <div class="bottom-card-title">Upcoming Task</div>
          
          <div class="bottom-card-body mx-4 px-2 py-3" v-for="(task, index) in tasks" :key="index">
            <div class="d-flex justify-content-between">
              <h5 style="color: orangered">{{task.title}}</h5>
              <p class="mt-1" style="color: #8A8A8A">{{task.current_date}}</p>
            </div>
            <div style="color: #8A8A8A">
              {{task.description}}
            </div>
            <div class="mt-3 d-flex justify-content-between align-items-center">
              <div>
                <span class="badge bg-primary mr-2">
                  {{this.groups[task.group]}}
                </span>
                <span class="badge bg-secondary">
                  {{task.priority}}-Priority
                </span>
              </div>

              <button class="btn custom-btn">View Task</button>
            </div>
          </div>
        </div>
        <div class="bottom-card right my-2">
          <div class="bottom-card-title">Recently Completed</div>
        </div>
      </div>
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
          groups: [
              'Work', 'School', 'Chores', 'Shopping List'
          ],
          tasks: []
        }
    },
    components: { SideBar, TopNav },
    mounted() {
      this.tasks = this.$store.state.tasks
    }
}
</script>

<style scoped>
.top-card {
  border-radius: 16px;
  background: white;
  height: 150px;
  width: 23%;
  border-left: 2px solid orangered;
  border-right: 2px solid orangered;
}

.top-card .top-card-title {
  color: #B3B3B3;
  font-size: 20px;
}

.bottom-card {
  border-radius: 16px;
  background: white;
  height: 450px;
  width: 49%;
}

@media only screen and (max-width:1200px) {
  .bottom-card.left, .bottom-card.right {
    flex: 100%
  }
}

@media only screen and (max-width:1090px) {
  .top-card.card-1, .top-card.card-2, .top-card.card-3, .top-card.card-4 {
    flex: 45%;
    margin-bottom: 16px
  }

  .top-card.card-1, .top-card.card-3{
    margin-right: 16px
  }
}

@media only screen and (max-width:500px) {
  .top-card.card-1, .top-card.card-2, .top-card.card-3, .top-card.card-4 {
    flex: 100%;
    margin-bottom: 16px
  }

  .top-card.card-1, .top-card.card-3{
    margin-right: 16px
  }

  .top-card.card-1, .top-card.card-3{
    margin-right: 0
  }
}

.bottom-card .bottom-card-title {
  display: flex;
  justify-content: center;
  padding: 24px 12px;
  font-size: 22px;
  border-bottom: 1px solid rgb(224, 224, 224);
  color: orangered;
  margin: 0 32px;
  font-weight: 600;
}

.bottom-card .bottom-card-body {
  border-bottom: 1px solid rgb(224, 224, 224);
}

.badge {
  color: white;
  border-radius: 40px !important;
  padding: 12px 24px !important;
  font-size: 16px !important;
  font-weight: 500 !important
}

.custom-btn {
  font-weight: 500 !important;
  border-radius: 8px !important;
  background-color: orangered;
  color: white;
  padding: 12px 24px !important;
}
</style>