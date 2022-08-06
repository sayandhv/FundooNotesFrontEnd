import AxiosService from "../AxiosService/AxioService";


export default class UserService {
    loginService(reqPayload){
        console.log(reqPayload);
        let httpHeaders ={
            headers:{
                'Content-type':'application/json'
            }
        }
        return AxiosService.prototype.postService('login',reqPayload,false,httpHeaders)
    }

    registrationService(reqPayload) {
        console.log(reqPayload);
        let httpHeaders ={
            headers:{
                'Content-type':'application/json'
            }
        }
        return AxiosService.prototype.postService('register',reqPayload,false,httpHeaders)
    }

    forgetPasswordService(reqPayload) {
        console.log(reqPayload);
        let httpHeaders = {
            headers: {
                'Content-type':'application/json'
            }
        }
        return AxiosService.prototype.postService('forgotPassword',reqPayload,false,httpHeaders)
    }

    resetPasswordService(reqPayload) {
        console.log(reqPayload);
        let httpHeaders = {
            headers: {

                'Authorization':'token',
                'Content-type':'application/json',


            }
        }
        return AxiosService.prototype.postService('resetPassword',reqPayload,false,httpHeaders)
    }
}
