<template>
  <div
    class="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-16 px-4 py-3 md:px-8 bg-gradient-to-r from-primary-500 to-primary-400"
  >
    <div class="flex items-center">
      <a
        href="/"
        class="float-none text-lg not-italic font-black tracking-wider text-white brand-main md:float-left font-base"
      >
        <img
          id="logo-white"
          src="/assets/img/spacewind-whitte.svg"
          alt="Crater Logo"
          class="hidden h-8 md:block"
        />
        <img
          id="logo-mobile"
          src="/assets/img/mobile-logo.png"
          alt="Laraspace Logo"
          class="block h-10 md:hidden"
        />
      </a>
      <a
        href="#"
        class="block ml-3 text-sm text-black bg-white rounded md:hidden focus:text-black visited:text-black active:text-black md:ml-0"
        style="line-height: 9px; padding: 6px"
      >
        <!-- @click="onNavToggle" -->
        <div
          class="inline-block m-0 overflow-visible normal-case ease-linear bg-transparent border-0 cursor-pointer hamburger hamburger--arrowturn"
        >
          <div class="relative inline-block w-6 h-6">
            <div class="block hamburger-inner top-1/2" />
          </div>
        </div>
      </a>
    </div>
    <ul class="float-right h-8 m-0 list-none" style="height: 36px">
      <li class="relative block float-left px-1 py-0 m-0">
        <!-- <a
          slot="activator"
          href="#"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          class="inline-block text-sm text-black bg-transparent bg-white rounded-sm avatar"
        >
          <img
            src="/assets/img/default-avatar.jpg"
            alt="Avatar"
            class="rounded-sm"
            style="width: 36px"
          />
        </a> -->
        <sw-dropdown>
          <a
            slot="activator"
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            class="inline-block text-sm text-black bg-white rounded-sm avatar"
          >
            <img
              src="/assets/img/default-avatar.jpg"
              alt="Avatar"
              class="w-8 h-8 rounded-sm md:h-9 md:w-9"
            />
          </a>

          <sw-dropdown-item tag-name="router-link" to="/admin/settings">
            <!-- <cog-icon class="w-4 h-4 mr-2 text-primary-800" /> -->
            settings
          </sw-dropdown-item>

          <sw-dropdown-item @click="logout">
            <!-- <logout-icon class="w-4 h-4 mr-2 text-primary-800" /> -->
            logout
          </sw-dropdown-item>
        </sw-dropdown>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    // onNavToggle() {
    //   this.$utils.toggleSidebar()
    // },
    logout() {
         window.axios
        .get('/logout')
        .then(() => {
            this.$router.push('/')
            window.toastr['success']('Logged out!', 'Success')
        })
        .catch((err) => {
            this.$router.push('/')
        })
    }
  }
}
</script>
