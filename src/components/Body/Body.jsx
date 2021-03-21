import React from 'react';

import BodyStatistic from './Body-element/Body-statistic/BodyStatistic';
import BodyMediumGraph from './Body-element/Body-medium-graph/BodyMediumGraph';
import BodyCircleGraph from './Body-element/Body-circle-graph/BodyCircleGraph';
import BodyCandleGraph from './Body-element/Body-candle-graph/BodyCandleGraph';
import BodyGeoStatistic from './Body-element/Body-geo-statistic/BodyGeoStatistic';

import './Body.scss';

const Body = () => {
	return (
		<section className="body-main-section">
			<div className="body-main-box">
				<div className="body-top">
					<BodyStatistic/>
				</div>
				<div className="body-medium-box">
					<BodyMediumGraph/>
					<BodyCircleGraph/>
				</div>
				<div className="body-bottom-box">
					<BodyCandleGraph/>
					<BodyGeoStatistic/>
				</div>
			</div>
		</section>
	);
};

export default Body;