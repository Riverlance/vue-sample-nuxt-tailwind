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
            <h1 class="font-bold uppercase">
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
      <main>
        <!-- Login -->
        <div>
          <a href="#">Log in</a>
          <a href="#">Sign up</a>
        </div>

        <!-- Header -->
        <header>
          <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 class="text-2xl font-semibold">For Ninjas</h3>
        </header>

        <!-- Recipes -->
        <div>
          <h4 class="font-bold">Latest Recipes</h4>

          <div>
            <!-- cards go here -->
            <div>
              <img src="/img/stew.jpg" alt="stew" />
              <div>
                <span>5 Bean Chili Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4 class="font-bold">Most Popular</h4>

          <div>
            <!-- cards go here -->
          </div>
        </div>

        <!-- Load more -->
        <div>
          <button>Load more</button>
        </div>
      </main>
    </div>

  </div>
</template>
