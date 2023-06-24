<template>
  <div class="fullscreen-gradient">
    <div class="container-body">
      <div class="container-title">
        <h2>PhoneBook Online</h2>
      </div>
      <form>
        <div class="">
          <div>
            <label>Email</label>
            <input type="email" autocomplete="off" class="form-control mt-1 mb-2" placeholder="Enter your email"
              required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" autocomplete="off" class="form-control mt-1 mb-2" placeholder="Enter your password"
              required />
          </div>
          <div class="d-flex justify-content-end">
            <router-link to="/contacts">
              <button class="mt-1 mb-2 btn btn-outline-danger">LOGIN</button>
            </router-link>
          </div>
          <div>
            <router-link to="/createUser">
              <span class=""> Don't have an account?Create it now</span>
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

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
  color: #edf5e1;
  width: 40%;
  border-radius: 30px;
  padding: 55px;
}

.btn.btn-outline-danger {
  background-color: #3498DB;
  color: white;
  border: none;
}

.btn.btn-outline-danger:hover:focus {
  background-color: #28648b9d;
  color: black;
  border: none;
}

.container-title {
  text-align: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
