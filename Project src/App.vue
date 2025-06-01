<template>
  <div id="app" :class="{'dark-mode': isDarkMode}">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  },
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode;
    }
  }
}
</script>

<style>
.dark-mode {
  background-color: #333;
  color: #f0f0f0;
  min-height: 100vh; /* Ensure the dark background covers the whole viewport height */
}

.dark-mode a {
  color: #87cefa; /* Light Sky Blue for links in dark mode */
}

/* Specific adjustments for NavBar in dark mode if necessary */
.dark-mode .navbar-inverse {
  background-color: #222; /* Darker navbar background */
  border-color: #080808; /* Darker border for navbar */
}

.dark-mode .navbar-inverse .navbar-brand {
  color: #9d9d9d; /* Adjust brand color for dark mode */
}
.dark-mode .navbar-inverse .navbar-brand:hover,
.dark-mode .navbar-inverse .navbar-brand:focus {
  color: #fff;
}

.dark-mode .navbar-inverse .navbar-nav > li > a {
  color: #9d9d9d; /* Adjust nav link color */
}
.dark-mode .navbar-inverse .navbar-nav > li > a:hover,
.dark-mode .navbar-inverse .navbar-nav > li > a:focus {
  color: #fff;
}

.dark-mode .navbar-inverse .navbar-nav > .active > a,
.dark-mode .navbar-inverse .navbar-nav > .active > a:hover,
.dark-mode .navbar-inverse .navbar-nav > .active > a:focus {
  color: #fff;
  background-color: #080808; /* Active link background in dark mode */
}

/* Style for the toggle button itself in dark mode if needed */
.dark-mode .navbar-btn {
  color: #ccc;
  background-color: #444;
  border-color: #555;
}
.dark-mode .navbar-btn:hover,
.dark-mode .navbar-btn:focus {
  color: #fff;
  background-color: #555;
  border-color: #666;
}

/* Adjustments for other components like cards or modals if they exist directly in App.vue or globally */
.dark-mode .panel { /* Example for Bootstrap panels if used */
  background-color: #444;
  border-color: #555;
}

.dark-mode .list-group-item { /* Example for Bootstrap list groups */
  background-color: #3a3a3a;
  border-color: #555;
  color: #f0f0f0;
}

/* Dark Mode: Form Elements */
.dark-mode input[type="text"],
.dark-mode input[type="email"],
.dark-mode input[type="password"],
.dark-mode input[type="number"],
.dark-mode input[type="search"],
.dark-mode textarea,
.dark-mode .form-control { /* General Bootstrap form control */
  background-color: #555;
  border-color: #666;
  color: #f0f0f0;
}

.dark-mode input[type="text"]:focus,
.dark-mode input[type="email"]:focus,
.dark-mode input[type="password"]:focus,
.dark-mode input[type="number"]:focus,
.dark-mode input[type="search"]:focus,
.dark-mode textarea:focus,
.dark-mode .form-control:focus {
  background-color: #606060;
  border-color: #888;
  color: #f0f0f0;
  box-shadow: none; /* Remove default Bootstrap focus shadow if desired or customize */
}

.dark-mode .form-control::placeholder {
  color: #aaa;
}

.dark-mode .form-check-input { /* For Bootstrap checkboxes/radios */
  /* Basic styling, might need more for custom ones */
  border-color: #666;
}
.dark-mode .form-check-label {
  color: #f0f0f0;
}

/* Dark Mode: Buttons */
.dark-mode .btn-default,
.dark-mode .btn { /* General .btn for non-contextual buttons */
  color: #f0f0f0;
  background-color: #555;
  border-color: #666;
}
.dark-mode .btn-default:hover,
.dark-mode .btn:hover {
  color: #fff;
  background-color: #606060;
  border-color: #777;
}
.dark-mode .btn-default:focus,
.dark-mode .btn:focus {
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); /* Example focus */
}


.dark-mode .btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.dark-mode .btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}
.dark-mode .btn-primary:focus {
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

.dark-mode .btn-danger { /* Example for other contextual buttons */
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
}
.dark-mode .btn-danger:hover {
    background-color: #c82333;
    border-color: #bd2130;
}

/* Dark Mode: Card Components */
/* Assuming a generic .card class as per Bootstrap 4/5 or custom */
.dark-mode .card {
  background-color: #3E3E3E; /* Slightly lighter than main bg for depth */
  border-color: #555;
  color: #f0f0f0;
}
.dark-mode .card-header {
  background-color: #484848;
  border-bottom-color: #555;
  color: #f0f0f0;
}
.dark-mode .card-body {
  color: #f0f0f0;
}
.dark-mode .card-title {
  color: #f0f0f0;
}
.dark-mode .card-text {
  color: #ddd; /* Slightly dimmer text for less emphasis if needed */
}

/* Dark Mode: Modals */
.dark-mode .modal-content {
  background-color: #3a3a3a;
  color: #f0f0f0;
  border-color: #555;
}
.dark-mode .modal-header {
  border-bottom-color: #555;
}
.dark-mode .modal-header .close { /* Modal close button */
  color: #fff;
  opacity: 0.8;
  text-shadow: none; /* Remove default text shadow if any */
}
.dark-mode .modal-header .close:hover {
  opacity: 1;
}
.dark-mode .modal-footer {
  border-top-color: #555;
}

/* Dark Mode: Tables (Bootstrap specific classes) */
.dark-mode .table {
  color: #f0f0f0;
}
.dark-mode .table th,
.dark-mode .table td {
  border-color: #555;
}
.dark-mode .table thead th {
  border-bottom-color: #666; /* Stronger border for header bottom */
}
.dark-mode .table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(255, 255, 255, 0.03); /* Very subtle striping */
}
.dark-mode .table-hover tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.05);
}
.dark-mode .table-bordered {
    border-color: #555;
}

/* Dark Mode: Jumbotron */
.dark-mode .jumbotron {
    background-color: #2c2c2c; /* Darker than cards */
    color: #f0f0f0;
}

/* Dark Mode: Breadcrumbs (Bootstrap) */
.dark-mode .breadcrumb {
    background-color: #444;
    color: #ccc;
}
.dark-mode .breadcrumb-item a {
    color: #87cefa;
}
.dark-mode .breadcrumb-item.active {
    color: #bbb;
}

/* Dark Mode: Pagination (Bootstrap) */
.dark-mode .pagination .page-link {
    background-color: #555;
    border-color: #666;
    color: #87cefa;
}
.dark-mode .pagination .page-link:hover {
    background-color: #606060;
}
.dark-mode .pagination .page-item.active .page-link {
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
}
.dark-mode .pagination .page-item.disabled .page-link {
    background-color: #444;
    border-color: #555;
    color: #888;
}

/* Dark Mode: Badges (Bootstrap) */
.dark-mode .badge-secondary { /* Example, can add for .badge-primary etc. */
    background-color: #6c757d;
    color: #fff;
}
.dark-mode .badge-light {
    background-color: #555; /* Make light badges darker */
    color: #f0f0f0;
}

/* Dark Mode: Progress Bars (Bootstrap) */
.dark-mode .progress {
    background-color: #555;
}
/* .dark-mode .progress-bar styles can be added if specific color changes are needed */
/* For example, if default blue progress bar is hard to see */
.dark-mode .progress-bar {
    background-color: #007bff; /* Default, but can be overridden */
}

</style>
