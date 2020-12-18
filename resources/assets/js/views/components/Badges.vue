<template>
  <div class="">
    <sw-page-header title="Badges">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Home" to="/dashboard" />
          <sw-breadcrumb-item title="Components" to="/admin/components/file-uploads" />
          <sw-breadcrumb-item title="Badges" active />
        </sw-breadcrumb>
      </template>
    </sw-page-header>

    <sw-card class="py-2 sm:mt-5">
      <div>
        <sw-badge bg-color="#F8EDCB" color="#744210" class="ml-5">DRAFT</sw-badge>
        <sw-badge bg-color="#D5EED0" color="#276749" class="ml-5">PAID</sw-badge>
        <sw-badge bg-color="#F8EDCB" color="#744210" class="ml-5">UNPAID</sw-badge>
        <sw-badge bg-color="rgba(246, 208, 154, 0.4)" color="#975a16" class="ml-5">SENT</sw-badge>
        <sw-badge bg-color="#E1E0EA" color="#1A1841" class="ml-5">REJECTED</sw-badge>
        <sw-badge bg-color="#D5EED0" color="#276749" class="ml-5">ACCEPTED</sw-badge>
        <sw-badge bg-color="#C9E3EC" color="#2c5282" class="ml-5">VIEWED</sw-badge>
        <sw-badge bg-color="#FED7D7" color="#c53030" class="ml-5">EXPIRED</sw-badge>
        <sw-badge bg-color="#C9E3EC" color="#2c5282" class="ml-5">PARTIALLY PAID</sw-badge>
        <sw-badge bg-color="#FED7D7" color="#c53030" class="ml-5">OVERDUE</sw-badge>
        <sw-badge bg-color="#D5EED0" color="#276749" class="ml-5">COMPLETED</sw-badge>
      </div>
    </sw-card>
  </div>
</template>
<script>

export default {
}
</script>
