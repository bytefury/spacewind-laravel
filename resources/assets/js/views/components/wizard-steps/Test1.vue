<template>
  <div class="w-3/4">
    <sw-card>
      <div class="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
        <sw-input-group label="Name">
          <sw-input />
        </sw-input-group>
        <sw-input-group label="Email">
          <sw-input />
        </sw-input-group>
        <sw-input-group label="Age">
          <sw-input type="number" />
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
    return {}
  },
}
</script>
