import './Body-statistic.scss';
import BodyStatisticsElement from './BodyStatisticsElement';

const BodyStatistic = () => {
    const initData = [
        {
            title: 'Friends',
            people: 1,
            percent: 1,
            id: 1,
        },
        {
            title: 'Unique visitors',
            people: 2,
            percent: 2,
            id: 2,
        },
        {
            title: 'Folowers',
            people: 3,
            percent: 3,
            id: 3,
        },
    ];

    return (
        initData.map((data) => (
            <BodyStatisticsElement
                data={data}
            />
        ))
    );
};

export default BodyStatistic;
