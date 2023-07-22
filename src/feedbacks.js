const { combineRgb } = require('@companion-module/base')

module.exports = {
	initFeedbacks: function() {
		let self = this;
		let feedbacks = {};

		feedbacks.state_color = {
				name: 'Change color from Sequence State',
				description: 'Change the colors of a bank according to the Seq state',
				options: [
					{
						type: 'colorpicker',
						label: 'Running: Foreground color',
						id: 'run_fg',
						default: combineRgb(255,255,255)
					},
					{
						type: 'colorpicker',
						label: 'Running: Background color',
						id: 'run_bg',
						default: combineRgb(0,100,0)
					},
					{
						type: 'colorpicker',
						label: 'Paused: Foreground color',
						id: 'pause_fg',
						default: combineRgb(255,255,255)
					},
					{
						type: 'colorpicker',
						label: 'Paused: Background color',
						id: 'pause_bg',
						default: combineRgb(170,80,0)
					},
					{
						type: 'colorpicker',
						label: 'Stopped: Foreground color',
						id: 'stop_fg',
						default: combineRgb(255,0,0)
					},
					{
						type: 'colorpicker',
						label: 'Stopped: Background color',
						id: 'stop_bg',
						default: combineRgb(0,0,0)
					}
				],
				callback: function(feedback) {
					if (self.feedbackstate.seqstate == 'Play') {
						return {
							color: feedback.options.run_fg,
							bgcolor: feedback.options.run_bg
						};
					}
					else if (self.feedbackstate.seqstate == 'Pause') {
						return {
							color: feedback.options.pause_fg,
							bgcolor: feedback.options.pause_bg
						}
					}
					else if (self.feedbackstate.seqstate == 'Stop') {
						return {
							color: feedback.options.stop_fg,
							bgcolor: feedback.options.stop_bg
						}
					}
				}
			}

			feedbacks.next_Q_color = {
				name: 'Change color depending on Cue remaining Time',
				description: 'Change the colors of a bank according to the Time until next Cue',
				options: [
					{
						type: 'colorpicker',
						label: 'Running more than 10 sec : Foreground color',
						id: 'countdown_fg',
						default: combineRgb(0,0,0)
					},
					{
						type: 'colorpicker',
						label: 'Running more than 10 sec: Background color',
						id: 'countdown_bg',
						default: combineRgb(255,255,0)
					},
					{
						type: 'colorpicker',
						label: 'Running 10 sec or less: Foreground color',
						id: 'less10_fg',
						default: combineRgb(255,0,0)
					},
					{
						type: 'colorpicker',
						label: 'Running 10 sec or less: Background color',
						id: 'less10_bg',
						default: combineRgb(255,153,51)
					},
					{
						type: 'colorpicker',
						label: 'Running 5 sec or less: Foreground color',
						id: 'less05_fg',
						default: combineRgb(255,255,255)
					},
					{
						type: 'colorpicker',
						label: 'Running 5 sec or less: Background color',
						id: 'less05_bg',
						default: combineRgb(255,0,0)
					}
				],
				callback: function(feedback) {
					if (self.feedbackstate.remainingQtime == 'Normal') {
						return {
							color: feedback.options.countdown_fg,
							bgcolor: feedback.options.countdown_bg
						};
					}
					else if (self.feedbackstate.remainingQtime == 'Less10') {
						return {
							color: feedback.options.less10_fg,
							bgcolor: feedback.options.less10_bg
						}
					}
					else if (self.feedbackstate.remainingQtime == 'Less05') {
						return {
							color: feedback.options.less05_fg,
							bgcolor: feedback.options.less05_bg
						}
					}
				}
			}

		self.setFeedbackDefinitions(feedbacks);
	}
}
