# Vault API demo

**This demo only supports Vault token authentication**


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

**Note**
You can just open the index.html in your browser, but make sure the Vault's [CORS setting](https://www.vaultproject.io/api-docs/system/config-cors) is configured.

```shell
vault write sys/config/cors allowed_origins=*
```

3. Access demo page.

Access [http://localhost:8000](http://localhost:8000) or just open the index.html in your browser.

5. Navigate to page and enter vault related attributes.

Enter followings:
- Valt addr = <vault server address> (Default: http://127.0.0.1:8200)
- Vault path = <path to secret API> (Default: /v1/secret/foo)
- Vault token = <vault token> (Default: root)

Then click 'Query' button.

## Troubleshoot

### If you get CORS related error

Configure [CORS setting](https://www.vaultproject.io/api-docs/system/config-cors) in Vault.

```shell
vault write sys/config/cors allowed_origins=*
```
