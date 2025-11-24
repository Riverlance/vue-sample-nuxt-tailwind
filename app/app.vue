<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->


    <!-- Content wrapper -->
    <div>

      <!-- Navigation -->
      <div>
        <nav>

          <!-- Logo -->
          <div>
            <h1 class="font-bold uppercase p-4 border-b border-gray-100">
              <a href="/">Food Ninja</a>
            </h1>
          </div>

          <!-- Links -->
          <ul>
            <li class="text-gray-700 font-bold">
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Main -->
      <main class="px-16 py-6 bg-gray-100">
        <!-- Login -->
        <div class="flex justify-center md:justify-end">
          <a href="#" class="text-primary">Log in</a>
          <a href="#" class="text-primary ml-2">Sign up</a>
        </div>

        <!-- <div class="flex items-center justify-center">
          <div class="bg-red-500 h-4 w-6"></div>
          <div class="bg-blue-500 h-8 w-6"></div>
          <div class="bg-green-500 h-12 w-6"></div>
        </div> -->

        <!-- Header -->
        <header>
          <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 class="text-2xl font-semibold">For Ninjas</h3>
        </header>

        <!-- Recipes -->
        <div>
          <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>

          <div class="mt-8">
            <!-- cards go here -->
            <div class="bg-white rounded overflow-hidden shadow-md">
              <img src="/img/stew.jpg" alt="stew" />
              <div class="m-4">
                <span class="font-bold">5 Bean Chili Stew</span>
                <span class="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

          <div class="mt-8">
            <!-- cards go here -->
          </div>
        </div>

        <!-- Load more -->
        <div class="flex justify-center">
          <button class="bg-secondary-100 text-secondary-200">Load more</button>
        </div>
      </main>
    </div>

  </div>
</template>
