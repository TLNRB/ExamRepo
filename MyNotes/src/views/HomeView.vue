<script setup lang="ts">
/*----- Impor Components -----*/
import Note from "@/components/Note.vue";
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
  <Note />
</template>

<style scoped></style>
