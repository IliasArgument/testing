import React, { useState, useEffect } from 'react';

const SwypeRight = () => {
	const [time, setTime] = useState({ date: new Date() });
	useEffect(() => {
		setInterval(() => setTime({ date: new Date() }), 1000);
	}, [time, setTime]);
	return (
		<div className="time">
			<div className="time-now">{time.date.toLocaleTimeString()}</div>
		</div>
	);
};

export default SwypeRight;