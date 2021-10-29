<template>
  <div class="overlay">
    <b-button v-b-modal.delete-modal-prevent-closing @click.prevent="toggleModal" :items="msg">
      Delete Language
    </b-button>
    <b-modal
      id="delete-modal-prevent-closing"
      ref="modal"
      title="Delete Language"
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
        axios.delete('http://localhost:3000/language/' + this.languageName)
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