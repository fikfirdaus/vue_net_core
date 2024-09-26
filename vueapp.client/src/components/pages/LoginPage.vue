<script>
    import LayoutDiv from '../LayoutDiv.vue';

    export default {
        name: 'LoginPage',
        components: {
            LayoutDiv,
        },
        data() {
            return {
                email: '',
                password: '',
                validationErrors: {},
                isSubmitting: false,
            };
        },
        methods: {
            loginAction() {
                //this.$router.push('Home');
                this.$router.push({ name: 'Home' });
                //try {
                //    const response = await fetch('https://localhost:7198/api/login', { //
                //        method: 'POST',
                //        headers: {
                //            'Content-Type': 'application/json'
                //        },
                //        body: JSON.stringify({ username: this.email, password: this.password })
                //    });

                //    if (response.ok) {
                //        const data = await response.json();
                //        console.log('Login successful:', data);
                //        //router.push({ path: '/home' });
                //        this.$router.push({ path: '/home' });
                //    } else {
                //        const errorData = await response.json();
                //        if (errorData.errors) {
                //            if (errorData.errors.Email) {
                //                this.emailError = errorData.errors.Email[0]; // Set email error
                //            }
                //            if (errorData.errors.Password) {
                //                this.passwordError = errorData.errors.Password[0]; // Set password error
                //            }
                //        }
                //    }
                //} catch (error) {
                //    this.isSubmitting = false;
                //    console.error('Login error:', error);
                //}

                //axios.post('/api/login', payload)
                //    .then(response => {
                //        localStorage.setItem('token', response.data.token)
                //        this.$router.push('/dashboard')
                //        return response
                //    })
                //    .catch(error => {
                //        this.isSubmitting = false
                //        if (error.response.data.errors != undefined) {
                //            this.validationErrors = error.response.data.errors
                //        }
                //        if (error.response.data.error != undefined) {
                //            this.validationErrors = error.response.data.error
                //        }
                //        return error
                //    });
            },
        },
    };
</script>

<style scoped>
    .row {
        padding: 10px;
        border: 1px solid black;
    }

    .card {
        padding: 10px;
    }

    .card-title {
        font-size: 20px;
    }

    .card-body {
        padding: 5px;
    }
</style>

<template>
    <layout-div>
        <div class="row justify-content-md-center mt-5">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title mb-4">Sign In</h5>
                    <form>
                        <p v-if="Object.keys(validationErrors).length != 0" class='text-center '><small class='text-danger'>Incorrect Email or Password</small></p>
                        <div class="mb-3">
                            <label htmlFor="email"
                                   class="form-label">
                                Email
                            </label>
                            <input v-model="email"
                                   type="email"
                                   class="form-control"
                                   id="email"
                                   name="email" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="password"
                                   class="form-label">
                                Password
                            </label>
                            <input v-model="password"
                                   type="password"
                                   class="form-control"
                                   id="password"
                                   name="password" />
                        </div>
                        <div class="d-grid gap-2">
                            <button @click="loginAction()"
                                    type="button"
                                    class="btn btn-primary btn-block">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </layout-div>
</template>