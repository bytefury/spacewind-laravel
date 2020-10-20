<template>
  <div
    class="hidden w-64 h-screen pt-2 pb-32 overflow-y-auto bg-white border-r border-gray-300 border-solid md:block sw-scroll"
  >
    <sw-list variant="collapse-sidebar">
      <div v-for="(menuGroups, groupIndex) in menu" :key="groupIndex">
        <sw-list-group
          v-if="menuGroups.items"
          :title="menuGroups.title"
          :active="menuGroups.active"
          @click="setActiveGroup(groupIndex)"
        >
          <span slot="titleIcon" v-html="menuGroups.icon" />
          <sw-list-item
            v-for="(item, index) in menuGroups.items"
            tag-name="router-link"
            :to="item.route"
            :title="item.title"
            :key="index"
            :active="item.active"
            @click.native="Toggle"
          />
        </sw-list-group>
        <sw-list-item
          v-else
          :title="menuGroups.title"
          tag-name="router-link"
          :to="menuGroups.route"
          :active="menuGroups.active"
          @click.native="Toggle"
        >
          <span slot="icon" v-html="menuGroups.icon" />
        </sw-list-item>
      </div>
    </sw-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      groupActiveIndex: 0,
      menu: [
        {
          title: 'Basic UI',
          icon: `<svg class="w-5 h-5 mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>`,
          active: false,
          items: [
            {
              title: 'Cards',
              route: '/admin/basic-ui/cards',
              active: false
            },
            {
              title: 'Tables',
              route: '/admin/basic-ui/tables',
              active: false
            },
            {
              title: 'Typography',
              route: '/admin/basic-ui/typography',
              active: false
            },
            {
              title: 'Tabs',
              route: '/admin/basic-ui/tabs',
              active: false
              
            },
            {
              title: 'Modals',
              route: '/admin/basic-ui/modals',
              active: false
            },
            
          ]
        },
        {
          title: 'Form',
          icon: `<svg class="w-5 h-5 mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path>
                </svg>`,
          active: false,
          items: [
            {
              title: 'Buttons',
              route: '/admin/form/buttons',
              active: false
            },
            {
              title: 'General Elements',
              route: '/admin/form/general-elements',
              active: false
            },
            {
              title: 'Advanced Elements',
              route: '/admin/form/advanced-elements',
              active: false
            },
            {
              title: 'Form Layouts',
              route: '/admin/form/form-layouts',
              active: false
            }
          ]
        },
        {
          title: 'Components',
          icon: `<svg class="w-5 h-5 mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"></path>
                </svg>`,
          active: false,
          items: [
            {
              title: 'File Uploads',
              route: '/admin/components/file-uploads',
              active: false
            },
            {
              title: 'Badges',
              route: '/admin/components/badges',
              active: false
            },
            {
              title: 'Lists',
              route: '/admin/components/lists',
              active: false
            },
            {
              title: 'Editors',
              route: '/admin/components/editors',
              active: false
            },
            {
              title: 'Wizards',
              route: '/admin/components/wizards',
              active: false
            },
            {
              title: 'Dropdowns',
              route: '/admin/components/dropdowns',
              active: false
            },
            {
              title: 'Popups',
              route: '/admin/components/popups',
              active: false
            }
          ]
        }
      ]
    }
  },
  watch: {
    '$route.path'(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.setActiveItem()
      }
    },
  },
  mounted() {
    if(this.$route.path == '/') {
      this.$router.push( '/buttons' )
      return true
    }
    this.setActiveItem()
  },
  methods: {
    Toggle() {
      // this.$utils.toggleSidebar()
    },
    setActiveItem() {
      this.menu.forEach(item => {
        item.active = false
        if (item.items) {
          item.items.forEach(_item => {
            _item.active = false
            if (this.$route.path.indexOf(_item.route) > -1) {
              item.active = true
              _item.active = true
            }
          })
        } else {
          if (this.$route.path.indexOf(item.route) > -1) {
            item.active = true
          }
        }
      })
    },
    setActiveGroup(index) {
      if (index == null || index == undefined) {
        return false
      }
      this.menu.forEach(item => {
        item.active = false
      })
      this.menu[index].active = true
    }
  }
}
</script>
<style lang="scss">
.mobile-menu-overlay {
  background: rgba(48, 75, 88, 0.5);
  display: none;
}

@media (max-width: 768px) {
  .sidebar-open .sidebar-left {
    left: 0;
  }

  .sidebar-open .mobile-menu-overlay {
    display: block;
  }
}
</style>