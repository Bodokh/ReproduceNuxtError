<template>
	!!!
	Crazy!
</template>
<script lang="ts" setup>
import { computed, onMounted, ref, watch, defineExpose } from 'vue'
import { useApplicationsStore } from '~~/stores/applications';

// const customerReviews = computed(() => data.value.value.customerReviews);
const router = useRouter();

defineExpose({
	router,
});
</script>
<script lang="ts">


export default defineComponent({
	data() {
		return {
			isLoggedIn: true,
			store: useApplicationsStore(),
		}
	},
	mounted() {
		const app = useNuxtApp();

	},
	methods: {
		async getUIImageUrl(url) {
			return '/assets/images/' + url;
		},
		playGuideVideo() {
			this.show_guide_video = true;

		},
	},
	watch: {
		$route(to, from) {
			if (to !== from) location.reload();
		},
		containerWidth() {
			console.log(this.containerWidth / 393)
		},
		guide_video_link(newValue) {

		}
	},
	computed: {
		guide_video_link() {
			return process.browser;
		},
	}
})
</script>

<style lang="scss">
.video_modal_style {
	margin-top: 2%;
}
.home-page_container {
	display: block;

	& .modal {
		z-index: 1;
	}
}
.welcome-chapter {
	color: white;
	margin-top: -75px;
	width: 100%;
	height: 737px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: right;
	@media screen and (max-width: 426px) {
		background-position: 25%;
	}
	&_content {
		padding-top: 186px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;

		@media screen and (max-width: 426px) {
			flex-direction: column-reverse;
			align-items: flex-start;
			padding-inline-start: 20px;
			padding-inline-end: 50px;
		}
	}
	&_text {
		max-width: 690px;
		& h1 {
			color: white;
			font-family: Omes v3 FM;
			font-style: normal;
			font-weight: bold;
			font-size: 64px;
			text-align: start;
			word-wrap: break-word;

			@media only screen and (max-width: 768px) {
				font-size: 36px;
				line-height: 110%;
				margin-top: 35px;
			}
		}
		& p {
			font-family: Heebo;
			font-style: normal;
			font-weight: normal;
			font-size: 24px;
			line-height: 150%;
			text-align: right;
			color: white;
			margin-bottom: 50px;
			@media only screen and (max-width: 426px) {
				font-size: 18px;
			}
		}
	}
}
.hotjobs-slider {
	display: block;
	padding-top: 100px;
	padding-bottom: 100px;
	background-position: right 103%, right 235%;
	background-repeat: no-repeat;

	&_title {
		font-family: Omes v3 FM;
		font-style: normal;
		font-weight: bold;
		font-size: 36px;
		color: var(--blue-primary);
	}

	&_actions {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 50px;

		& button {
			padding-inline: 23px;
		}
	}
}
.simple-progress {
	// padding-top: 100px;
	padding-bottom: 70px;
	height: 700px;

	height: fit-content;

	@media (max-width: 426px) {
		padding-top: 50px;
		padding-bottom: 30px;
	}

	&_title {
		font-family: Omes v3 FM;
		font-style: normal;
		font-weight: bold;
		font-size: 36px;
		line-height: 150%;

		text-align: center;

		color: var(--main-blue);
	}

	&_actions {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-top: 50px;

		@media only screen and (max-width: 426px) {
			flex-direction: column;
			align-items: center;
		}

		&-button {
			width: 175px;
		}
	}
}
.progress-card {
	@media only screen and (max-width: 426px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;

		&:nth-of-type(2n) {
			flex-direction: row-reverse;
		}
	}

	&_container {
		display: flex;
		gap: 20px;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		@media only screen and (max-width: 768px) {
			flex-direction: column;
		}
	}

	&_image {
		@media only screen and (max-width: 426px) {
			height: 140px;
		}
	}

	&_subtitle {
		font-family: Heebo;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		text-align: right;
		color: var(--main-blue);

		text-align: center;
		@media only screen and (max-width: 426px) {
			width: 150px;
		}
	}
	&_number {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 33px;
		height: 33px;
		color: white;
		background: var(--blue-primary);
		border-radius: 50%;
	}
}
.blog-chapter {
	min-height: 450px;
	display: block;
	background-image: url("/assets/backgrounds/blog-post.svg");
	background-repeat: no-repeat;
	background-position: right top;
	background-size: initial;

	&_title {
		font-family: Omes v3 FM;
		font-style: normal;
		font-weight: bold;
		font-size: 36px;
		text-align: center;
		color: var(--main-blue);
		margin-bottom: 50px;
	}
}
.reviews-chapter {
	padding-top: 150px;
	display: block;
	background-image: url("/assets/backgrounds/testimonials-cloud.svg");
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
}

.our-partners {
	display: block;
	padding-top: 130px;
	padding-bottom: 290px;

	&_title {
		font-family: Omes v3 FM;
		font-style: normal;
		font-weight: bold;
		font-size: 36px;
		line-height: 150%;

		text-align: right;

		color: var(--blue-primary);

		margin-bottom: 54px;
		padding-inline-start: 200px;

		@media (max-width: 426px) {
			font-size: 24px;
			// padding-inline-start: 25px;
		}
	}

	&_logo {
		display: block;
	}
}
.faq-chapter {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 60px;
	padding-bottom: 80px;

	background-image: url("/assets/backgrounds/faq-ground.svg");
	background-position: right top;
	background-repeat: no-repeat;

	padding-inline: 23%;

	@media (max-width: 768px) {
		padding-inline: 10%;
		background-position: -13% top;
	}
	&_title {
		font-family: Omes v3 FM;
		font-style: normal;
		font-weight: bold;
		font-size: 36px;
		line-height: 150%;
		/* or 54px */

		text-align: start;
		width: 100%;

		/* Main Blue */

		color: var(--main-blue);

		margin-bottom: 30px;
	}

	&_action {
		padding-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

.job-card {
	// margin: 0px !important;
	flex-basis: content;
	// height: unset !important;
	overflow: hidden;
	width: 400px;
	height: 400px;

	&:hover {
		cursor: pointer;
	}

	&__top {
		height: 350px;

		&__image {
			object-fit: unset;
		}
	}

	&__filler {
		visibility: hidden;
	}

	&__bottom {
		height: unset !important;
	}
}
</style>
