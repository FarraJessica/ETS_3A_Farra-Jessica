<template>
  <div class="overlay">
    <b-button v-b-modal.add-modal-prevent-closing @click.prevent="toggleModal" :items="msg">
      Add New Language
    </b-button>
    <b-modal
      id="add-modal-prevent-closing"
      ref="modal"
      title="Add Language"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Language Name"
          label-for="name-input"
          invalid-feedback="Language name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="languageName"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
  export default {
    data() {
      return {
        languageName: '',
        nameState: null,
        isVisibility: false,
        result: []
      }
    },
    methods: {
      toggleModal() {
        this.isVisibility = !this.isVisibility;
      },
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        axios.post('http://localhost:3000/language', { name: this.languageName })
        .then((response) => {
          console.log(response.data)
        })
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
  }
</script>