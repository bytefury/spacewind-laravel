<template>
  <div class="p-4">
    <sw-page-header title="Modals">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Home" />
          <sw-breadcrumb-item title="Basic UI" to="/basic-ui/cards" />
          <sw-breadcrumb-item title="Modals" active />
        </sw-breadcrumb>
      </template>
    </sw-page-header>

    <sw-card class="md:mt-5">
      <h3 class="py-2 sw-section-title">
        BASIC ALERTS
      </h3>
      <p class="py-2">
        Simple alerts to notify about a particular status
      </p>
      <div class="flex py-10 flex-start sm:py-8">
        <sw-button size="md" variant="primary" @click="onModal">
          Regular
        </sw-button>
        &nbsp;
      </div>
    </sw-card>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },

  methods: {
    onClick() {
      alert('Button Clicked')
    },
    onModal() {
      this.$root.$emit('openModal')
    }
  }
}
</script>
