/* eslint-disable no-console */

new Vue(
	{
		el: "#app",
		data: {
			addr: "https://127.0.0.1:8200",
			path_encrypt: "/v1/transit/encrypt/",
			path_decrypt: "/v1/transit/decrypt/",
			base64text: "",
			key: "orders",
			plaintext: "", 
			ciphertext: "",
			token: "root",
			resp_encrypt: null,
			resp_decrypt: null,
			resp_base64: null,
		},
		methods: {
			cache: false,

			encode: function(event) {
				this.plaintext = btoa(this.base64text)
			},

			decode: function(event) {
				this.resp_base64 = atob(this.base64text)
			},

			encrypt: function(event) {
				 
				var config = { 
					headers: {
						'Content-Type': 'application/json',
						'X-Vault-Token': this.token
					}	
				}

				var payload = { 'plaintext': this.plaintext }

				axios
					.post(this.addr + this.path_encrypt + this.key, payload, config )
					.then( response => {
						this.resp_encrypt = response.data.data
						this.ciphertext = response.data.data.ciphertext
				}, (error) => {
					this.resp_encrypt = error;
				});
			},
			
			decrypt: function(event) {
				 
				var config = { 
					headers: {
						'Content-Type': 'application/json',
						'X-Vault-Token': this.token
					}	
				}

				var payload = { 'ciphertext': this.ciphertext }

				axios
					.post(this.addr + this.path_decrypt + this.key, payload, config )
					.then( response => {
						this.resp_decrypt = response.data.data;
						this.base64text = response.data.data.plaintext;
				}, (error) => {
					this.resp_decrypt = error;
				});
			}
		}
	}
)
