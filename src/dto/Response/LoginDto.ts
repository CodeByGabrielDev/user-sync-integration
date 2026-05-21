/*

"login": {
        "uuid": "f6a2ee32-ec6b-4a4b-91b8-07c5900286e5",
        "username": "lazybird533",
        "password": "rainbow",
        "salt": "WxRQrTfe",
        "md5": "dab83b8d38a3c912b0e8c8e139bb0184",
        "sha1": "5e2966474d94b31654bd04123d317a3002963ada",
        "sha256": "f67a935c06adfb1945c4bd9d283df21715cde2786929438ca5fc0785dc158432"
      }
*/

export interface LoginDto{
    uuid:string;
    username:string;
    password:string;
    salt:string;
    md5:string;
    sha1:string;
    sha256:string;
}