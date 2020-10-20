<template>
  <div>
    <sw-page-header title="Editors">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Home" to="/dashboard" />
          <sw-breadcrumb-item title="Components" to="/admin/components/file-uploads" />
          <sw-breadcrumb-item title="Editors" active />
        </sw-breadcrumb>
      </template>
    </sw-page-header>

    <sw-card class="md:mt-5">
      <template v-slot:header>
        <h3 class="sw-section-title">
          Basic Editors
        </h3>
      </template>
      <sw-editor />
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
