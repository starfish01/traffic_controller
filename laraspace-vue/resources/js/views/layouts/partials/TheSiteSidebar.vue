<template>
  <div class="sidebar-left">
    <div class="sidebar-body scroll-pane">
      <div class="side-nav">
        <v-collapse accordion>
          <v-collapse-item active-url="/admin/dashboard">
            <a slot="item-title" href="#">
              <i class="icon-fa icon-fa-dashboard"/>Dashboard
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link to="/admin/dashboard/basic">
              Basic
            </router-link>

          </v-collapse-item>


          <v-collapse-item active-url="/admin/basic-ui">
            <a slot="item-title" href="#">
              <i class="icon-fa icon-fa-star"/>Basic UI
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link to="/admin/basic-ui/buttons">
              Buttons
            </router-link>

            <router-link to="/admin/basic-ui/cards">
              Cards
            </router-link>

            <router-link to="/admin/basic-ui/typography">
              Typography
            </router-link>

            <router-link to="/admin/basic-ui/tables">
              Tables
            </router-link>

            <router-link to="/admin/basic-ui/progress-bars">
              Progress Bars
            </router-link>
          </v-collapse-item>

          <v-collapse-item active-url="/admin/chart">
            <a slot="item-title" href="#">
              <i class="icon-fa icon-fa-bar-chart"/>Charts
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link to="/admin/charts/chartjs">
              Chart JS
            </router-link>


          </v-collapse-item>

          <v-collapse-item active-url="/admin/users">
            <a slot="item-title" href="#">
              <i class="icon-fa icon-fa-user"/>Users
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link to="/admin/users/profile">
              Profile
            </router-link>

            <router-link to="/admin/users/all">
              All Users
            </router-link>
          </v-collapse-item>

          <v-collapse-item active-url="/admin/settings">
            <router-link
              slot="item-title"
              to="/admin/settings">
              <i class="icon-fa icon-fa-cogs"/>Settings
            </router-link>
          </v-collapse-item>
        </v-collapse>
      </div>
    </div>
  </div>
</template>
