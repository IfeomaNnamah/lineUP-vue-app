<template>
  <!-- Create Task Modal -->
  <div class="modal fade" id="createTaskModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <p class="modal-title p-color">Create a Task</p>
                    <div style="margin-top: 12px">
                        <img
                        id="closeModal"
                        src="@/assets/images/close.png"
                        class="close"
                        data-bs-dismiss="modal"
                        aria-label="Close"    
                        alt=""
                        >
                    </div>
                </div>

                <div class="modal-body">
                    <div class="d-flex justify-content-between mb-3">
                        <select name="" id="" class="form-control" v-model="this.group_id">
                            <option value="" selected>Select a Group</option>
                            <option v-for="(group, index) in groups" :key="index" :value="index" title="Select a Group">{{group}}</option>
                        </select>
                        <p class="mx-3 mt-2 p-color">or</p>
                        <button class="btn modal-btn" title="Create a new group for the task">New Group</button>
                    </div>
                    <input type="text" class="form-control mb-3" placeholder="Title" v-model="this.title">
                    <textarea type="text" class="form-control mb-3" placeholder="Description" v-model="this.description" rows="5"></textarea>
                    <p class="mb-2" for="">Select a Priority</p>
                    <div class="d-flex justify-content-between" style="width: 250px">
                        <button @click="this.priority = 'Low'" class="btn select-btn" :class="this.priority == 'Low' ? ' active' : '' " >Low</button>
                        <button @click="this.priority = 'Mid'" class="btn select-btn" :class="this.priority == 'Mid' ? ' active' : '' ">Medium</button>
                        <button @click="this.priority = 'High'" class="btn select-btn" :class="this.priority == 'High' ? ' active' : '' ">High</button>
                    </div>
                    <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit ac lacus, elementum phasellus quis in in. Lectus in ut varius ut egestas amet adipiscing sed pellentesque -->
                    <div class="d-flex justify-content-center mt-5"><button @click="createTask" class="btn modal-btn"><font-awesome-icon icon="fa-solid fa-plus" class="pr-3"/>Create</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            groups: [
                'Work', 'School', 'Chores', 'Shopping List'
            ],
            formData: [],
            group_id: null,
            title: '',
            description: '',
            priority: '',
            current_date: new Date().toJSON().slice(0, 10)
        }
    },
    methods: {
        createTask() {
            this.formData.push({
                group: this.group_id,
                title: this.title,
                description: this.description,
                priority: this.priority
            })
            console.log(this.formData)
            // this.$store.commit('setTasks', [])
        },
        removeTask(task){
            this.formData.slice(task, 1)
        }
    }
}
</script>

<style scoped>
.modal .modal-content {
    border-radius: 12px;
}
.modal .modal-title {
    font-size: 24px;
}

.modal .modal-header {
    padding: 24px 32px 12px 32px;
    border: none;
}

.modal .modal-body {
    padding: 8px 32px 32px 32px;
}

input, select {
    border-radius: 8px;
    height: 50px
}

textarea {
    border-radius: 8px;
}

.modal .modal-body p {
    font-size: 18px;
}

.modal .modal-body .select-btn {
    background: rgb(245, 245, 245);
    border-radius: 8px;
    color: orangered;
    padding: 12px 16px
}

.modal .modal-body .select-btn:hover, .modal .modal-body .select-btn.active {
    background: orangered;
    border-radius: 8px;
    color: white;
    padding: 12px 16px;
    transition: .6s ease;
}

.modal-btn {
    background-color: orangered;
    color: white;
    padding: 12px 24px !important;
    font-weight: 600;
    border-radius: 8px !important;
    height: 50px
}
</style>