var admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: "https://swagger-3360e-default-rtdb.firebaseio.com",
      privateKey:
        "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDdrAx9Je3ccLEJ\nHZvj3EHSXs2gHhZGeh0s9y2py6Kmm10BpH6cp9bdf1setZ+/drQ0334IAQVUrLBH\nyfD5QrMyCwfLVigL7hhEICHXazH5bM1SdM2YMFlV0y8dCt/WHTR/z09H8AbaaqEQ\nMEim3IFHxpa7lcocD82hg+sfUuL+vpukHi7NqZ+1Zxx47zIq00HgN/IIeF1pXQ78\nVRBNzZTbSbjEM4m+LP49CyDy2asKSCmA5ZRzUZqCsuzaDCwMaayB0CbDIYzNAz3T\nhMJ9i1Ifjl4GknJIZ0THYmHdN+UFpHmiRGUDXH0NAQBhQ6YWIUAn66e5wFqqBAGh\nwTFCOMqHAgMBAAECgf9ui7OutZDpXfRA7Nh7ybEJjZL98Vh/zRC/sS9p0yOfR9tv\nS5kt29r18DfWGL08aPYgEqnHVBBUfx9qAvXUAxoE2tCy6+8MrrAV8/BB0t4ZL9Pf\noGA8hTVdQkk8h9pt7M1BmnZEacRWfYEqPD9UTKLW0zJYWgVwo8Y9xeEmEy/LLv/d\ncCTsg3nRQSSg7s3wYLRaSzDKplfaHFa+KBO0LIHdSmJd0vhBnxXDOHVAuNHL/cen\nFwRzjeBzgPPLdSGr+YFYj3Tm66twLaHShVrmhaydq7CynsFvIQGva46DW4oXiqrV\nA3cCcT2oD4h3R0lpmp2TcdGqfFGe1k6piOco8CECgYEA+paTSKxsb5zST/t8orLC\nhUeYFaZnZhx1SVFU6wJpkqYlNfg9BWS2888hLcAYWaSs4AAgxfCS3+zS+nXiaNnq\nvF9nx4XC22VLE6bGomH7zz6hEbfZKgDBGkkZXVoqBXSarLeEvOcekMiNuWA7FUlH\nYZ3pqghsCTw8HXFyEDpagnECgYEA4nWa7BaP7+8DKk0rglugfaNSkq/r7vEXg8oX\nO6HH2LCI8Rpq0GL4XTXSyCOwdnSw20LeMwXxicfpKfBgDSGSop/vyUH18YVvKteM\nTrg2zCBnALUJQCZ10034/fYxMYwyYzpCvMjggyEWqDQ12EViKwuO5r7BTImKivUj\nN7NMqHcCgYEA8dMP7Ykf2BIhz7flTmluWQp/VR1SGXOLKCcJ6QVZ9oDJ1ixqTuMj\nv2N7JFiF5zSI9F6LQhno05oK/FN5HDB4XDNBxoVqRymYay198UTXqedJrvyZ4PP7\nZi92/+S8OqmNfvJXcakkkRpJ0sRwIBmofibTURhxkfQEG3HYXprBr7ECgYBE7sGK\nrc+AnIOdI8JjutpehBGFfzFVGWQsBJ8P0s4PYqU8purupcGuNc0EiQCU/i47f949\nL8j3RLfvwTCrrpWBFSgbXg2sSA6vvs8Bw0dC2XYhG/pF4a8p8+kf/Qm6aE+KLtjT\nuF3G7JKF/uaI/43DRpBoIpaaYp+ebsIamWRzPwKBgQCDokqscmflE0UaNE+s+gAk\nY7PW+gxIzrGXFqwaP6SOCzPQbvEPzN7W5n3AqkTLmTbphxQGwONOewF7oS0iq1a2\nqBSFJs8+2fS8a/GfikwGmc748yfO5o0ILkaoaDmO7HLXfApbW10lYI81LJ9muDdm\nWWme1e37w5K2Cs9djxmynQ==\n-----END PRIVATE KEY-----\n".replace(
          /\\n/gm,
          "\n"
        ),
      project_id: "swagger-3360e",
    }),
    databaseURL: "https://swagger-3360e-default-rtdb.firebaseio.com",
  });
}

module.exports = admin.firestore();
