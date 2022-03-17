<template>
	<div class="about">
		<div>
			<h1>Checked: {{ checked }}</h1>
		</div>
	</div>
</template>

<script lang="ts">
// import TextInput from '../components/forms/TextInput.vue'
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			checked: null as boolean,
		};
	},
})
</script>
