<template>
  <div> 
    <h1>d i c i o n á r i o</h1>
    <div class="d-flex justify-content-center">
      <b-img src="language.jpg"></b-img>
    </div>
    <div class="d-flex justify-content-center" id="search-bar">
      <b-form-input v-model="text" placeholder="Search language"></b-form-input>
      <b-button variant="dark" @click="search()">Search</b-button>
    </div>
    <TableLanguage :msg="filter"/>
    <AddLanguageModal :msg="text"/>
    <br>
    <UpdateLanguageModal :msg="text"/>
    <br>
    <DeleteLanguageModal :msg="text"/>
  </div>
</template>

<script>
import axios from "axios";
import TableOfLanguage from "./TableOfLanguage.vue"
import AddLanguage from "./AddLanguage.vue"
import UpdateLanguage from "./UpdateLanguage.vue"
import DeleteLanguage from "./DeleteLanguage.vue"

export default {
  name: 'Language',
  components: {
    TableLanguage: TableOfLanguage,
    AddLanguageModal: AddLanguage,
    UpdateLanguageModal: UpdateLanguage,
    DeleteLanguageModal: DeleteLanguage
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
  text-align: center;
}
</style>
