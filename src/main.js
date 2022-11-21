const { createApp } = require('vue');
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
const data = [
  {
    Title: '01',
    Description: 'Abiola Esther',
    Deadline: 'Computer Science',
    Priority: 'Female',
  },
  {
    Title: '01',
    Description: 'Abiola Esther',
    Deadline: 'Computer Science',
    Priority: 'Female',
  },
];
const fields = ['Title', 'Description', 'Deadline', 'Priority'];
createApp(App).mount('#app');
