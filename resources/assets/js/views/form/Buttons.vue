<template>
  <div>
    <sw-page-header title="Buttons">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Home" to="/dashboard" />
          <sw-breadcrumb-item title="Form" to="/form/buttons" />
          <sw-breadcrumb-item title="Buttons" active />
        </sw-breadcrumb>
      </template>
    </sw-page-header>

    <sw-card class="my-4">
      <template v-slot:header>
        <h3 class="sw-section-title">
          Sizes
        </h3>
      </template>
      <div class="flex flex-col mb-5 space-y-4">
        <div class="w-full space-x-2">
          <sw-button size="xs" variant="primary">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button size="sm" variant="primary">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button variant="primary">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button size="lg" variant="primary">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button size="xl" variant="primary">
            Primary Button
          </sw-button>
        </div>
        <div class="w-full space-x-2">
          <sw-button size="xs" variant="primary-outline">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button size="sm" variant="primary-outline">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button variant="primary-outline">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button size="lg" variant="primary-outline">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button size="xl" variant="primary-outline">
            Primary Button
          </sw-button>
        </div>
      </div>
    </sw-card>


    <sw-card class="my-4">
      <template v-slot:header>
        <h3 class="sw-section-title">
          Variants
        </h3>
      </template>
      <div class="flex flex-col mb-5 space-y-4">
        <div class="w-full space-x-2">
          <sw-button variant="primary">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button variant="success">
            Success Button
          </sw-button> &nbsp;&nbsp;
          <sw-button variant="warning">
            Warning Button
          </sw-button> &nbsp;&nbsp;
          <sw-button variant="info">
            Info Button
          </sw-button> &nbsp;&nbsp;
          <sw-button variant="danger">
            Danger Button
          </sw-button>
        </div>
        <div class="w-full space-x-2">
          <sw-button variant="primary-outline">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button variant="success-outline">
            Success Button
          </sw-button> &nbsp;&nbsp;
          <sw-button variant="warning-outline">
            Warning Button
          </sw-button> &nbsp;&nbsp;
          <sw-button variant="info-outline">
            Info Button
          </sw-button> &nbsp;&nbsp;
          <sw-button variant="danger-outline">
            Danger Button
          </sw-button>
        </div>
      </div>
    </sw-card>
    

    <sw-card class="my-4">
      <template v-slot:header>
        <h3 class="sw-section-title">
          Loading
        </h3>
      </template>
      <div class="flex flex-col mb-5 space-y-4">
        <div class="w-full space-x-2">
          <sw-button loading size="xs" variant="primary">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button loading size="sm" variant="primary">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button loading variant="primary">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button loading size="lg" variant="primary">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button loading size="xl" variant="primary">
            Primary Button
          </sw-button>
        </div>
        <div class="w-full space-x-2">
          <sw-button loading size="xs" variant="primary-outline">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button loading size="sm" variant="primary-outline">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button loading variant="primary-outline">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button loading size="lg" variant="primary-outline">
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button loading size="xl" variant="primary-outline">
            Primary Button
          </sw-button>
        </div>
      </div>
    </sw-card>

    <sw-card class="my-4">
      <template v-slot:header>
        <h3 class="sw-section-title">
          Icon
        </h3>
      </template>
      <div class="flex flex-col mb-5 space-y-4">
        <div class="w-full space-x-2">
          <sw-button size="xs" variant="primary">
            <svg class="h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button size="sm" variant="primary">
            <svg class="h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button variant="primary">
            <svg class="h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button size="lg" variant="primary">
            <svg class="h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button size="xl" variant="primary">
            <svg class="h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
            Primary Button
          </sw-button>
        </div>
        <div class="w-full space-x-2">
          <sw-button size="xs" variant="primary-outline">
            <svg class="h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button size="sm" variant="primary-outline">
            <svg class="h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button variant="primary-outline">
            <svg class="h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button size="lg" variant="primary-outline">
            <svg class="h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
            Primary Button
          </sw-button> &nbsp;&nbsp;
          <sw-button size="xl" variant="primary-outline">
            <svg class="h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
            Primary Button
          </sw-button>
        </div>
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
