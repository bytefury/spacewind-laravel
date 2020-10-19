<template>
	<div>
		<sw-page-header title="Form Laouts">
			<template v-slot:breadcrumbs>
				<sw-breadcrumb>
					<sw-breadcrumb-item title="Home" to="/dashboard" />
					<sw-breadcrumb-item title="Form" to="/form/form-layout" />
					<sw-breadcrumb-item title="Form Layout" active />
				</sw-breadcrumb>
			</template>
		</sw-page-header>
		<div>
			<!-- Simple Layout -->
			<sw-card class="my-4">
				<template v-slot:header>
					<span class="sw-section-title">Simple Layout</span>
				</template>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
					<sw-input-group label="First Name">
						<sw-input />
					</sw-input-group>
					<sw-input-group label="Last Name">
						<sw-input />
					</sw-input-group>
					<sw-input-group label="Surname">
						<sw-input />
					</sw-input-group>
					<sw-input-group label="Country">
						<sw-select
							v-model="country1"
							:options="options1"
							:searchable="true"
							:show-labels="false"
							:allow-empty="true"
							:multiple="false"
							placeholder="select a value "
						/>
					</sw-input-group>
					<sw-input-group label="Hobby">
						<sw-select
							v-model="hobby"
							:options="options2"
							:searchable="true"
							:show-labels="false"
							:allow-empty="true"
							:multiple="true"
							placeholder="select a value "
						/>
					</sw-input-group>
					<sw-input-group label="Amount">
						<sw-money v-model="money_1" :currency="currency_1"/>
					</sw-input-group>
					<sw-input-group label="Date Of Birth">
						<sw-date-picker v-model="date_1" placeholder="dd-mm-yyyy"/>
					</sw-input-group>
					<sw-input-group label="Description">
						<sw-textarea row="2" />
					</sw-input-group>
				</div>
				<template v-slot:footer>
					<div class="flex justify-end">
						<sw-button variant="primary-outline" class="mr-2">
							<svg class="h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"></path>
							</svg>
							Save
						</sw-button>
						<sw-button variant="primary-outline">Cancel</sw-button>
					</div>
				</template>
			</sw-card>

			<!-- Column Layout -->
			<sw-card class="my-4">
				<template v-slot:header>
					<span class="sw-section-title">Column Layout</span>
				</template>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-5">
					<div class="col-span-1">
						<span class="font-semibold">Basic Details</span>
					</div>
					<div class="grid grid-cols-1 col-span-4 gap-4 md:grid-cols-3">
						<sw-input-group label="First Name">
							<sw-input />
						</sw-input-group>
						<sw-input-group label="Last Name">
							<sw-input />
						</sw-input-group>
						<sw-input-group label="Surname">
							<sw-input />
						</sw-input-group>
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
						<sw-input-group label="Register No.">
							<sw-input prefix="REG" />
						</sw-input-group>
					</div>
				</div>
				<sw-divider class="my-10"/>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-5">
					<div class="col-span-1">
						<span class="font-semibold">Educational Details</span>
					</div>
					<div class="grid grid-cols-1 col-span-4 gap-4 md:grid-cols-3">
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
					<div class="grid grid-cols-1 col-span-4 gap-4 md:grid-cols-3">
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
						<sw-button variant="primary-outline" class="mr-2">
							<svg class="h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"></path>
							</svg>
							Save
						</sw-button>
						<sw-button variant="primary-outline">Cancel</sw-button>
					</div>
				</template>
			</sw-card>

			<!-- Horizontal Layout -->
			<sw-card class="my-4">
				<template v-slot:header>
					<span class="sw-section-title">Horizontal Layout</span>
				</template>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-5">
					<div class="col-span-1">
						<span class="font-semibold">Basic Details</span>
					</div>
					<div class="col-span-4">
						<sw-input-group variant="horizontal" label="First Name" class="mt-2">
							<sw-input />
						</sw-input-group>
						<sw-input-group variant="horizontal" label="Last Name" class="mt-2">
							<sw-input />
						</sw-input-group>
						<sw-input-group variant="horizontal" label="Surname" class="mt-2">
							<sw-input />
						</sw-input-group>
						<sw-input-group variant="horizontal" label="Email" class="mt-2">
							<sw-input type="email"/>
						</sw-input-group>
						<sw-input-group variant="horizontal" label="Phone Number" class="mt-2">
							<sw-input>
								<template v-slot:leftIcon>
									<svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
										<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
									</svg>
								</template>
							</sw-input>
						</sw-input-group>
						<sw-input-group variant="horizontal" label="Register No." class="mt-2">
							<sw-input prefix="REG" />
						</sw-input-group>
					</div>
				</div>
				<sw-divider class="my-10"/>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-5">
					<div class="col-span-1">
						<span class="font-semibold">Educational Details</span>
					</div>
					<div class="col-span-4">
						<sw-input-group variant="horizontal" label="School Name" class="mt-2">
							<sw-input />
						</sw-input-group>
						<sw-input-group variant="horizontal" label="Collage Name" class="mt-2">
							<sw-input />
						</sw-input-group>
						<sw-input-group variant="horizontal" label="University Name" class="mt-2">
							<sw-input />
						</sw-input-group>
						<sw-input-group variant="horizontal" label="Skill 1" class="mt-2">
							<sw-input />
						</sw-input-group>
						<sw-input-group variant="horizontal" label="Skill 2" class="mt-2">
							<sw-input />
						</sw-input-group>
						<sw-input-group variant="horizontal" label="Skill 3" class="mt-2">
							<sw-input />
						</sw-input-group>
					</div>
				</div>
				<template v-slot:footer>
					<div class="flex justify-end">
						<sw-button variant="primary-outline" class="mr-2">
							<svg class="h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"></path>
							</svg>
							Save
						</sw-button>
						<sw-button variant="primary-outline">Cancel</sw-button>
					</div>
				</template>
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
	}
}
</script>