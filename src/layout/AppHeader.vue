<template>
    <header class="header-global">
        <base-nav class="navbar-main navbar-dark bg-default" type="" effect="dark" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/logo.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
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
                        <a href="https://scrybe-docs.readthedocs.io/en/latest/releases.html" target="_blank"
                          class="dropdown-item">Releases</a>
                        <a href="/careers"
                          class="dropdown-item">Careers</a>
                    </div>
                </li>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon"
                       href="https://www.linkedin.com/scrybe_ml" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Linkedin">
                        <i class="fa fa-linkedin-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Linkedin</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon"
                       href="https://twitter.com/scrybe_ml" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/creativetimofficial/vue-argon-design-system"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="/messageus" target="_blank" rel="noopener"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="ni ni-user-run mr2"></i>
                </span>
                        <span class="nav-link-inner--text"> Schedule a demo</span>
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
