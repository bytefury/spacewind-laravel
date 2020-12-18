<template>
  <div>
    <sw-page-header title="Tables">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Home" />
          <sw-breadcrumb-item title="Basic UI" to="/basic-ui/cards" />
          <sw-breadcrumb-item title="Tables" active />
        </sw-breadcrumb>
      </template>
    </sw-page-header>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div>
        <h3 class="pt-6 sw-section-title">Default Rows</h3>
        <sw-table-component ref="table" :data="users">
          <sw-table-column label="Name" show="name" />
          <sw-table-column label="Age" show="age" />
          <sw-table-column label="Phone" show="phone" />
          <sw-table-column label="Last Name" show="last_name" />
        </sw-table-component>
      </div>
      <sw-card>
        <h3 class="sw-section-title">Variant Rows</h3>
        <sw-table-component
          variant="settings-table"
          ref="table"
          :data="users"
          table-class="table"
        >
          <sw-table-column label="Name" show="name" />
          <sw-table-column label="Age" show="age" />
          <sw-table-column label="Phone" show="phone" />
          <sw-table-column label="Last Name" show="last_name" />
        </sw-table-component>
      </sw-card>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      users: [
        {
          name: 'Satyaprakash',
          last_name: 'Varma',
          age: '22',
          phone: '234234234234'
        },
        {
          name: 'Jayvirsinh',
          last_name: 'Gohil',
          age: '34',
          phone: '234234234234'
        },
        {
          name: 'Jay',
          last_name: 'Makvana',
          age: '12',
          phone: '234234234234'
        },
        {
          name: 'Yogesh',
          last_name: 'Gohik',
          age: '12',
          phone: '234234234234'
        }
      ]
    }
  },
}
</script>
