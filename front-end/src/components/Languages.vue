<template>
  <div> 
    <h1>d i c i o n á r i o</h1>
    <div>
      <b-img src="./assets/language.jpg"></b-img>
    </div>
    <div class="d-flex justify-content-center" id="search-bar">
      <b-form-input v-model="text" placeholder="Search language"></b-form-input>
      <b-button variant="dark" @click="search()">Search</b-button>
    </div>
    <TableLanguage :msg="filter"/>
    <div>
    <b-button v-b-toggle.sidebar-no-header style="margin: auto" variant="dark">Menu</b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
        <div class="p-3">
          <h4 id="sidebar-no-header-title">d i c i o n á r i o' s m e n u </h4>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item href="" active>Add New Language</b-nav-item>
              <b-nav-item href="#link-1">Edit List of Languages</b-nav-item>
              <b-nav-item href="#link-2">Delet Language</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block>Close</b-button>
        </div>
    </b-sidebar>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import TableOfLanguage from "./TableOfLanguage.vue"

export default {
  name: 'Language',
  components: {
    TableLanguage: TableOfLanguage,
  },
  created() {
    axios.get('http://localhost:3000/language')
        .then((response) => {
          this.result = response.data,
          this.filter = response.data
        })
  },
  data() {
    return {
      result: [],
      filter: [],
      text: ""
    }
  },
  methods: {
    search() {
      this.filter = this.result.filter((value) => {
        return value.name.includes(this.text)
      })
      console.log(this.filter)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: Helvetica;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
b-form-input{
  text-align: center;
  margin: 20px;
}
#search-bar {
  max-width: 50%;
}
</style>
