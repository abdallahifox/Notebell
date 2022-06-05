<template>
  <div class="has-background-dark p-4">
    <div class="field">
      <label class="label has-text-white">{{ lable }}</label>
      <div class="control">
        <textarea
          v-model="editNote"
          class="textarea"
          placeholder="Textarea"
        ></textarea>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button
          @click="EditNote"
          class="button is-link is-meduim"
          :disabled="!editNote"
        >
          {{ type }}
        </button>
      </div>
      <div class="control">
        <button @click="$router.back()" class="button is-link is-meduim">
          No
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
/* 
#### Imports
*/

import { defineProps, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Notebell } from "../../Store/notes";

/*
#### Props
*/
const props = defineProps(["type", "lable"]);

/*

/*
#### Refs
*/

const editNote = ref("");

/*  The Store */
const notes = Notebell();

/* Use The Route To Pass The params*/
const route = useRoute();
const router = useRouter();

editNote.value = notes.editNote(route.params.id);
/* Methods */
const EditNote = () => {
  let newNote = editNote.value;

  notes.editNotesHandelar(newNote, route.params.id);

  editNote.value = "";

  router.push("/");
};
</script>
