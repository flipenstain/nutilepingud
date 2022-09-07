Nutilepingute esimene kodutöö:

Api endpoint mille vastu teha POST päring: small-star-4205.fly.dev/api

Päringu struktuur:


POST small-star-4205.fly.dev/api  HTTP/1.1
content-type: application/json

{
    "content": "25,2% Inflatsioon"
}

--

HTTP/1.1 200 OK
x-powered-by: Express
content-type: application/json; charset=utf-8
content-encoding: gzip
etag: W/"25-2uEBecb5/rAURIMoprQ98i71bos"
date: Wed, 07 Sep 2022 12:43:35 GMT
connection: keep-alive
keep-alive: timeout=5
transfer-encoding: chunked
server: Fly/45b85f07 (2022-09-06)
via: 1.1 fly.io
fly-request-id: 01GCBZMBZTWXVZZJN59G7B1347-fra

{
  "content": "Tere, 25,2% Inflatsioon"
}
