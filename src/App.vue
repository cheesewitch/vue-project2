<template>
  <div class="card">
    <div class="card-header text-white" style="background-color: blue">
      <div class="row justify-content-end">
        <div class="col-4 d-flex justify-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            ></path>
          </svg>
          FRAMWORKS
        </div>
        <div class="col-4 d-flex justify-content-end">
          <button type="button" class="btn btn-primary btn-sm" id="add">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              /></svg
            >ADD
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="app">
    <HelloWorld :fields="fields" :data="data"></Table>
  </div>
  <detail></detail>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import detail from './components/detail.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const data = [
      {
        Title: '01',
        Description: 'Description 1',
        Deadline: 'DDL 1',
        Priority: 'Priority 1',
      },
      {
        Title: '02',
        Description: 'Description 2',
        Deadline: 'DDL 2',
        Priority: 'Priority 2',
      },
    ];
    const fields = [
      'Title',
      'Description',
      'Deadline',
      'Priority',
    ];
    return { data, fields };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
