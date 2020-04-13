# Vault API demo

## How to run demo

1. Clone this repository.

```shell
git clone git@github.com:masatomo-ito2/vault_api_demo.git
  - or - 
git clone https://github.com/masatomo-ito2/vault_api_demo.git
```

2. Run simple http server.

Run simple [http server module](https://docs.python.org/2/library/simplehttpserver.html) from python. This will run a simple HTTP server on port 8000.
```shell
python -m SimpleHTTPServer
```

3. Access demo page.

Access [http://localhost:8000](http://localhost:8000)

4. Enter vault related attributes.

Enter followings:
- Valt addr = <vault server address> (Default: http://127.0.0.1:8200)
- Vault path = <path to secret API> (Default: /v1/secret/foo)
- Vault token = <vault token>

Then click 'Query' button.





