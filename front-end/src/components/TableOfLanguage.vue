<template>
  <div id="table" class="d-flex justify-content-center">
    <b-table striped hover :items="msg" :fields="fields"></b-table>
  </div>
</template>

<script>
import axios from "axios";
  export default {
    name: "Language",
    props: {
        msg: []
    },
    created() {
    axios.get('http://localhost:3000/language')
        .then((response) => {
          this.items = response.data
        })
    },
    data() {
      return {
        fields: [
          {
            key: 'language_id',
            label: 'Language Id',
            sortable: true
          },
          {
            key: 'name',
            label: 'Language Name',
            sortable: true,
          },
        ],
         items: []
      }
    }
  }
</script>
<style scoped>
#table {
  max-width: 80%;
}
</style>