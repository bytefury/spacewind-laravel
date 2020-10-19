<template>
  <div>
    <sw-card>
      <h3 class="mb-5 sw-section-title md:mb-5 sm:mb-5">
        Step 2
      </h3>

      <div class="flex grid grid-cols-3 gap-10 mb-6">
        <sw-input-group label="Adhaar Number">
          <sw-input />
        </sw-input-group>
        <sw-input-group label="Toggle">
          <sw-switch />
        </sw-input-group>

        <sw-input-group label="Gender">
          <sw-radio
            v-model="gender"
            label="Male"
            name="gender"
            value="male"
            size="sm"
            variant="success"
          />
          <sw-radio
            v-model="gender"
            label="Female"
            name="gender"
            size="sm"
            value="female"
          />
        </sw-input-group>
      </div>
      <div class="grid row sm:grid-row-1">
        <sw-input-group label="Address">
          <sw-textarea row="2" v-model="address" />
        </sw-input-group>
      </div>
      <div class="flex justify-between mt-5">
        <sw-button @click="$emit('back')">Back</sw-button>&nbsp;
        <sw-button @click="$emit('next')">Next</sw-button>
      </div>
    </sw-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      address: null
    }
  },
}
</script>
