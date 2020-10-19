<template>
  <div class="">
    <sw-page-header title="Typography">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Home" />
          <sw-breadcrumb-item title="Basic UI" to="/basic-ui/cards" />
          <sw-breadcrumb-item title="Typography" active />
        </sw-breadcrumb>
      </template>
    </sw-page-header>

    <sw-card class="md:mt-5">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-span-1"
      >
        <div class="flex flex-col">
          <h3 class="py-3 sw-section-title">
            FONTS
          </h3>
          <h3 class="mb-5 text-xl font-semibold text-gray-800 md:mb-10 sm:mb-5">
            Poppins SemiBold
          </h3>
          <h3 class="mb-5 text-xl font-medium text-gray-800 md:mb-10 sm:mb-5">
            Poppins Medium
          </h3>
          <h3 class="mb-5 text-xl font-normal text-gray-800 md:mb-10 sm:mb-5">
            Poppins Regular
          </h3>
        </div>

        <div class="flex flex-col py-4">
          <h3 class="py-1 sw-section-title">
            TYPES
          </h3>
          <h3 class="py-2 sw-page-title">Page Title</h3>
          <h3 class="py-2 sw-section-title">SECTION TITLE</h3>
          <h3 class="py-2">Body Text</h3>
        </div>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-span-1"
      >
        <div class="flex flex-col py-4">
          <h3 class="py-3 sw-section-title">
            HEADINGS
          </h3>
          <h3 class="mb-5 sw-h1 md:mb-5 sm:mb-5">
            Heading 1
          </h3>
          <h3 class="mb-5 sw-h2 md:mb-5 sm:mb-5">
            Heading 2
          </h3>
          <h3 class="mb-5 sw-h3 md:mb-5 sm:mb-5">
            Heading 3
          </h3>
          <h3 class="mb-5 sw-h4 md:mb-5 sm:mb-5">Heading 4</h3>
          <h3 class="mb-5 sw-h5 md:mb-5 sm:mb-5">
            Heading 5
          </h3>
        </div>
      </div>
    </sw-card>
  </div>
</template>
<script>
export default {
}
</script>
