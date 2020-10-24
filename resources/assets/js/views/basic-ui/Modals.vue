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
        OPTIONAL SIZES
      </h3>
      <div class="sm:py-4">
        <sw-button size="md" variant="primary" @click="onModal('md')" class="m-2 sm:m-0">
          Medium
        </sw-button>
        <sw-button size="md" variant="primary" @click="onModal('lg')" class="m-2 sm:m-0">
          Large
        </sw-button>
        <sw-button size="md" variant="primary" @click="onModal('sm')" class="m-2 sm:m-0">
          Small
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
    onModal(variant) {
      this.$root.$emit('openModal', variant)
    }
  }
}
</script>
