// ################################################################ \\
// # 					MMM-Pages-Screencast					  # \\
// # 		Interface between MMM-Pages and MMM-Screencast 		  # \\
// ################################################################ \\

Module.register("MMM-Pages-Screencast", {
	defaults: {
		homePage: 0,
		castPage: 1,
	},

	start: function () {
		this.logMessage('Started.');
	},

	notificationReceived: function (notification, payload, sender) {
		switch (notification) {
			case 'MMM-Screencast:LAUNCH-APP':
				this.sendNotification('PAGE_CHANGED', this.config.castPage);
				break;
			case 'MMM-Screencast:STOP-APP':
				this.sendNotification('PAGE_CHANGED', this.config.homePage);
				break;
		}
	},

	/**
	 * Function to log message
	 * @param {String} message
	 * @param {String} type
	 */
	logMessage: function (message, type) {
		switch (type) {
			case 'erorr':
				Log.error(`Module ${this.name} | ${message}`);
				break;
			default:
				Log.info(`Module ${this.name} | ${message}`);
				break;
		}
	},
});
