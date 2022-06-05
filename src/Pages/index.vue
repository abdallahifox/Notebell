<template>
  <div class="mt-4 p-4 container is-max-desktop">
    <div class="Text">
      <addNewNote lable="Add A Note" type="Add"></addNewNote>
    </div>
    <div class="Notes">
      <Notes v-for="note in notes.notes" :key="note.id" :note="note"></Notes>
    </div>
  </div>
</template>

<script setup>
/* 
  #### Import
  */
import addNewNote from "../components/Inputs/addNewNote.vue";
import Notes from "../components/Notes/note.vue";
import { Notebell } from "../Store/notes";

/*
#### store
*/
const notes = Notebell();
</script>
