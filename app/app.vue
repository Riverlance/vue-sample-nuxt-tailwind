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
      <main class="px-16 py-6">
        <!-- Login -->
        <div>
          <a href="#" class="text-primary">Log in</a>
          <a href="#" class="text-primary">Sign up</a>
        </div>

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
            <div>
              <img src="/img/stew.jpg" alt="stew" />
              <div>
                <span>5 Bean Chili Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

          <div class="mt-8">
            <!-- cards go here -->
          </div>
        </div>

        <!-- Load more -->
        <div class="bg-secondary-100 text-secondary-200">
          <button>Load more</button>
        </div>
      </main>
    </div>

  </div>
</template>
