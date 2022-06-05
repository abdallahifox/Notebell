<template>
  <div class="has-background-dark p-4">
    <div class="field">
      <label class="label has-text-white">{{ lable }}</label>
      <div class="control">
        <textarea
          v-model="massage"
          class="textarea"
          placeholder="Textarea"
        ></textarea>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button
          @click="addNote"
          class="button is-link is-meduim"
          :disabled="!massage"
        >
          {{ type }}
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
import { useRouter } from "vue-router";
import { Notebell } from "../../Store/notes";

/*
#### Props
*/
const props = defineProps(["type", "lable", "edit"]);

/*

/*
#### Refs
*/

const massage = ref("");

const notes = Notebell();

const router = useRouter();

/*
#### Methods 
*/

const addNote = () => {

    notes.addNewNote(massage.value);
  massage.value = "";
};
</script>
