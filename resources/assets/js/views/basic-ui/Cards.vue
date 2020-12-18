<template>
  <div>
    <sw-page-header title="Cards">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Home" />
          <sw-breadcrumb-item title="Basic UI" to="/basic-ui/cards" />
          <sw-breadcrumb-item title="Cards" active />
        </sw-breadcrumb>
      </template>
    </sw-page-header>

    <sw-card>
      <h3 class="sw-section-title">Basic Cards</h3>
      <div
        class="grid grid-cols-1 gap-6 mt-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:mb-8"
      >
        <sw-card class="mb-5 sm:mb-5 md:mb-5">
          <template body>
            <h3>
              Default Card
            </h3>
            <p class="py-2 text-sm md:mb-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae perspiciatis, obcaecati animi delectus maxime cumque
              sint qui distinctio dolores ducimus non voluptatem ipsum, porro
              recusandae quasi a.
            </p>
          </template>
        </sw-card>

        <sw-card class="mb-5 sm:mb-5 md:mb-5">
          <template v-slot:header>
            Card with header
          </template>
          <template body>
            <p class="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae perspiciatis, obcaecati animi delectus maxime cumque
              sint qui distinctio dolores ducimus non voluptatem ipsum, porro
              recusandae quasi a.
            </p>
          </template>
        </sw-card>

        <sw-card>
          <template body>
            <h3 class="py-2 ">
              Card with Footer
            </h3>
            <p class="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae perspiciatis, obcaecati animi delectus maxime cumque
              sint qui distinctio dolores ducimus non voluptatem ipsum, porro
              recusandae quasi a.
            </p>
          </template>
          <template v-slot:footer>
            <p>
              This card has footer.
            </p>
          </template>
        </sw-card>
      </div>

      <h3 class="px-2 mt-5 sw-section-title">
        Card With Actions
      </h3>
      <div
        class="grid grid-cols-1 gap-6 mt-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 md:mb-8"
      >
        <sw-card class="mb-5 sm:mb-5 md:mb-5">
          <template v-slot:header>
            <div class="flex justify-between w-full">
              Card with Button Actions
              <div class="flex flex-row gap-5">
                <sw-button variant="primary"> Add New</sw-button>
                <sw-button variant="danger"> Delete</sw-button>
              </div>
            </div>
          </template>
          <template body>
            <p class="text-sm md:mb-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae perspiciatis, obcaecati animi delectus maxime cumque
              sint qui distinctio dolores ducimus non voluptatem
            </p>
          </template>
        </sw-card>
      </div>
    </sw-card>
  </div>
</template>

<script>