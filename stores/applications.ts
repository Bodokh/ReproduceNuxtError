import { defineStore } from "pinia";

export type ApplicationState = {
  applications: any;
  currentCandidate: any;
  note: any;
}

const updatenote: string = "update-note";

export const useApplicationsStore = defineStore({
  id: "applications",
  state: () =>
  ({
    applications: null,
    currentCandidate: null,
    note: null
  } as ApplicationState),
  actions: {
    async fetchApplications() {
      try {
      } catch (err) {
        console.log(err)
      }
    },
    async fetchCandidate(id) {
      try {
        this.$patch({
          note: null,
          currentCandidate: null
        });
      } catch (err) {
        console.log(err)
      }
    },
    async updatenote(note) {
      const id = this.currentCandidate.id
      try {
        const result =`/applications/note/${id}/${updatenote}`;

        this.$patch({
          note: note
        })

        return true;
      } catch (err) {
        console.log(err)

        return false
      }
    }
  },
  getters: {
    getApplications: state => state.applications
  }
})

