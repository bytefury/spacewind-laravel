<template>
  <div>
    <sw-page-header title="Dropdowns">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Home" to="/dashboard" />
          <sw-breadcrumb-item title="Components" to="/admin/components/file-uploads" />
          <sw-breadcrumb-item title="Dropdowns" active />
        </sw-breadcrumb>
      </template>
    </sw-page-header>

    <sw-card class="md:mt-5">
      <template v-slot:header>
        <h3 class="sw-section-title">
          Dropdown
        </h3>
      </template>
      <div class="flex justify-between">
        <sw-dropdown>
          <sw-button slot="activator" variant="primary">
            Dropdown Basic
          </sw-button>
          <sw-dropdown-item>item1</sw-dropdown-item>
          <sw-dropdown-item>item2</sw-dropdown-item>
          <sw-dropdown-item>item3</sw-dropdown-item>
          <sw-dropdown-item>item4</sw-dropdown-item>
          <sw-dropdown-item>item1</sw-dropdown-item>
          <sw-dropdown-item>item2</sw-dropdown-item>
          <sw-dropdown-item>item3</sw-dropdown-item>
          <sw-dropdown-item>item4</sw-dropdown-item>
          <sw-dropdown-item>item1</sw-dropdown-item>
          <sw-dropdown-item>item2</sw-dropdown-item>
          <sw-dropdown-item>item3</sw-dropdown-item>
          <sw-dropdown-item>item4</sw-dropdown-item>
          <sw-dropdown-item>item1</sw-dropdown-item>
          <sw-dropdown-item>item2</sw-dropdown-item>
          <sw-dropdown-item>item3</sw-dropdown-item>
          <sw-dropdown-item>item4</sw-dropdown-item>
          <sw-dropdown-item>item1</sw-dropdown-item>
          <sw-dropdown-item>item2</sw-dropdown-item>
          <sw-dropdown-item>item3</sw-dropdown-item>
          <sw-dropdown-item>item4</sw-dropdown-item>
          <sw-dropdown-item>item1</sw-dropdown-item>
          <sw-dropdown-item>item2</sw-dropdown-item>
          <sw-dropdown-item>item3</sw-dropdown-item>
          <sw-dropdown-item>item4</sw-dropdown-item>
        </sw-dropdown>
        
        <sw-dropdown>
          <sw-button slot="activator" variant="primary">
            Dropdown With Divider
          </sw-button>
          <sw-dropdown-item>
            item1
          </sw-dropdown-item>
          <sw-dropdown-item>item2</sw-dropdown-item>
          <sw-dropdown-divider />
          <sw-dropdown-item>item3</sw-dropdown-item>
          <sw-dropdown-item>item4</sw-dropdown-item>
        </sw-dropdown>

        <!-- <sw-dropdown position="bottom-left">
          <sw-button slot="activator" variant="primary">
            Bottom Left
          </sw-button>
          <sw-dropdown-item>
            item1
          </sw-dropdown-item>
          <sw-dropdown-item>item2</sw-dropdown-item>
          <sw-dropdown-divider />
          <sw-dropdown-item>item3</sw-dropdown-item>
          <sw-dropdown-item>item4</sw-dropdown-item>
        </sw-dropdown> -->

        <!-- <sw-dropdown position="bottom-right">
          <sw-button slot="activator" variant="primary">
            Bottom Right
          </sw-button>
          <sw-dropdown-item>item1</sw-dropdown-item>
          <sw-dropdown-item>item2</sw-dropdown-item>
          <sw-dropdown-item>item3</sw-dropdown-item>
          <sw-dropdown-item>item4</sw-dropdown-item>
          <sw-dropdown-item>item1</sw-dropdown-item>
          <sw-dropdown-item>item2</sw-dropdown-item>
          <sw-dropdown-item>item3</sw-dropdown-item>
          <sw-dropdown-item>item4</sw-dropdown-item>
          <sw-dropdown-item>item1</sw-dropdown-item>
          <sw-dropdown-item>item2</sw-dropdown-item>
          <sw-dropdown-item>item3</sw-dropdown-item>
          <sw-dropdown-item>item4</sw-dropdown-item>
          <sw-dropdown-item>item1</sw-dropdown-item>
          <sw-dropdown-item>item2</sw-dropdown-item>
          <sw-dropdown-item>item3</sw-dropdown-item>
          <sw-dropdown-item>item4</sw-dropdown-item>
          <sw-dropdown-item>item1</sw-dropdown-item>
          <sw-dropdown-item>item2</sw-dropdown-item>
          <sw-dropdown-item>item3</sw-dropdown-item>
          <sw-dropdown-item>item4</sw-dropdown-item>
          <sw-dropdown-item>item1</sw-dropdown-item>
          <sw-dropdown-item>item2</sw-dropdown-item>
          <sw-dropdown-item>item3</sw-dropdown-item>
          <sw-dropdown-item>item4</sw-dropdown-item>
        </sw-dropdown> -->

        <sw-dropdown>
          <sw-button slot="activator">
            Dropdown With Icon
          </sw-button>
          <sw-dropdown-item>
            <vue-icon class="w-6 h-6 mr-5" />
            Vue js
          </sw-dropdown-item>

          <sw-dropdown-item>
            <php-icon class="w-6 h-6 mr-5" />
            Php
          </sw-dropdown-item>

          <sw-dropdown-item>
            <javascript-icon class="w-6 h-6 mr-5" />
            Java Scipt
          </sw-dropdown-item>

          <sw-dropdown-item>
            <laravel-icon class="w-6 h-6 mr-5" />
            Laravel
          </sw-dropdown-item>
        </sw-dropdown>
      </div>
    </sw-card>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },

  components: {
  }
}
</script>
