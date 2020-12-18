<template>
  <div>
    <sw-page-header title="Wizards">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Home" to="/dashboard" />
          <sw-breadcrumb-item title="Components" to="/admin/components/file-uploads" />
          <sw-breadcrumb-item title="Wizards" active />
        </sw-breadcrumb>
      </template>
    </sw-page-header>

    <!-- <sw-card class="md:mt-5">
      <template v-slot:header>
        <h3 class="sw-section-title">
          Wizard Step
        </h3>
      </template> -->

      <!-- <div class="flex items-center justify-center w-full">
        <img
          id="logo-crater"
          src="https://demo.craterapp.com/assets/img/crater-logo.png"
          alt="Crater Logo"
          class="h-12 mt-2"
        />
      </div> -->
      <sw-wizard
        :steps="3"
        :currentStep.sync="wizardStep"
        allow-navigation-redirect
        @submit="submitWizard"
      >
        <component :is="tab" @next="setNextTab()" @back="setBackTab()" />
      </sw-wizard>
    <!-- </sw-card> -->
  </div>
</template>

<script>

import Test1 from './wizard-steps/Test1'
import Test2 from './wizard-steps/Test2'
import Test3 from './wizard-steps/Test3'

export default {
  data() {
    return {
      wizardStep: 1
    }
  },
  computed: {
    tab() {
      switch (this.wizardStep) {
        case 1:
          return 'test-1'
        case 2:
          return 'test-2'
        case 3:
          return 'test-3'
        default:
          return 'test-3'
      }
    }
  },
  components: {
    Test1,
    Test2,
    Test3
  },
  methods: {
    submitWizard() {
      this.wizardStep = 2
    },
    setNextTab() {
      if (this.wizardStep < 3) {
        this.wizardStep += 1
        return true
      }
      alert('steps completed!')
    },
    setBackTab() {
      if (this.wizardStep > 1) {
        this.wizardStep -= 1
      }
    }
  }
}
</script>
