<template>
  <div>
    <sw-page-header title="Advanced Elements">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Dashboard" />
          <sw-breadcrumb-item title="Form" to="/form/buttons" />
          <sw-breadcrumb-item title="Advanced Elements" active />
        </sw-breadcrumb>
      </template>
    </sw-page-header>

    <sw-card class="md:mt-10 sm:mt-10">
      <template v-slot:header>
        <h3 class="sw-section-title">Select Inputs</h3>
      </template>
      <div
        class="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1"
      >
        <sw-input-group label="Single Select">
          <sw-select
            v-model="database_connection1"
            :options="options2"
            :searchable="true"
            :show-labels="false"
            :allow-empty="true"
            :multiple="false"
            placeholder="select a value"
          />
        </sw-input-group>
        <sw-input-group label="Multi Select">
          <sw-select
            v-model="database_connection2"
            :options="options2"
            :searchable="true"
            :show-labels="false"
            :allow-empty="true"
            :multiple="true"
            placeholder="select a value"
          />
        </sw-input-group>
      </div>
    </sw-card>
    <sw-card class="md:mt-10 sm:mt-10">
      <template v-slot:header>
        <h3 class="sw-section-title">Money Input</h3>
      </template>
      <div
        class="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1"
      >
				<sw-input-group label="Prefix currency Symbol">
					<sw-money v-model="money_1" :currency="currency_1"/>
				</sw-input-group>
				<sw-input-group label="Suffix currency Symbol">
					<sw-money v-model="money_2" :currency="currency_2"/>
				</sw-input-group>
      </div>
    </sw-card>
		<sw-card class="md:mt-10 sm:mt-10">
      <template v-slot:header>
        <h3 class="sw-section-title">Date & Time Input</h3>
      </template>
      <div
        class="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1"
      >
				<sw-input-group label="Date">
					<sw-date-picker v-model="date_1" placeholder="dd-mm-yyyy"/>
				</sw-input-group>
				<sw-input-group label="Date & Time">
					<sw-date-picker v-model="date_2" placeholder="dd-mm-yyyy" :config="config" />
				</sw-input-group>
      </div>
    </sw-card>
  </div>
</template>

<script>

export default {
	data() {
		return {
			database_connection1: '',
			database_connection2: '',
			options1: ['sqlite', 'mysql', 'pgsql', 'sqlsrv'],
			options2: ['sqlite', 'mysql', 'pgsql', 'sqlsrv'],
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
	},
}
</script>
