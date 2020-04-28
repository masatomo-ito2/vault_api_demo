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

## How to set Vault transform engine

**Note: Vault transform engine is Enterprise feature.**

1. Enable transform engine

```shell
vault secrets enable transform
```

2. Set up template for FPE

```shell
vault write transform/template/ccn type=regex pattern='(\d{4})-(\d{4})-(\d{4})-(\d{4})' alphabet=numerics
```

3. Set up transformation

```shell
vault write transform/transformation/ccn-fpe type=fpe template=ccn tweak_source=internal allowed_roles=payments
```

4. Set up role

```shell
vault write transform/role/payments transformations=ccn-fpe
```

5. Test FPE encode

```shell
vault write transform/encode/payments value=1111-2222-3333-4444
```

6. Test FPE decode

```shell
vault write transform/decode/payments value=7313-6619-5148-5744
```



## Troubleshoot

### If you get CORS related error

Configure [CORS setting](https://www.vaultproject.io/api-docs/system/config-cors) in Vault.

```shell
vault write sys/config/cors allowed_origins=*
```
