<template>
  <div class="notes mt-6">
    <div class="card">
      <div class="card-content">
        <div class="content">{{ note.desc }}</div>
      </div>
      <footer class="card-footer">
        <RouterLink :to="`/edit/${note.id}`" class="card-footer-item"
          >Edit</RouterLink
        >
        <a
          href="#"
          class="card-footer-item"
          @click.prevent="notes.deleteHandler(note.id)"
          >Delete</a
        >
      </footer>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Notebell } from "../../Store/notes";

const notes = Notebell();

const props = defineProps({
  note: {
    type: Object,
    requierd: true,
  },
});
</script>
