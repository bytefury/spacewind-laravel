<template>
  <div class="p-4">
    <sw-page-header title="Tabs">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Home" />
          <sw-breadcrumb-item title="Basic UI" to="/basic-ui/cards" />
          <sw-breadcrumb-item title="Tabs" active />
        </sw-breadcrumb>
      </template>
    </sw-page-header>

    <sw-card class="md:mt-5">
      <template v-slot:header>
        <h3 class="sw-section-title">Default Tabs</h3>
      </template>
      <sw-tabs>
        <sw-tab-item title="Home" class="px-6 py-4">
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nesciunt praesentium totam vitae? Consequatur delectus eos esse natus odio. Expedita?</p>
        </sw-tab-item>

        <sw-tab-item title="Profile" class="px-6 py-4">
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nulla quia quod sed voluptatem. Aliquam atque error illum nihil quae.</p>
        </sw-tab-item>

        <sw-tab-item title="Message" class="px-2 py-4">
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium aliquam delectus doloribus eius maxime nisi quia rerum soluta.</p>
        </sw-tab-item>

        <sw-tab-item title="Settings" class="px-2 py-4">
         <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam amet ea, excepturi fuga fugiat magnam non ratione sunt tenetur.</p>
        </sw-tab-item>
      </sw-tabs>
    </sw-card>
  </div>
</template>

<script>

export default {
}
</script>
