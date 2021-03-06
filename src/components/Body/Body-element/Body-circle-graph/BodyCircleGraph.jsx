import Circle from './Circle';

import desktop from './svg/desktop.svg';
import mobileViews from './svg/mobile-views.svg';

import './BodyCircleGraph.scss';
import '../../../../vars_and_mixins/colors.scss';

const BodyCircleGraphs = () => {
	return (
		<div className="circle-graph">
			<div className="circle-graph-box">
				<div className="circle-graph-text-box">
					<span className="main-text">
						Reach by devices
						<span className="text-for-mobile">
							Desktop 20%,   Mobile 80%
						</span>
					</span>
				</div>
				<div className="box-graph-circle">
					<Circle/>
					<div className="circle-graph-legend">
						<div className="box-legend-circle">
							<img
								src={desktop}
								className="icon-circle-graph"
								alt="circle"
							/>
							<span className="text-legend-circle">Desktop</span>
						</div>
						<div className="box-legend-circle">
							<img
								src={mobileViews}
								className="icon-circle-graph"
								alt="circle"
							/>
							<span className="text-legend-circle">Mobile Views</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BodyCircleGraphs;