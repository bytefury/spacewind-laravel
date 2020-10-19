<template>
  <div>
    <sw-page-header title="General Elements">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Dashboard" />
          <sw-breadcrumb-item title="Form" to="/form/buttons" />
          <sw-breadcrumb-item title="General Elements" active />
        </sw-breadcrumb>
      </template>
    </sw-page-header>


    <sw-card class="md:mt-5">
      <template v-slot:header>
        <span class="sw-section-title">Vertical Basic Inputs</span>
      </template>
      <div
        class="grid gap-5 mt-4 grid:cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 sm:mt-4 md:mt-4"
      >
        <sw-input-group label="Text">
          <sw-input />
        </sw-input-group>

        <sw-input-group label="Password">
          <sw-input :type="getInputType">
            <template v-slot:rightIcon>
              <svg v-if="isShowPassword" class="w-5 h-5 mr-1 text-gray-500 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" @click="isShowPassword = !isShowPassword">
                <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path>
              </svg>
              <svg
                v-else
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 mr-1 text-gray-500 cursor-pointer"
                @click="isShowPassword = !isShowPassword"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </template>
          </sw-input>
        </sw-input-group>

        <sw-input-group label="Feedback">
          <sw-textarea row="2" />
        </sw-input-group>
      </div>
    </sw-card>

    <sw-card class="md:mt-10">
      <template v-slot:header>
        <span class="sw-section-title">Validation states</span>
      </template>
      <div
        class="grid gap-5 grid:cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1"
      >
        <sw-input-group label="Valid">
          <sw-input variant="success" />
        </sw-input-group>
        <sw-input-group label="Invalid">
          <sw-input variant="danger" />
        </sw-input-group>
      </div>
    </sw-card>

    <sw-card class="md:mt-10">
      <template v-slot:header>
        <span class="sw-section-title">Checkbox and Radio Buttons</span>
      </template>
      <div
        class="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
      >
        <sw-input-group label="Checkbox">
          <sw-checkbox label="small" variant="success" size="sm" />
          <sw-checkbox label="default" />
          <sw-checkbox label="large" variant="danger" size="lg" />
        </sw-input-group>
        <sw-input-group label="Radio">
          <sw-radio
            label="Radio 1"
            name="Radio 1"
            value="Radio 1"
            size="sm"
            variant="success"
          />
          <sw-radio label="Radio 2" name="Radio 1" value="Radio 2" />
          <sw-radio
            label="Radio 3"
            name="Radio 1"
            value="Radio 3"
            size="lg"
            variant="danger"
          />
        </sw-input-group>
        <sw-input-group label="Toggle">
          <sw-switch />
        </sw-input-group>
      </div>
    </sw-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeIndex: 0,
      groupActiveIndex: 0,
      isShowPassword: false
    }
  },

  computed: {
    getInputType() {
      if (this.isShowPassword) {
        return 'text'
      }
      return 'password'
    }
  },
}
</script>
