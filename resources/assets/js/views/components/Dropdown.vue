<template>
  <div>
    <sw-page-header title="Dropdowns">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Home" to="/dashboard" />
          <sw-breadcrumb-item title="Components" to="/components/file-upload" />
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
        <sw-dropdown position="top-left" show>
          <sw-button slot="activator" variant="primary">
            Top Left
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
        
        <sw-dropdown show position="top-right">
          <sw-button slot="activator" variant="primary">
            Top Right
          </sw-button>
          <sw-dropdown-item>
            item1
          </sw-dropdown-item>
          <sw-dropdown-item>item2</sw-dropdown-item>
          <sw-dropdown-divider />
          <sw-dropdown-item>item3</sw-dropdown-item>
          <sw-dropdown-item>item4</sw-dropdown-item>
        </sw-dropdown>

        <sw-dropdown show position="bottom-left">
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
        </sw-dropdown>

        <sw-dropdown position="bottom-right" show>
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
        </sw-dropdown>

        <sw-dropdown show>
          <sw-button slot="activator">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </sw-button>
          <sw-dropdown-item>
            <svg
              class="w-6 h-6 mr-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
              ></path>
            </svg>
            Vue js
          </sw-dropdown-item>

          <sw-dropdown-item>
            <svg
              class="w-6 h-6 mr-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
              ></path>
            </svg>
            Php
          </sw-dropdown-item>

          <sw-dropdown-item>
            <svg
              class="w-6 h-6 mr-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
              ></path>
            </svg>
            Java Scipt
          </sw-dropdown-item>

          <sw-dropdown-item>
            <svg
              class="w-6 h-6 mr-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
              ></path>
            </svg>
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
