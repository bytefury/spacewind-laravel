<template>
  <div>
    <sw-page-header title="Lists">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Home" />
          <sw-breadcrumb-item title="Components" to="/admin/components/file-uploads" />
          <sw-breadcrumb-item title="Lists" active />
        </sw-breadcrumb>
      </template>
    </sw-page-header>

    <div class="grid grid-cols-1 gap-4 pt-5 md:grid-cols-5">
      <div class="col-span-1">
        <sw-list>
          <sw-list-item
            v-for="(item, index) in menu"
            :title="item.title"
            :key="index"
            :active="index === activeIndex"
            @click="setActive(index)"
          >
            <span v-html="item.icon" slot="icon"/>
          </sw-list-item>
        </sw-list>
      </div>
      <sw-card v-if="getActiveItem" class="col-span-4">
        <template v-slot:header>
          <span class="sw-section-title">{{getActiveItem.title}}</span>
        </template>
        <p>{{ getActiveItem.description }}</p><br>
        <p>{{ getActiveItem.description }}</p><br>
        <p>{{ getActiveItem.description }}</p>
      </sw-card>
    </div>
    <sw-divider class="my-10"/>
    <div class="mt-6">
      <sw-card class="col-span-4">
        <template>
          <span class="sw-section-title">Sidebar List</span>
        </template>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-5">
          <sw-list variant="sidebar" class="col-span-1 bg-gray-100">
            <sw-list-item
              v-for="(item, index) in menu2"
              :title="item.title"
              :key="index"
              :active="index === activeIndex2"
              @click="setActive2(index)"
            >
              <span v-html="item.icon" slot="icon"/>
            </sw-list-item>
          </sw-list>
          <div class="col-span-4 mt-6">
              <p>{{ getActiveItem2.description }}</p><br>
              <p>{{ getActiveItem2.description }}</p><br>
              <p>{{ getActiveItem2.description }}</p>
          </div>
        </div>
      </sw-card>
    </div>
    <sw-divider class="my-10"/>
    <sw-card class="w-1/4 md:mt-5">
      <template v-slot:header>
        <span class="sw-section-title">Collapsible List</span>
      </template>
        <sw-list>
          <div v-for="(item, index) in menuGroup" :key="index">
            <sw-list-group v-if="item.items" :title="item.title">
              <div v-for="(grpItem1, index1) in item.items" :key="index1">
                <sw-list-group v-if="grpItem1.items" :title="grpItem1.title">
                  <div v-for="(grpItem2, index2) in grpItem1.items" :key="index2">
                    <sw-list-group v-if="grpItem2.items" :title="grpItem2.title"/>
                    <sw-list-item v-else :title="grpItem2.title" />
                  </div>
                </sw-list-group>
                <sw-list-item v-else :title="grpItem1.title" />
              </div>
            </sw-list-group>
            <sw-list-item v-else :title="item.title" />
          </div>
        </sw-list>
    </sw-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      money: 0,
      activeIndex: 0,
      activeIndex2: 0,
      menu: [
        {
          title: 'Buttons',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 star">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>`,
          route: '',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex beatae quas molestias veniam porro maxime modi voluptas explicabo, possimus laudantium corporis vero blanditiis ab asperiores error incidunt sint odit provident?'
        },
        {
          title: 'Cards',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 user">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                    </svg>`,
          route: '/admin/sw-form-input',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia laborum sint praesentium voluptatibus, quod vero temporibus. Sequi magni est numquam aut earum reiciendis, tempora sint temporibus dolorum distinctio. Eveniet.'
        },

        {
          title: 'Badges',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 star">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>`,
          route: '/admin/sw-badges',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error sit distinctio voluptatibus neque tempora explicabo velit itaque natus voluptatum! Atque ipsam libero qui rerum quibusdam, dignissimos voluptate minus! Quas?'
        },
        {
          title: 'Tabs Item',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 cog">
                      <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                      </svg>`,
          route: '/admin/sw-tabs',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur fuga accusantium harum atque cumque laudantium dignissimos laborum itaque nostrum, optio velit! Vitae tenetur minus, suscipit in ipsam cumque dolorum corrupti?'
        },
        {
          title: 'File Upload',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 star">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>`,
          route: '/admin/sw-tabs',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quaerat voluptas eius nihil ullam culpa vel laborum accusamus autem laudantium. Et ullam adipisci explicabo repellat ad at sequi cumque maxime?'
        },
        {
          title: 'Tabs Item',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 user">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                    </svg>`,
          route: '/admin/sw-tabs',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis molestiae ex magni officia, praesentium cumque distinctio minus quaerat vel nulla atque rem, suscipit autem quibusdam cupiditate delectus vero modi.'
        },
        {
          title: 'Typog raphy',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 cog">
                      <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                      </svg>`,
          route: '/admin/sw-tabs',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ad saepe perspiciatis magnam harum quaerat vel fugit deleniti eius, natus id cupiditate odit dolor! Libero necessitatibus molestiae enim et. Cumque.'
        }
      ],
      menuGroup: [
        {
          title: 'I am collapsible content A!',
          items: [
            {
              title: 'I am collapsible content AB!',
              items: [
                {
                  title: 'I am collapsible content AAA!',
                },
                {
                  title: 'I am collapsible content ABB!',
                },
                {
                  title: 'I am collapsible content ACC!',
                }
              ]
            },
            {
              title: 'I am collapsible content AC!'
            },
            {
              title: 'I am collapsible content AD!'
            },
            {
              title: 'I am collapsible content AE!'
            },
            {
              title: 'I am collapsible content AF!'
            }
          ]
        },
        {
          title: 'I am collapsible content B!'
        },
        {
          title: 'I am collapsible content C!'
        },
        {
          title: 'I am collapsible content D!'
        }
      ],
      menu2: [
        {
          title: 'Buttons',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 star">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>`,
          route: '',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex beatae quas molestias veniam porro maxime modi voluptas explicabo, possimus laudantium corporis vero blanditiis ab asperiores error incidunt sint odit provident?'
        },
        {
          title: 'Cards',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 user">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                    </svg>`,
          route: '/admin/sw-form-input',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia laborum sint praesentium voluptatibus, quod vero temporibus. Sequi magni est numquam aut earum reiciendis, tempora sint temporibus dolorum distinctio. Eveniet.'
        },

        {
          title: 'Badges',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 star">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>`,
          route: '/admin/sw-badges',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error sit distinctio voluptatibus neque tempora explicabo velit itaque natus voluptatum! Atque ipsam libero qui rerum quibusdam, dignissimos voluptate minus! Quas?'
        },
        {
          title: 'Tabs Item',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 cog">
                      <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                      </svg>`,
          route: '/admin/sw-tabs',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur fuga accusantium harum atque cumque laudantium dignissimos laborum itaque nostrum, optio velit! Vitae tenetur minus, suscipit in ipsam cumque dolorum corrupti?'
        },
        {
          title: 'File Upload',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 star">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>`,
          route: '/admin/sw-tabs',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quaerat voluptas eius nihil ullam culpa vel laborum accusamus autem laudantium. Et ullam adipisci explicabo repellat ad at sequi cumque maxime?'
        },
        {
          title: 'Tabs Item',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 user">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                    </svg>`,
          route: '/admin/sw-tabs',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis molestiae ex magni officia, praesentium cumque distinctio minus quaerat vel nulla atque rem, suscipit autem quibusdam cupiditate delectus vero modi.'
        },
        {
          title: 'Typog raphy',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 cog">
                      <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                      </svg>`,
          route: '/admin/sw-tabs',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ad saepe perspiciatis magnam harum quaerat vel fugit deleniti eius, natus id cupiditate odit dolor! Libero necessitatibus molestiae enim et. Cumque.'
        }
      ],
      menuGroup: [
        {
          title: 'I am collapsible content A!',
          items: [
            {
              title: 'I am collapsible content AB!',
              items: [
                {
                  title: 'I am collapsible content AAA!',
                },
                {
                  title: 'I am collapsible content ABB!',
                },
                {
                  title: 'I am collapsible content ACC!',
                }
              ]
            },
            {
              title: 'I am collapsible content AC!'
            },
            {
              title: 'I am collapsible content AD!'
            },
            {
              title: 'I am collapsible content AE!'
            },
            {
              title: 'I am collapsible content AF!'
            }
          ]
        },
        {
          title: 'I am collapsible content B!'
        },
        {
          title: 'I am collapsible content C!'
        },
        {
          title: 'I am collapsible content D!'
        }
      ]
    }
  },
  computed: {
    getActiveItem() {
      return this.menu[this.activeIndex]
    },
    getActiveItem2() {
      return this.menu2[this.activeIndex2]
    }
  },
  methods: {
    setActive(index) {
      this.activeIndex = index
    },
    setActive2(index) {
      this.activeIndex2 = index
    }
  }
}
</script>
