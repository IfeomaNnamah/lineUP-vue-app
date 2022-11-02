import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      tasks: []
    };
  },
  getters: {
    tasks: (state) => state.tasks,
  },
  plugins: [
    createPersistedState()
  ],
  mutations :{
    setTasks(state, task){
      state.tasks = task;
    },
  }
});

export default store;