<template>
  <div class="overlay">
    <b-button variant="primary" v-b-modal.update-modal-prevent-closing @click.prevent="toggleModal" :items="msg">
      Update Language
    </b-button>
    <b-modal
      id="update-modal-prevent-closing"
      ref="modal"
      title="Add Language"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Old Language Name"
          label-for="old-name-input"
          invalid-feedback="Language name is required"
          :state="nameState"
        >
          <b-form-input
            id="old-name-input"
            v-model="oldLanguageName"
            required
          ></b-form-input>
        </b-form-group>
         <b-form-group
          label="New Language Name"
          label-for="new-name-input"
          invalid-feedback="Language name is required"
          :state="nameState"
        >
          <b-form-input
            id="old-name-input"
            v-model="newLanguageName"
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
        oldLanguageName: '',
        newLanguageName: '',
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
        axios.put('http://localhost:3000/language', { oldName: this.oldLanguageName, newName: this.newLanguageName })
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