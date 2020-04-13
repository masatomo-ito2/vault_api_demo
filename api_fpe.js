/* eslint-disable no-console */

new Vue(
	{
		el: "#app",
		data: {
			addr: "http://127.0.0.1:8200",
			path_encode: "/v1/transform/encode/payments",
			path_decode: "/v1/transform/decode/payments",
			token: "root",
			encode_ccn: "4980-9999-8888-7777",
			decode_ccn: null,
			resp_encode: null,
			resp_decode: null
		},
		methods: {
			cache: false,
			encode: function(event) {
				 
				var config = { 
					headers: {
						'Content-Type': 'application/json',
						'X-Vault-Token': this.token
					}	
				}

				var payload = { 'value': this.encode_ccn }

				axios
					.post(this.addr + this.path_encode, payload, config )
					.then( response => {
						this.resp_encode = response.data;
						this.decode_ccn = response.data.data.encoded_value;
				}, (error) => {
					this.resp_encode.data = error;
				});
			},
			
			decode: function(event) {
				 
				var config = { 
					headers: {
						'Content-Type': 'application/json',
						'X-Vault-Token': this.token
					}	
				}

				var payload = { 'value': this.decode_ccn }

				axios
					.post(this.addr + this.path_decode, payload, config )
					.then( response => {
						this.resp_decode = response.data;
				}, (error) => {
					this.resp_decode.data = error;
				});
			}
		}
	}
)
