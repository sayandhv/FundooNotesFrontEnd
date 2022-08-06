<template>
  <div class="to_center_div">
    <div class="central_box">
      <div class="box_with_padding">
        <div class="Left_box">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-col>
              <div class="Fundoo_logo_in_reset">
                <span class="f">F</span>
                <span class="u">u</span>
                <span class="n">n</span>
                <span class="d">d</span>
                <span class="o">o</span>
                <span class="oo">o</span>
              </div>
              <div class="ResetPasswordHeading">
                <h4>Reset Password</h4>
              </div>
              <div class="EnterNewPasswordTag">
                <sapn>Enter New Password</sapn>
              </div>
              <div class="NewPassword">
                <v-text-field
                  v-model="NewPassword"
                  label="New Password"
                  type="password"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="ConfirmPassword"
                  label="Confirm"
                  type="password"
                  required
                  outlined
                >
                </v-text-field> 
              </div>
              <div class="DoneButton">
                <v-btn
                  :disabled="!valid"
                  color="blue"
                  class="mr-4"
                  @click="validate"
                >
                  Done
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
  name: "ResetPasswordComponent",
  data: () => ({
    valid: true,
    NewPassword:"",
    ConfirmPassword:"",
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      console.log(this.NewPassword);
      console.log(this. ConfirmPassword);
      let reqData = {
        new_password: this.NewPassword,
       password_confirmation : this.ConfirmPassword,
      };
      UserService.prototype.resetPasswordService(reqData).then((data)=>{
        console.log("Response from Reset",data);
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

.central_box {
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

.NewPassword {
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 30px;
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

.Fundoo_logo_in_reset {
  padding-bottom: -30px;
  padding-left: 160px;
  padding-top: 20px;
  /* height: 100px; */
  /* height: 10px; */
  width: 10px;
}

.ResetPasswordHeading {
  padding-left: 130px;
}

.EnterNewPasswordTag {
  padding-left: 115px;
}
.paragraph{
  padding-left: 80px;
}
.DoneButton{
  padding-left: 260px;
  margin-top: 20px;
}
</style>