/* eslint-disable no-console */

new Vue({
	el: "#app",
	data: {
		addr: "http://127.0.0.1:8200",
		path: "/v1/secret/foo",
		token: "root",
		resp: null
	},
	methods: {
		query: function(event) {
			 
			var config = { 
				headers: {
					'Content-Type': 'application/json',
					'X-Vault-Token': this.token
				}	
			}

			axios
				.get(this.addr + this.path, config )
				.then( response => {
					this.resp = response.data;
					console.log( this.resp );
			}, (error) => {
				console.log( error );
				this.resp.data = error;
			});
		}
	}
})
