import React from 'react';
import './Body.scss';
import BodyStatistic from './Body-element/Body-statistic/Body-statistic';
import BodyMediumGraph from './Body-element/Body-medium-graph/Body-medium-graph';
import BodyCircleGraph from './Body-element/Body-circle-graph/Body-circle-graph';
import BodyCandleGraph from './Body-element/Body-candle-graph/Body-candle-graph';
import BodyGeoStatistic from './Body-element/Body-geo-statistic/Body-geo-statistic';

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