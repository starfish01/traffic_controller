<template>
  <header class="site-header">
    <a href="#" class="brand-main">
      ADMIN
    </a>
    <a
      href="#"
      class="nav-toggle"
      @click="onNavToggle"
    >
      <div class="hamburger hamburger--arrowturn">
        <div class="hamburger-box">
          <div class="hamburger-inner"/>
        </div>
      </div>
    </a>
    <ul class="action-list">
      <li>
        <v-dropdown :show-arrow="false">
          <a
            slot="activator"
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            class="avatar"
          >
          <i class="icon-fa icon-fa-user"></i>
          </a>
          <v-dropdown-item>
            <router-link class="dropdown-item" to="/admin/settings">
              <i class="icon-fa icon-fa-cogs"/> Settings
            </router-link>
          </v-dropdown-item>
          <v-dropdown-item>
            <a
              href="#"
              class="dropdown-item"
              @click.prevent="logout"
            >
              <i class="icon-fa icon-fa-sign-out"/> Logout
            </a>
          </v-dropdown-item>
        </v-dropdown>
      </li>
    </ul>
  </header>
</template>
<script type="text/babel">
import Auth from '../../../services/auth'

export default {
  methods: {
    onNavToggle () {
      this.$utils.toggleSidebar()
    },
    logout () {
      Auth.logout().then(() => {
        this.$router.replace('/login')
      })
    }
  }
}
</script>
