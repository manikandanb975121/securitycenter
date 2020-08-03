// const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
      // console.log(req.headers);
      const token = req.headers.authorization.split(" ")[1];
      // jwt.verify(token, "secret_this_should_be_longer");
      // next();
      // console.log(token);
      req.userData = { accessToken: token};
    // req.userData = { accessToken: "eyJ0eXAiOiJKV1QiLCJub25jZSI6IjZMMW1pTXhFTnVXVHJEY0hOQVgtdklPS1lCczd4NGNCZG0yUlVFRXFSV0UiLCJhbGciOiJSUzI1NiIsIng1dCI6Imh1Tjk1SXZQZmVocTM0R3pCRFoxR1hHaXJuTSIsImtpZCI6Imh1Tjk1SXZQZmVocTM0R3pCRFoxR1hHaXJuTSJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84M2E4ZWQwNi01M2I0LTRlYTctOTVlNy0xZmNmYjkzZjg0YmMvIiwiaWF0IjoxNTk2MTkzMTEwLCJuYmYiOjE1OTYxOTMxMTAsImV4cCI6MTU5NjE5NzAxMCwiYWlvIjoiRTJCZ1lIQTg3VnUxalBkS3ljM3N6UlVSdC9ZMUF3QT0iLCJhcHBfZGlzcGxheW5hbWUiOiJTZWN1cml0eUdyYXBoQXBpIiwiYXBwaWQiOiIxMjAxNjVjMi1iZDc3LTQ3OGUtODZkMy0zNmY5Zjc0YjhlMTEiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84M2E4ZWQwNi01M2I0LTRlYTctOTVlNy0xZmNmYjkzZjg0YmMvIiwib2lkIjoiZTVjNTI3ZmMtNGVkYS00ZGYxLWJkNTAtMTM0Mjk4ZjlkZmYxIiwicm9sZXMiOlsiU2VjdXJpdHlFdmVudHMuUmVhZC5BbGwiLCJNYWlsLlJlYWRCYXNpYy5BbGwiLCJUaHJlYXRJbmRpY2F0b3JzLlJlYWRXcml0ZS5Pd25lZEJ5IiwiU2VjdXJpdHlFdmVudHMuUmVhZFdyaXRlLkFsbCIsIk1haWwuUmVhZEJhc2ljIl0sInN1YiI6ImU1YzUyN2ZjLTRlZGEtNGRmMS1iZDUwLTEzNDI5OGY5ZGZmMSIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJBUyIsInRpZCI6IjgzYThlZDA2LTUzYjQtNGVhNy05NWU3LTFmY2ZiOTNmODRiYyIsInV0aSI6IkpQRmJWRGtZVGtDaV9YbVktamN5QUEiLCJ2ZXIiOiIxLjAiLCJ4bXNfdGNkdCI6MTU2MzgyNTE3MX0.kTyLz8S1H8nCy4MAW_ft6A6Yufe_ByxnZKYOI1P2NkO_sXm1zRRiIFVkYpGpeqByzoB6ZGSV9v3tg9njziY654qGxgRKfC24bzPCJDUFgFBm1NVNfJZEnoECpPt7arrWj_REOGjfXQOM8UR-voUGr0L9yBWcfz2NTLNjO6oZakyMLZ7XOuGnYF7mJr2U1jatoHo-ueRjyBSYyOJFK1kVpsA71HYCA2a5Gm-FVAyJWN0ZxahZTgfDvy0i76JkKaEEWf_zLokWdAT6cNB55l209jiKTijizVeoqBRQR5ip4JrTySesjN9Kxm6WKDSkRot6WNRBfWqTdAg0TfaWfIWoYA"}
      next();
    } catch (error) {
        console.log(error);
      res.status(401).json({ message: "Auth failed!" });
    }
};
  