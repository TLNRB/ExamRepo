<script setup lang="ts">
//--Prop Handling
</script>

<template>
  <section
    class="absolute top-[50%] translate-y-[-50%] w-[100%] flex justify-center items-center px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] xxxl:px-[10rem] xxxxl:px-[20rem]"
  >
    <div
      class="w-[100%] flex flex-col gap-[1rem] bg-textLight p-[1rem] rounded-[10px] sm:gap-[1.5rem] sm:p-[1.75rem] md:w-[700px]"
    >
      <div
        class="p-[.75rem] font-[500] text-center border-[1.5px] border-textSemiDark rounded-[3px] sm:text-[1.125rem] md:text-[1.25rem]"
      >
        Do you want to delete this note?
      </div>
      <div class="flex flex-col gap-[.5rem]">
        <button
          class="w-[100%] py-[.25rem] font-[500] bg-green-600 text-textLight rounded-[3px] md:py-[.375rem] md:text-[1.125rem]"
        >
          Yes
        </button>
        <button
          class="w-[100%] py-[.25rem] font-[500] bg-red-700 text-textLight rounded-[3px] md:py-[.375rem] md:text-[1.125rem]"
        >
          No
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
