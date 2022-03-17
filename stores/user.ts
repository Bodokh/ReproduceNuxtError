import { defineStore } from "pinia";

export type UserState = {
	user: any;
	userDetails: any;
	isGoldUser: boolean;
	videos: any;
	companies: any;
	selectedCompany: any;
}
export const useUserStore = defineStore({
	id: "user",
	state: () => ({
		// General user details
		user: null,
		userDetails: {},
		isGoldUser: false,
		videos: null,

		// Business user details
		companies: null,
		selectedCompany: null
	} as UserState),
	actions: {
	},
	getters: {
		userGet: state => state.user
	},
})