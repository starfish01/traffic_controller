<template>
  <div class="header-bottom">
    <div class="header-nav vue-dropdown-menu">
      <v-dropdown active-url="/admin/dashboard">
        <a slot="activator" href="#">
          <i class="icon-fa icon-fa-dashboard"/>Dashboard
        </a>

        <v-dropdown-item>
          <router-link to="/admin/dashboard/basic">
            Basic
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/basic-ui">
        <a slot="activator" href="#">
          <i class="icon-fa icon-fa-star"/>Basic UI
        </a>

        <v-dropdown-item>
          <router-link to="/admin/basic-ui/buttons">
            Buttons
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/basic-ui/cards">
            Cards
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/basic-ui/typography">
            Typography
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/basic-ui/tables">
            Tables
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/basic-ui/progress-bars">
            Progress Bar
          </router-link>
        </v-dropdown-item>
      </v-dropdown>





      <v-dropdown active-url="/admin/settings">
        <router-link slot="activator" to="/admin/settings">
          <i class="icon-fa icon-fa-cogs"/>Settings
        </router-link>
      </v-dropdown>
    </div>
  </div>
</template>
