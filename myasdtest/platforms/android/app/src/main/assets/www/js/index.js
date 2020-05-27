var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    onDeviceReady: function() {
		app.push = PushNotification.init({
			"android": {
				"senderID": "1036831153583"
			},
			"ios": {
				"sound": true,
				"vibration": true,
				"badge": true
			},
			"windows": {}
		});

		app.push.on('registration', function(data) {
			console.log("ID: "+data.registrationId);
			var oldRegId = localStorage.getItem('registrationId');
			if (oldRegId !== data.registrationId) {
				localStorage.setItem('registrationId', data.registrationId);
			}
		});

		app.push.on('error', function(e) {
			console.log("push error = " + e.message);
		});
		
		app.push.on('notification', function(data) {
			
		});
    }
};

app.initialize();
