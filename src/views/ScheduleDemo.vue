<template>
    <div>
        <section class="section-shaped section-lg pt-lg-0 section-contact-us my-0">
            <div class="shape shape-style-1 bg-gradient-default">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container shape-container d-flex">
                <div class="row">
                    <div class="col-md-6 order-md-1">
                        <img src="img/women_preso_discussing.png" class="img-fluid">
                    </div>
                    <div class="col-md-6 order-md-2">
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <h4 class="mb-1">Schedule a demo with us
                              </h4>
                            <p class="mt-0">We will get back to you soon.</p>
                            <form method="post"
                              action="https://airform.io/manjotpahwa@scrybe.ml">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="email" class="form-control"
                                id="formName"
                                aria-describedby="nameHelp"
                                placeholder="Your name">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Your work email" required>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <base-button type="default" round block size="lg">
                                Send Message
                            </base-button>
                            </form>
                            <div id="success_message" style="width:100%; height:100%; display:none; ">
                                <h3>We will get in touch soon!</h3>
                            </div>
                            <div id="error_message"
                                    style="width:100%; height:100%; display:none; ">
                                        <h3>Error</h3>
                                        Sorry there was an error sending your form.
                            </div>
                            <airform email="manjotpahwa@scrybe.ml">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="email" class="form-control"
                                id="formName"
                                aria-describedby="nameHelp"
                                placeholder="Your name">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Your work email" required>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <base-button type="default" round block size="lg">
                                Send Message
                            </base-button>
                            </airform>
                        </card>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
};
</script>
<style>
</style>
