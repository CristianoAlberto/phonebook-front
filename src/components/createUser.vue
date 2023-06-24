<template>
    <div class="fullscreen-gradient">
        <div class="container-body">
            <div class="container-title">
                <h2>PhoneBook Online</h2>
            </div>
            <form>
                <div class="">
                    <div>
                        <label>Your name</label>
                        <input type="text" autocomplete="off" class="form-control mt-1 mb-2" placeholder="Enter your name"
                            required />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" autocomplete="off" class="form-control mt-1 mb-2" placeholder="Enter your email"
                            required />
                    </div>
                    <div>
                        <label>Phone number</label>
                        <input type="number" autocomplete="off" class="form-control mt-1 mb-2"
                            placeholder="Enter your number" required />
                    </div>
                    <div>
                        <label>Password</label>
                        <input v-model="password" placeholder="Enter your password" class="form-control mt-1 mb-2"
                            type="password" required>
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input v-model="confirmPassword" placeholder="Enter the same password"
                            class="form-control mt-1 mb-2" type="password" required>
                    </div>
                    <div v-if="password !== '' && confirmPassword !== ''">
                        <p v-if="password === confirmPassword" class="text-success">Passwords match</p>
                        <p v-else class="text-danger">Passwords do not match</p>
                    </div>
                    <div class="font-info">
                        <span class="mdi mdi-information-variant-circle-outline">Passwords need to be the same</span>
                    </div>
                    <div>
                        <button class="mt-3 mb-2 col-md-12 btn btn-outline-danger">CREATE</button>
                    </div>
                    <div>
                        <router-link to="/">
                            <span class=""> Already have an account? Log in</span>
                        </router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            password: '',
            confirmPassword: ''
        };
    }
}
</script>
<style scoped>
.fullscreen-gradient {
    background: linear-gradient(to bottom, #2C3E50, #1A2533);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: large;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.container-body {
    background-color: #333333;
    color: #a7aaa1;
    width: 40%;
    border-radius: 30px;
    padding: 55px;
}

.btn.btn-outline-danger {
    background-color: #3498DB;
    color: white;
    border: none;
}

.btn.btn-outline-danger:hover {
    background-color: #28648b9d;
    color: black;
    border: none;
}

.container-title {
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.font-info {
    font-size: small;
}
</style>
  