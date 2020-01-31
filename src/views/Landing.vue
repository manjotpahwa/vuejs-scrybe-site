<template>
  <div>
        <div class="position-relative ">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 bg-gradient-default
                  shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-md-6 order-md-2">
                                <img src="img/women_preso_discussing.png" class="img-fluid floating">
                            </div>
                            <div class="col-md-6 order-md-1">
                                <h1 class="display-3  text-white">Home for data
                                  science artifacts
                                </h1>
                                <p class="lead  text-white">Scrybe's
                                automated experiment tracking takes the burden
                                off your data scientists, making them more
                                productive, fostering collboration and making
                                Machine Learning development transparent.</p>
                                <div class="btn-wrapper">
                                    <base-button tag="a"
                                                 href="http://scrybe-docs.readthedocs.io/"
                                                 class="mb-3 mb-sm-0"
                                                 type="info"
                                                 icon="fa fa-code">
                                        Try it now
                                    </base-button>
                                    <base-button tag="a"
                                                 href="http://scrybe-docs.readthedocs.io/"
                                                 class="mb-3 mb-sm-0"
                                                 type="white"
                                                 icon="ni ni-books">
                                        Docs
                                    </base-button>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200 bg-gradient-default">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Scrybe Free</h6>
                                    <p class="description mt-3">Scrybe will
                                    always be free for an individual data
                                    scientist. Start tracking all your data
                                    science artifacts in a few minutes.</p>
                                    <div>
                                        <badge type="primary"
                                        rounded>individual</badge>
                                        <badge type="primary" rounded>free</badge>
                                        <badge type="primary" rounded>tracking</badge>
                                    </div>
                                    <base-button tag="a" href="http://scrybe-docs.readthedocs.io/" type="primary" class="mt-4">
                                        Start today
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">
                                    Scrybe Teams</h6>
                                    <p class="description mt-3">If you are
                                    a small data science team that wants to get
                                    experiment tracking quickly, try out our
                                    teams version.</p>
                                    <div>
                                        <badge type="success" rounded>teams</badge>
                                        <badge type="success"
                                        rounded>collaboration</badge>
                                        <badge type="success" rounded>tracking</badge>
                                    </div>
                                    <base-button tag="a" href="http://scrybe-teams.readthedocs.io/" type="success" class="mt-4">
                                        Start today
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-spaceship" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning
                                      text-uppercase">Scrybe Enterprise</h6>
                                    <p class="description mt-3">Scrybe for the
                                    enterprise with all the customizations you
                                    want. Contact us for a deeper discussion.</p>
                                    <div>
                                        <badge type="warning"
                                        rounded>enterprise</badge>
                                        <badge type="warning"
                                        rounded>collaboration</badge>
                                        <badge type="warning" rounded>tracking</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="warning" class="mt-4">
                                        Contact us
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg my-0 bg-gradient-default">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-12">
                        <div class="row align-items-center justify-content-center">
                            <h2 class="display-3 text-white text-align:center">Track and organize
                              automatically</h2>
                        </div>
                        <div class="rounded shadow-lg overflow-hidden">
                            <b-carousel id="carousel1"
                                        controls
                                        :interval="5000"
                                        img-width="1024"
                                        img-height="480"
                                        v-model="slide"
                                        indicators>
                                <!-- Text slides with image -->
                                <b-carousel-slide
                                  img-src="img/brand/plots screenshot.png">
                                  <div class="col-md-12 text-white">
                                      <p style="text-align:center">Organize plots</p>
                                  </div>
                                </b-carousel-slide>
                                <b-carousel-slide
                                  img-src="img/brand/Experiments_view_clean.png">
                                  <div class="col-md-12 text-white">
                                      <p style="text-align:center">Capture experiments</p>
                                  </div>
                                </b-carousel-slide>
                            </b-carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg bg-gradient-default">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <img src="img/header-img.png" class="img-fluid floating">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5 text-white">
                            <icon name="ni ni-settings-gear-65" class="mb-5" size="lg" type="success" shadow
                                  rounded></icon>
                            <h3 class="text-white">Maximize Data Science Productivity</h3>
                            <p>Data scientists often lose critical information
                            such as all the models they've built and discarded,
                            data exploration and features. Scrybe helps
                            automate tracking of all this critical context.</p>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                                        <h6 class="mb-0  text-white">Track all your
                                          experiments</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-html5"></badge>
                                        <h6 class="mb-0 text-white">Search
                                          datasets, features and models</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge>
                                        <h6 class="mb-0 text-white">Compare
                                          your best models</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  name: "home",
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>
