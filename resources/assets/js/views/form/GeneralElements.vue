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

        <div class="mb-8 md:grid md:grid-cols-5 md:gap-4">
            <div
                class="text-lg not-italic font-medium leading-5 tracking-wide text-black md:col-span-1 sm:mb-4"
            >
                <span class="sw-section-title">Input Text</span>
            </div>

          <div class="md:col-span-2">
            <sw-input-group
              label="Text"
              class="mt-5 md:mt-0"
            >
              <sw-input
                focus
                type="text"
                name="name"
              />
            </sw-input-group>
          </div>
          <div class="md:col-span-2">
            <sw-input-group
              label="Password"
              class="mt-5 md:mt-0"
            >
              <sw-input
                label="Password"
                type="password"
                tab-index="2"
              />
            </sw-input-group>
          </div>
        </div>

        <sw-divider class="mb-5 md:mb-8" />

        <div class="mb-8 md:grid md:grid-cols-5 md:gap-4">
          <div
            class="text-lg not-italic font-medium leading-5 tracking-wide text-black md:col-span-1 sm:mb-4"
          >
            Text with icon
          </div>
          <div class="md:col-span-2">
            <sw-input-group label="Left icon" class="mt-5 md:mt-0">
              <sw-input
                type="text"
                name="left-icon"
              >
                <template v-slot:leftIcon>
                    <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clip-rule="evenodd"></path></svg>
                </template>
              </sw-input>
            </sw-input-group>
          </div>
          <div class="md:col-span-2">
            <sw-input-group label="Right icon" class="mt-5 md:mt-0">
              <sw-input
                type="text"
                name="right-icon"
              >
                <template v-slot:rightIcon>
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </template>
              </sw-input>
            </sw-input-group>
          </div>
        </div>

        <sw-divider class="mb-5 md:mb-8" />

        <div class="mb-8 md:grid md:grid-cols-5 md:gap-4">
          <div
            class="text-lg not-italic font-medium leading-5 tracking-wide text-black md:col-span-1 sm:mb-4"
          >
            Prefix input
          </div>
          <div class="md:col-span-2">
            <sw-input-group label="Prefix" class="mt-5 md:mt-0">
              <sw-input
                prefix="GST"
                type="text"
                name="right-icon"
              />
            </sw-input-group>
          </div>
        </div>

        <sw-divider class="mb-5 md:mb-8" />

        <div class="mb-8 md:grid md:grid-cols-5 md:gap-4">
          <div
            class="text-lg not-italic font-medium leading-5 tracking-wide text-black md:col-span-1 sm:mb-4"
          >
            Validation
          </div>
          <div class="md:col-span-2">
                <sw-input-group label="Valid" class="mt-5 md:mt-0">
                    <sw-input variant="success" />
                </sw-input-group>
            </div>
          <div class="md:col-span-2">
            <sw-input-group label="Invalid" class="mt-5 md:mt-0">
                <sw-input variant="danger" />
            </sw-input-group>
          </div>
        </div>

        <sw-divider class="mb-5 md:mb-8" />

        <div class="mb-8 md:grid md:grid-cols-5 md:gap-4">
            <div
                class="text-lg not-italic font-medium leading-5 tracking-wide text-black md:col-span-1 sm:mb-4"
            >
                Radio & Checkbox
            </div>
            <div class="md:col-span-2">
                <sw-input-group label="Checkbox" class="mt-5 md:mt-0">
                    <sw-checkbox label="Small" variant="success" size="sm" />
                    <sw-checkbox label="Medium" />
                    <sw-checkbox label="Large" variant="danger" size="lg" />
                </sw-input-group>
            </div>
            <div class="md:col-span-2">
                <sw-input-group label="Radio" class="mt-5 md:mt-0">
                    <sw-radio
                        label="Small"
                        name="Radio 1"
                        value="Radio 1"
                        size="sm"
                        variant="success"
                    />
                    <sw-radio label="Medium" name="Radio 1" value="Radio 2" />
                    <sw-radio
                        label="Large"
                        name="Radio 1"
                        value="Radio 3"
                        size="lg"
                        variant="danger"
                    />
                </sw-input-group>
            </div>
        </div>

        <sw-divider class="mb-5 md:mb-8" />

        <div class="mb-8 md:grid md:grid-cols-5 md:gap-4">
            <div
                class="text-lg not-italic font-medium leading-5 tracking-wide text-black md:col-span-1 sm:mb-4"
            >
               Toggle Switch
            </div>
            <div class="md:col-span-2">
                <sw-input-group label="Switch">
                    <sw-switch />
                </sw-input-group>
            </div>
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
