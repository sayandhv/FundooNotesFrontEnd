<template>
  <div class="to_center_div">
    <div class="centralboxinLogin">
      <div class="box_with_padding">
        <div class="LeftboxinLogin">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-col>
              <div class="Fundoo_logo">
                <span class="f">F</span>
                <span class="u">u</span>
                <span class="n">n</span>
                <span class="d">d</span>
                <span class="o">o</span>
                <span class="oo">o</span>
              </div>
              <div class="loginHeading">
                <h4>LOGIN</h4>
              </div>
              <div class="loginTag">
                <sapn> Login To Your Fundoo Account</sapn>
              </div>
              <div class="emailPassword">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  required
                  outlined
                >
                </v-text-field> 
              </div>
              
              <div class="paragraph">
                <p>Not your computer? Use Guest mode to sign in privately.</p>
              </div>
              <div class="forgetpassword" >
                <a
                  href="http://localhost:8080/forget"
                  class="Forget_password"
                  width="368"
                  height="20"
                  >Forget password</a
                >
              </div>
              <div class="loginButton">
                <v-btn
                  :disabled="!valid"
                  color="blue"
                  class="mr-4"
                  @click="validate"
                >
                  Login
                </v-btn>
              </div>
            </v-col>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/usersevice/userservice';
export default {
  name: "LoginComponent",
  data: () => ({
    valid: true,
    email: "",
    password: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      console.log(this.email);
      console.log(this.password);
      let reqData = {
        email: this.email,
        password: this.password,
      };
      UserService.prototype.loginService(reqData).then((data)=>{
        console.log("Response from login",data);
        localStorage.setItem("token",data.data.token);
    }).catch((error)=>{
        console.log(error);
    })
  },
  },
};
</script>
<style>
.to_center_div {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 70px;
}

.centralboxinLogin {
  width: 400px;
  height: 505px;
  padding: 48px 40px 36px 40px;
  margin: 0;
  border-style: solid;
  border-width: 1px;
  border-color: #9a9a9c;
  border-radius: 5px;
  box-sizing: content-box;
}

.box_with_padding {
  display: flex;
}

.LeftboxinLogin{
  width: 354px;
  height: 425px;
}

.emailPassword {
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 40px;
  padding-top: 20px;

  /* padding: 6px 8px; */
}

.f {
  color: blue;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
}

.u {
  color: red;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
}

.n {
  color: yellow;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
}

.d {
  color: blue;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
}

.o {
  color: green;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
}

.oo {
  color: red;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
}

.Fundoo_logo {
  padding-bottom: -30px;
  padding-left: 150px;
  padding-top: 20px;
  /* height: 100px; */
  /* height: 10px; */
  width: 10px;
}

.loginHeading {
  padding-left: 155px;
}

.loginTag {
  padding-left: 70px;
}
.paragraph{
  padding-right: 10px;
}
.forgetpassword{
  padding-left: 30px;
  padding-top: 40px;
}
.loginButton{
  padding-left: 240px;
  margin-top: -20px;
}
</style>