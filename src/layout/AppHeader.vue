<template>
    <header class="header-global">
        <base-nav class="navbar-main navbar-dark bg-default" type="" effect="dark" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/logo.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li tag="li" class="nav-item">
                    <a slot="title" href="https://medium.com/@scrybe.ml" class="nav-link" data-toggle="dropdown" role="button" target="_blank">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Articles</span>
                    </a>
                </li>
                <li tag="li" class="nav-item dropdown">
                    <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                      <i class="ni ni-ui-04 d-lg-none"></i>
                      <span class="nav-link-inner--text">About Us</span>
                    </a>
                    <div class="dropdown-menu">
                        <router-link to="/company"
                          class="dropdown-item">Company</router-link>
                        <router-link to="/team"
                          class="dropdown-item">Team</router-link>
                        <a href="https://scrybe-docs.readthedocs.io/en/latest/releases.html" target="_blank"
                          class="dropdown-item">Releases</a>
                        <router-link to="/careers"
                          class="dropdown-item">Careers</router-link>
                    </div>
                </li>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon"
                       href="https://www.linkedin.com/company/scrybe-ml" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Linkedin">
                        <i class="fa fa-linkedin-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Linkedin</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon"
                       href="https://twitter.com/ScrybeML" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="http://dashboard.scrybe.ml/#/" target="_blank" rel="noopener"
                       class="btn btn-neutral btn-icon">
                      <span class="btn-inner--icon">
                        <i class="ni ni-user-run mr2"></i>
                      </span>
                        <span class="nav-link-inner--text">Get started</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
