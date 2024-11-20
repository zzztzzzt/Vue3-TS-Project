<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref(true);

const toggleClass = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <div :class="{ active: isActive }" class="container" id="container">
    <div class="form-container sign-up">
      <form>
        <h1>Create Account</h1>
        <span>or use your email for registeration</span>
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button>Sign Up</button>
      </form>
    </div>
    <div class="form-container sign-in">
      <form>
        <h1>Sign In</h1>
        <span>or use your email password</span>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <a href="#">forget your password?</a>
        <button>Sign In</button>
      </form>
    </div>
    <div class="toggle-container">
      <div class="toggle">
        <div class="toggle-panel toggle-left">
          <h1>Welcome Back!</h1>
          <p>Enter your personal details to use all of site features</p>
          <button class="hidden" id="login" @click="toggleClass">Sign In</button>
        </div>
        <div class="toggle-panel toggle-right">
          <h1>Hello Friend!</h1>
          <p>Register with your personal details to use all of site features</p>
          <button class="hidden" id="register" @click="toggleClass">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #e5e5e5;
  border-radius: 30px;
  box-shadow:rgba(194, 194, 194, 0.3) 5px 10px 5px;
  margin-bottom: 50px;
  position: relative;
  width: 700px;
  max-width: 80%;
  height: 400px;
  overflow: hidden;
}

.container p {
  margin: 20px 0;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
}

.container span {
  font-size: 12px;
}

.container a {
  color: #333;
  font-size: 13px;
  text-decoration: none;
  margin: 15px 0 10px;
}

.container button {
  background-color: #4ac3ff;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 10px 45px;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
}

.container button.hidden {
  background-color: transparent;
  border-color: #fff;
}

.container form {
  background-color: #e5e5e5;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
}

.container input {
  background-color: #fff;
  border: none;
  border-radius: 8px;
  outline: none;
  width: 100%;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
}

@keyframes move {
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
}

@media (max-width: 600px) {
  .container {
    height: 580px;
  }

  .toggle-container {
    visibility: hidden;
  }
}
@media (min-width: 601px) and (max-width: 1024px) {
  .container {
    height: 680px;
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transform: all 0.6s ease-in-out;
  }

  .sign-in {
    width: 50%;
    left: 0;
    z-index: 2;
  }

  .container.active .sign-in {
    transform: translateX(100%);
  }

  .sign-up {
    opacity: 0;
    width: 50%;
    left: 0;
    animation: move 0.6s;
    z-index: 1;
  }

  .container.active .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  }

  .toggle-container {
    border-radius: 150px 0 0 100px;
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    z-index: 10;
  }

  .container.active .toggle-container {
    border-radius: 0 150px 100px 0;
    transform: translateX(-100%);
  }

  .toggle {
    background-color: #4ac3ff;
    background: linear-gradient(to right, #4ff3ff, #4ac3ff);
    color: #fff;
    height: 100%;
    width: 200%;
    position: relative;
    left: -100%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
  }

  .container.active .toggle {
    transform: translateX(50%);
  }

  .toggle-panel {
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    text-align: center;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
  }

  .toggle-left {
    transform: translateX(-200%);
  }

  .container.active .toggle-left {
    transform: translateX(0);
  }

  .toggle-right {
    right: 0;
    transform: translateX(0);
  }

  .container.active .toggle-right {
    transform: translateX(200%);
  }
}
@media (min-width: 1025px) {
  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transform: all 0.6s ease-in-out;
  }

  .sign-in {
    width: 50%;
    left: 0;
    z-index: 2;
  }

  .container.active .sign-in {
    transform: translateX(100%);
  }

  .sign-up {
    opacity: 0;
    width: 50%;
    left: 0;
    animation: move 0.6s;
    z-index: 1;
  }

  .container.active .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  }

  .toggle-container {
    border-radius: 150px 0 0 100px;
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    z-index: 10;
  }

  .container.active .toggle-container {
    border-radius: 0 150px 100px 0;
    transform: translateX(-100%);
  }

  .toggle {
    background-color: #4ac3ff;
    background: linear-gradient(to right, #4ff3ff, #4ac3ff);
    color: #fff;
    height: 100%;
    width: 200%;
    position: relative;
    left: -100%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
  }

  .container.active .toggle {
    transform: translateX(50%);
  }

  .toggle-panel {
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    text-align: center;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
  }

  .toggle-left {
    transform: translateX(-200%);
  }

  .container.active .toggle-left {
    transform: translateX(0);
  }

  .toggle-right {
    right: 0;
    transform: translateX(0);
  }

  .container.active .toggle-right {
    transform: translateX(200%);
  }
}
</style>