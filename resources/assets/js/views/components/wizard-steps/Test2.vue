<template>
  <div class="w-3/4">
    <sw-card>
      <div class="flex grid grid-cols-2 gap-10 mb-6">
        <sw-input-group label="Adhaar Number">
          <sw-input />
        </sw-input-group>
        <sw-input-group label="Address">
          <sw-textarea row="2" v-model="address" />
        </sw-input-group>
        <sw-input-group label="Gender">
          <div class="flex">
            <sw-radio
              label="Male"
              name="gender"
              value="male"
              size="sm"
              variant="success"
            />
            <sw-radio
              label="Female"
              name="gender"
              size="sm"
              value="female"
              class="ml-2"
            />
          </div>
        </sw-input-group>
        <sw-input-group label="Toggle">
          <sw-switch />
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
