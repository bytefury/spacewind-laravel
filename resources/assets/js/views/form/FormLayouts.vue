<template>
	<div>
		<sw-page-header title="Form Laouts">
			<template v-slot:breadcrumbs>
				<sw-breadcrumb>
					<sw-breadcrumb-item title="Home" to="/dashboard" />
					<sw-breadcrumb-item title="Form" to="/form/form-layouts" />
					<sw-breadcrumb-item title="Form Layouts" active />
				</sw-breadcrumb>
			</template>
		</sw-page-header>
		<div>
            <!-- Column Layout -->
            <sw-card class="my-4">
                <template v-slot:header>
                    <span class="sw-section-title">Tow Column Layout</span>
                </template>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-5">
                    <div class="col-span-1">
                        <span class="font-semibold">Basic Details</span>
                    </div>
                    <div class="grid grid-cols-1 col-span-4 gap-4 md:grid-cols-2">
                        <sw-input-group label="First Name">
                            <sw-input />
                        </sw-input-group>
                        <sw-input-group label="Last Name">
                            <sw-input />
                        </sw-input-group>
                        <!-- <sw-input-group label="Surname">
                            <sw-input />
                        </sw-input-group> -->
                        <sw-input-group label="Email">
                            <sw-input type="email"/>
                        </sw-input-group>
                        <sw-input-group label="Phone Number">
                            <sw-input>
                                <template v-slot:leftIcon>
                                    <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                </template>
                            </sw-input>
                        </sw-input-group>
                        <!-- <sw-input-group label="Register No.">
                            <sw-input prefix="REG" />
                        </sw-input-group> -->
                    </div>
                </div>
                <sw-divider class="my-10"/>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-5">
                    <div class="col-span-1">
                        <span class="font-semibold">Educational Details</span>
                    </div>
                    <div class="grid grid-cols-1 col-span-4 gap-4 md:grid-cols-2">
                        <sw-input-group label="School Name">
                            <sw-input />
                        </sw-input-group>
                        <sw-input-group label="Collage Name">
                            <sw-input />
                        </sw-input-group>
                        <sw-input-group label="University Name">
                            <sw-input />
                        </sw-input-group>
                        <sw-input-group label="Skill 1">
                            <sw-input />
                        </sw-input-group>
                        <sw-input-group label="Skill 2">
                            <sw-input />
                        </sw-input-group>
                        <sw-input-group label="Skill 3">
                            <sw-input />
                        </sw-input-group>
                    </div>
                </div>
                <sw-divider class="my-10"/>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-5">
                    <div class="col-span-1">
                        <span class="font-semibold">Address Details</span>
                    </div>
                    <div class="grid grid-cols-1 col-span-4 gap-4 md:grid-cols-2">
                        <sw-input-group label="Country">
                            <sw-select
                                v-model="country1"
                                :options="options1"
                                :searchable="true"
                                :show-labels="false"
                                :allow-empty="true"
                                :multiple="false"
                                placeholder="select a Country "
                            />
                        </sw-input-group>
                        <sw-input-group label="State">
                            <sw-input />
                        </sw-input-group>
                        <sw-input-group label="City">
                            <sw-input />
                        </sw-input-group>
                        <sw-input-group label="Address 1">
                            <sw-input />
                        </sw-input-group>
                        <sw-input-group label="Address 2">
                            <sw-input />
                        </sw-input-group>
                        <sw-input-group label="ZIP code">
                            <sw-input />
                        </sw-input-group>
                    </div>
                </div>
                <template v-slot:footer>
                    <div class="flex justify-end">
                        <sw-button variant="primary-outline" class="mr-2">Cancel</sw-button>
                        <sw-button variant="primary">
                            <svg class="h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"></path>
                            </svg>
                            Save
                        </sw-button>
                    </div>
                </template>
            </sw-card>

            <!-- Horizontal Layout -->
            <sw-card class="my-4">
                <template v-slot:header>
                    <span class="sw-section-title">Horizontal Layout</span>
                </template>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-5">
                    <div class="col-span-4">
                        <sw-input-group variant="horizontal" label="First Name" class="my-10">
                            <sw-input />
                        </sw-input-group>
                        <sw-input-group variant="horizontal" label="Last Name" class="my-10">
                            <sw-input />
                        </sw-input-group>
                        <sw-input-group variant="horizontal" label="Surname" class="my-10">
                            <sw-input />
                        </sw-input-group>
                        <sw-input-group variant="horizontal" label="Email" class="my-10">
                            <sw-input type="email" class="w-64"/>
                        </sw-input-group>
                        <sw-input-group variant="horizontal" label="Phone Number" class="my-10">
                            <sw-input>
                                <template v-slot:leftIcon>
                                    <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                </template>
                            </sw-input>
                        </sw-input-group>
                        <sw-input-group variant="horizontal" label="Register No." class="my-10">
                            <sw-input prefix="REG" />
                        </sw-input-group>
                    </div>
                </div>

                <template v-slot:footer>
                    <div class="flex justify-end">
                        <sw-button variant="primary-outline" class="mr-2">Cancel</sw-button>
                        <sw-button variant="primary">
                            <svg class="h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"></path>
                            </svg>
                            Save
                        </sw-button>
                    </div>
                </template>
            </sw-card>

            <!-- Inline Form Layout -->
            <sw-card class="my-4">
                <template v-slot:header>
                    <span class="sw-section-title">Inline Form Layout</span>
                </template>
                <div class="flex flex-row items-center">
                    <sw-input-group label="email@example.com" variant="horizontal">
                        <sw-input :type="getInputType" placeholder="Password">
                            <template v-slot:rightIcon>
                                <svg v-if="isShowPassword" class="w-5 h-5 mr-1 text-gray-500 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" @click="isShowPassword = !isShowPassword">
                                    <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path>
                                </svg>
                                <svg
                                    v-else
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="w-5 h-5 mr-1 text-gray-500 cursor-pointer"
                                    @click="isShowPassword = !isShowPassword"
                                >
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                    <path
                                        fill-rule="evenodd"
                                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </template>
                        </sw-input>
                    </sw-input-group>
                    <sw-button class="ml-2">Confirm identity</sw-button>
                </div>
            </sw-card>
		</div>
	</div>
</template>
<script>

export default {
	data() {
		return {
			country1: '',
			hobby: '',
			options1: ['India', 'USA', 'UK', 'Japan'],
			options2: ['Cricket', 'Football', 'Wallyball', 'Ludo'],
			money_1: 0,
			money_2: 0,
			date_1: null,
			isShowPassword: false,
			date_2: null,
			currency_1: {
        decimal: '.',
        thousands: ',',
        prefix: '$',
        precision: 2,
        masked: false
			},
			currency_2: {
        decimal: '.',
        thousands: ',',
        suffix: 'SAR',
        precision: 2,
        masked: false
			},
			config: {
				enableTime: true
			}
		}
	},
	computed: {
    getInputType() {
      if (this.isShowPassword) {
        return 'text'
      }
      return 'password'
    }
  },
}
</script>
