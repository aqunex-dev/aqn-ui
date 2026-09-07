<template>
  <div class="min-h-screen w-full bg-white text-gray-900 dark:bg-dark dark:text-white flex flex-col">
    <slot name="header" />

    <main class="grow bg-white text-gray-900 dark:bg-dark dark:text-white">
        <slot />
    </main>

    <slot name="footer" />
  </div>
</template>
