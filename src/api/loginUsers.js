const Users=[
         
         {
            "id": "USER123124128",
            "firstname":"Ankit",
            "lastname":"Gupta",
            "username":"ankitgupta419",
            "emailid":"ankitgupta419@gmail.com",
            "password":"12345",
            "profile_img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNx4GSwVZfRnSAO02_oPp7sSJIZyln78XL7fAr4fw1BiL9gzyOA"
         },
         {
            "id": "USER123123228",
            "firstname":"Rajiv",
            "lastname":"Mishra",
            "username":"rajiv123419",
            "emailid":"rajivmishra123@gmail.com",
            "password":"12345",
            "profile_img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNx4GSwVZfRnSAO02_oPp7sSJIZyln78XL7fAr4fw1BiL9gzyOA"
         },
          {
            "id": "USER123123229",
            "firstname":"Rajiv",
            "lastname":"Mishra",
            "username":"rajiv123419",
            "emailid":"ankit",
            "password":"12345",
            "profile_img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNx4GSwVZfRnSAO02_oPp7sSJIZyln78XL7fAr4fw1BiL9gzyOA"
         }
     
      ]

class LoginApi {
  static getAllLoginData() {
    return new Promise((resolve, reject) => {
        resolve(Object.assign([], Users));
    });
  }
}

export default LoginApi;