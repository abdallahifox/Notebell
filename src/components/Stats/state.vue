<template>
  <div class="columns">
    <div class="column-6 mx-auto">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Satets</p>
          <button class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </header>
        <div class="card-content">
          <div class="content">
            <strong> Number OF Notes Is</strong> :
            {{ notes.getNumNotes }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Notebell } from "../../Store/notes";

const notes = Notebell();
</script>
