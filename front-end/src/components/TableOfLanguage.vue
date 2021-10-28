<template>
  <div>
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
        // Note 'isActive' is left out and will not appear in the rendered table
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
          }
        ],
         items: []
      }
    }
  }
</script>