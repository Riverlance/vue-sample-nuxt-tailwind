<template>
  <div>

    <div class="p-8 text-center">
      <h1 class="text-4xl text-blue-600 font-bold">Tailwind JIT Tutorial</h1>
      <h2 class="text-2xl text-gray-500 font-semibold">(Just in Time)</h2>
    </div>

    <div class="p-8">
      <button class="bg-blue-600 text-white p-2 rounded">Click me</button>
      <button class="text-white p-2 rounded">Click me</button>
    </div>

    <div class="p-8">
      <h3 class="first-letter:font-bold first-letter:text-green-500">Todos:</h3>
      <ul class="my-4 list-disc marker:text-blue-600 list-inside">
        <li class="marker:text-green-500">Get out of bed</li>
        <li class="selection:bg-pink-500">Play Mario Kart</li>
        <li class="selection:bg-purple-500">Do some work</li>
      </ul>
      <p class="first-line:font-semibold first-letter:text-6xl first-line:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quaerat laudantium aperiam non tempore rerum quia inventore praesentium quam officiis itaque, corporis pariatur quos quidem quibusdam deleniti quae quo dolores?</p>
    </div>

    <div class="p-8">
      <button class="bg-[#f46225] text-[#fff6ca] p-2 rounded">click me</button>
      <p class="text-[24px] mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusantium, eaque tempore sunt omnis ea, hic facere nulla vero, veniam dolor ad velit? Error, doloremque alias et temporibus maxime atque!</p>
    </div>

    <div class="p-8">
      <button class="bg-[color:var(--primary)] text-white p-2 rounded">click me</button>
      <p class="text-[length:var(--leadFont)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius at nostrum assumenda totam illum quis culpa officia dicta voluptates. Obcaecati doloremque ipsum sunt nemo maxime, repellendus a iusto laboriosam.</p>
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped>

</style>