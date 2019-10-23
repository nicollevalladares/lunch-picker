<template>
  <div>
    <b-container class="login">
      <h3>LOGIN</h3>
      <!-- label for name -->
      <!-- <b-row class="label-login">
        <b-col sm="12">
          <b-form-input id="name" placeholder="Enter your name"></b-form-input>
        </b-col>
      </b-row> -->

      <!-- label for email -->
      <b-row class="label-login">
        <b-col sm="12">
          <b-form-input 
            type="text" 
            id="email" 
            v-model="email" 
            placeholder="Enter your email"
          ></b-form-input>
        </b-col>
      </b-row>

      <!-- label for password -->
      <b-row class="label-login">
        <b-col sm="12">
          <b-form-input 
            type="password" 
            id="password" 
            v-model="password" 
            placeholder="Enter your password"
          ></b-form-input>
        </b-col>
      </b-row>

      <b-button variant="outline-primary" @click="login">Login</b-button>
    </b-container>
  </div>
</template>

<script src="./js/login.js"></script>

<style src="./css/login.css"></style>
