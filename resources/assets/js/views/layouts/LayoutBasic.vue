<template>
  <div class="h-full template-container">
    <sw-modal ref="myModal" :variant="modalVariant">
      <template v-slot:header>
        Title
      </template>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quidem, nulla aliquam quam facilis in voluptatem assumenda
        dolore ut atque consequatur laudantium at asperiores rem
        provident a accusamus ad qua
      </div>
      <template v-slot:footer>
        <sw-button
          variant="danger"
          @click="() => $refs.myModal.close()"
        >
          Close
        </sw-button>
      </template>
    </sw-modal>
    <sw-header></sw-header>
    <div class="flex h-screen pt-16 pb-10 overflow-hidden bg-gray-100">
      <sw-sidebar></sw-sidebar>
      <div
        class="flex flex-col flex-1 p-8 overflow-y-auto border-b border-gray-300 border-solid"
      >
      <sw-transition>
        <router-view />
      </sw-transition>
      </div>
    </div>
    <sw-footer></sw-footer>
  </div>
</template>

<script type="text/babel">
import SwSidebar from './partials/TheSiteSidebar'
import SwHeader from './partials/TheSiteHeader'
import SwFooter from './partials/TheSiteFooter'

export default {
  components: {
    SwSidebar,
    SwHeader,
    SwFooter,
  },
  data() {
    return {
      modalVariant: null
    }
  },
  mounted() {
    this.$root.$on('openModal', (variant) => {
        this.modalVariant = variant
      this.$refs.myModal.open()
    })
    this.$root.$on('closeModal', () => {
      this.$refs.myModal.close()
    })
  },
}
</script>
