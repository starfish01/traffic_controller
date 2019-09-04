<template>
  <div class="template-container">
    <header class="site-header">
      <a href="#" class="brand-main">

      </a>
      <ul class="action-list">
        <li class="action-item">
          <router-link to="/admin/dashboard/basic">Admin Dashboard</router-link>
        </li>
      </ul>
    </header>
    <transition
      name="fade"
      mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
