import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Company from "./views/Company.vue";
import Careers from "./views/Careers.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import Register from "./views/Register.vue";
import ScheduleDemo from "./views/ScheduleDemo.vue";
import Team from "./views/Team.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "scrybehome",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/company",
      name: "company",
      components: {
        header: AppHeader,
        default: Company,
        footer: AppFooter
      }
    },
    {
      path: "/careers",
      name: "careers",
      components: {
        header: AppHeader,
        default: Careers,
        footer: AppFooter
      }
    },
    {
      path: "/team",
      name: "team",
      components: {
        header: AppHeader,
        default: Team,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/message",
      name: "message",
      components: {
        header: AppHeader,
        default: ScheduleDemo,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
