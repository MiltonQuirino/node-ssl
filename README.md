# node-ssl
Self-signed SSLin NodeJS


# First Generate certificate, save into directory: encryption
# Linux and Mac
$ openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout localhost.key -out localhost.crt -subj "/CN=localhost" -days 3650

