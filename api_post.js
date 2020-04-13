/* eslint-disable no-console */

new Vue({
	el: "#app",
	data: {
		addr: "http://127.0.0.1:8200",
		path: "/v1/secret/foo",
		token: "root",
		payload: '{ "key": "1234567890" }',
		resp: null
	},
	methods: {
		cache: false,
		query: function(event) {
			 
			var config = { 
				headers: {
					'Content-Type': 'application/json',
					'X-Vault-Token': this.token
				}	
			}

			axios
				.post(this.addr + this.path, this.payload, config )
				.then( response => {
					this.resp = response.status;
			}, (error) => {
				this.resp = error;
			});
		}
	}
})
