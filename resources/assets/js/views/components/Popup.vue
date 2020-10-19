<template>
	<div>
		<sw-page-header title="Popup">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Home" />
          <sw-breadcrumb-item title="Components" to="/components/file-upload" />
          <sw-breadcrumb-item title="Popup" active />
        </sw-breadcrumb>
      </template>
    </sw-page-header>

		<sw-popup>
			<template v-slot:activator>
				<sw-button>Click Here</sw-button>
			</template>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
				aperiam blanditiis quia odio ipsam unde voluptates aut cum
				necessitatibus architecto numquam reprehenderit illum
				consequatur optio et ut. Numquam, sapiente nihil!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
				aperiam blanditiis quia odio ipsam unde voluptates aut cum
				necessitatibus architecto numquam reprehenderit illum
				consequatur optio et ut. Numquam, sapiente nihil!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
				aperiam blanditiis quia odio ipsam unde voluptates aut cum
				necessitatibus architecto numquam reprehenderit illum
				consequatur optio et ut. Numquam, sapiente nihil!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
				aperiam blanditiis quia odio ipsam unde voluptates aut cum
				necessitatibus architecto numquam reprehenderit illum
				consequatur optio et ut. Numquam, sapiente nihil!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
				aperiam blanditiis quia odio ipsam unde voluptates aut cum
				necessitatibus architecto numquam reprehenderit illum
				consequatur optio et ut. Numquam, sapiente nihil!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
				aperiam blanditiis quia odio ipsam unde voluptates aut cum
				necessitatibus architecto numquam reprehenderit illum
				consequatur optio et ut. Numquam, sapiente nihil!
			</p>
		</sw-popup>
	</div>
</template>
<script>

export default {
	data() {
		return {
			
		}
	}
}
</script>