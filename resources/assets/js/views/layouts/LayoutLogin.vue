<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md">
      <div class="flex justify-center">
        <router-link to="/login">
          <!-- <logo class="h-16" /> -->
        </router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script type="text/babel">
// import Logo from '../../components/svg/Logo'
// import BaseToaster from '../../components/base/toaster/BaseToaster'
// import Ls from '@/services/ls'
</script>
