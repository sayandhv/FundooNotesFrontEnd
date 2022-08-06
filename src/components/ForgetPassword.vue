<template>
  <div class="to_center_div">
    <div class="central_box_in_forget">
      <div class="box_with_padding">
        <div class="Left_box">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-col>
              <div class="Fundoologoinforget">
                <span class="f">F</span>
                <span class="u">u</span>
                <span class="n">n</span>
                <span class="d">d</span>
                <span class="o">o</span>
                <span class="oo">o</span>
              </div>
              <div class="ForgetPasswordHeading">
                <h4>Forgot Password</h4>
              </div>
              <div class="RecoveryText">
                <sapn> Enter your Email</sapn>
              </div>
              <div class="emailInForget">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  outlined
                ></v-text-field>
              </div>

              
              <div class="nextButton">
                <v-btn
                  :disabled="!valid"
                  color="blue"
                  class="mr-4"
                  @click="validate"
                >
                  Next
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
  name: "ForgetPasswordComponent",
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      console.log(this.email);
      let reqData = {
        email:this.email,
      }
     UserService.prototype.forgetPasswordService(reqData).then((data)=>{
        console.log("Response from Forget Password",data);
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

.central_box_in_forget {
  width: 400px;
  height: 400px;
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

.Left_box {
  width: 354px;
  height: 425px;
}

.emailInForget {
  width: 85%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-top: 30px;

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

.Fundoologoinforget {
  /* padding-bottom: -30px; */
  padding-left: 150px;
  padding-top: -10px;
  font-size: x-large;
  /* height: 100px; */
  /* height: 10px; */
  width: 10px;
}

.ForgetPasswordHeading {
  padding-left: 118px;
  padding-top: 10px;
    font-size: larger;
}

.RecoveryText {
  padding-left: 130px;
}

.nextButton{
  padding-left: 140px;
  margin-top: 30px;
}
</style>