<script setup lang="ts">
/*----- Impor Components -----*/
import Note from "@/components/Note.vue";
import DeleteNote from "@/components/DeleteNote.vue";
/*----- Impor Database -----*/
import notesDB from "../data/notesDB.ts";
</script>

<template>
  <header
    class="my-[2rem] flex flex-col gap-[1.5rem] justify-center items-center w-[100%] px-[1rem] xs:flex-row xs:justify-between sm:px-[2rem] md:px-[4rem] lg:px-[6rem] lg:my-[3rem] xl:px-[8rem] xxxl:px-[10rem] xxxxl:px-[20rem]"
  >
    <h1
      class="text-[2.5rem] font-bold text-textSemiDark sm:text-[3rem] lg:text-[4rem] xxxl:text-[5rem]"
    >
      My Notes
    </h1>
    <div
      class="w-[40px] h-[40px] flex justify-center items-center bg-textDark text-textLight text-[1rem] font-regular rounded-full cursor-pointer hover:scale-[115%] duration-[.2s] ease-in-out xxxl:w-[50px] xxxl:h-[50px] xxxl:text-[1.125rem]"
    >
      +
    </div>
  </header>
  <main
    class="my-[4rem] flex flex-wrap gap-[1rem] justify-center items-center px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem] lg:my-[3rem] xl:px-[8rem] xxxl:px-[10rem] xxxxl:px-[20rem]"
  >
    <Note v-for="note in notesDB" :key="note.id" :note="note" />
    <div
      class="hidden h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 bottom-0 bg-bgModalOverlay"
    >
      <DeleteNote />
    </div>
  </main>
</template>

<style scoped></style>
