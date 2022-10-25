<template>
  <div class="sidebar">
    <!-- <img class="logo-img" src="@/assets/images/lineup-logo.png" alt=""> -->
    <h2 class="mt-5"><font-awesome-icon icon="fa-solid fa-circle" class="pr-1 pb-1" style="height: 10px" />lineUP</h2>

    <ul class="nav-list">
        <li class="list-item active"><font-awesome-icon icon="fa-solid fa-chart-simple" class="pr-3" /> Dashboard</li>
        <li class="list-item"><font-awesome-icon icon="fa-solid fa-hourglass-start" class="pr-3"/> Upcoming</li>
        <li class="list-item"><font-awesome-icon icon="fa-solid fa-bars" class="pr-3" />All Tasks</li>

        <div style="bottom: 0; position: fixed; margin-bottom: 50px;  width: 248px;">
            <li class="list-item mb-4"><font-awesome-icon icon="fa-solid fa-trash" class="pr-3" />Trash</li>
            <button class="btn custom-btn"><font-awesome-icon icon="fa-solid fa-plus" class="pr-3" />Create a Task</button>
        </div>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
h2 {
    font-family: 'Raleway', sans-serif !important;
    font-weight: 600;
    margin-left: 24px;
    color: rgb(56, 56, 56) !important;
}

.logo-img {
    width: 70px;
    height: 70px;
    margin: 32px 24px
}

ul {
    list-style: none;
    padding: 0;
    cursor: pointer;
}

.nav-list {
    margin-top: 50px
}

ul .list-item {
    padding: 16px 24px;
    font-weight: 600;
    color: rgb(192, 192, 192);
    font-size: 18px;
}

ul .list-item.active, ul .list-item:hover {    
    color: orangered;
    border-right: 3px solid orangered;
}

.custom-btn {
    background-color: orangered;
    color: white;
    margin: 0 24px;
    padding: 12px 24px !important;
    width: calc(100% - 45px);
    font-weight: 600;
}
</style>