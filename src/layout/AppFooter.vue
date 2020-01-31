<template>
    <footer class="footer has-cards-no-skew">
        <div class="container">
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="https://www.scrybe.ml" target="_blank"
                          rel="noopener">Made with <i class="fa fa-heart" aria-hidden="true" style="color:red"></i> by Rocket Labs Inc.</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <router-link to="/team" class="nav-link" rel="noopener">About
                                Us</router-link>
                        </li>
                        <li class="nav-item">
                            <a href="https://medium.com/@scrybe.ml" class="nav-link" target="_blank" rel="noopener">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.termsfeed.com/privacy-policy/2d5e1314a2ac49520e7a0e894d739cfe"
                              class="nav-link" target="_blank"
                              rel="noopener">Privacy Policy</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://medium.com/@scrybe.ml"
                              class="nav-link" target="_blank"
                              rel="noopener">Terms of Use</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
