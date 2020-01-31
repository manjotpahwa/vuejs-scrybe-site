
<template>
    <div>
        <section class="section section-lg bg-gradient-default">
            <div class="container">
                <div class="row justify-content-center text-center mb-lg">
                    <div class="col-lg-8">
                        <h2 class="display-3 text-white">The Team</h2>
                        <p class="lead text-muted text-white">We're a company that loves
                        working on cool technology, working and hiring smart
                        people and embracing an open and diverse culture.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/ChandraPrakash.jpeg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1 text-white">Chandra Prakash</span>
                                    <small class="h6 text-muted">The Deep
                                      Learning ninja</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="https://twitter.com/manjotpahwa" type="warning" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="mailto:chandra@scrybe.ml" type="warning" icon="ni ni-email-83" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="https://www.linkedin.com/in/chandra-prakash-89291657/"
                                                         type="warning"
                                                         icon="fa fa-linkedin" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/HimanshuChaudhary.jpeg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1 text-white">Himanshu
                                      Chaudhary</span>
                                    <small class="h6 text-muted">The backend
                                      Rockstar</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="https://twitter.com/ed_heck" type="primary" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="mailto:himanshu@scrybe.ml" type="primary" icon="ni ni-email-83" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="https://www.linkedin.com/in/himanshu-chaudhary-b532b924/"
                                                         type="primary"
                                                         icon="fa fa-linkedin" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/ManjotPahwaSquare.jpg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1 text-white">Manjot Pahwa</span>
                                    <small class="h6 text-muted">All things
                                      customers</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="https://twitter.com/manjotpahwa" type="info" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a"
                                                 href="mailto:manjotpahwa@scrybe.ml" type="info" icon="ni ni-email-83" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="https://www.linkedin.com/in/manjotpahwa/" type="info"
                                                                  icon="fa
                                                                  fa-linkedin" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/ManishSachdev.jpeg'"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1 text-white">Manish Sachdev</span>
                                    <small class="h6 text-muted">CEO</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="https://twitter.com/manjotpahwa" type="success" icon="fa fa-twitter" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="mailto:msachdev@scrybe.ml"
                                                         type="success"
                                                         icon="ni ni-email-83" rounded
                                                 icon-only></base-button>
                                    <base-button tag="a" href="https://www.linkedin.com/in/manish-sachdev-2741282/"
                                                         type="success"
                                                         icon="fa fa-linkedin" rounded
                                                 icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {};
</script>
<style>
</style>
