import { defineStore } from 'pinia'

export const Notebell = defineStore('notes', {
  state: () => {
    return { 
      notes : [
        {
          id: "1",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis mauris",
        },
        {
          id: "2",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis maurisadipiscingadipiscingadipiscingadipiscingadipiscingadipiscing",
        },
        {
          id: "3",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis maurisLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis maurisLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis mauris",
        },
      ],
      newEdit:'',

    }
  },

  actions : {
      deleteHandler(id){
        this.notes = this.notes.filter(item => {
          return item.id !== id
        })
      },
      addNewNote(newNote){
        let currentDate = new Date().getUTCMilliseconds()
        let id = currentDate.toString()
        
        let newNotes = {
          id: id,
          desc: newNote
        }

        this.notes.unshift(newNotes)
      },
      editNotesHandelar(edit, id){
        let index = this.notes.findIndex(note => note.id === id)

        this.notes[index].desc = edit
      }
  },
  getters : {
    editNote: (state) => {
      return (id) => {
        return state.notes.filter(note => note.id === id)[0].desc
      }
    },
    getNumNotes: (state) => {
      return state.notes.length
    }
  }
})