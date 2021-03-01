const { AES, MD5, SHA3, enc } = require("crypto-js");

// const prodSecretPassword = "3daab050e52f043c9d3684c8110a43e1434aaa0f28c7fc9f";
const prodSecretEncryptionKey =
  "3h?R9+9&ym5jhWcfkv6=gqfg^87AaAkjpmUDD$^=_%ddFu7g%jmWhFBAgB+zPe4wWMYSc_taUJx#kkz%7jP^FXt=VaesK7zKAee7nGCXzW^SYDQ";

const response = AES.encrypt(
  "39432840778",
  MD5(prodSecretEncryptionKey).toString()
).toString();

console.log(response);
console.log(SHA3("39432840778").toString(enc.Base64));
