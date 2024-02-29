// import React from 'react';
// import millify from 'millify';
// import { Typography, Row, Col, Statistic } from 'antd';
// import {Link} from 'react-router-dom';
// import { useGetCryptosQuery } from '../services/cryptoApi';
// const { Title } = Typography;

// const Homepage = () => {
//   const {data, isFetching } = useGetCryptosQuery();
//   const globalStats = data?.data?.stats;

//   console.log(data);

//   if(isFetching) return 'Loading...';
//   return (
//     <>
//         <Title level={2} className='heading'> Global Crypto Stats</Title>
//         <Row>
//             <Col span={12}><Statistic title="Total Cryptocurrencies" value="{globalStats.total}" /></Col>
//             <Col span={12}><Statistic title="Total Exchanges" value="5" /></Col>
//             <Col span={12}><Statistic title="Total Market Cap" value="5" /></Col>
//             <Col span={12}><Statistic title="Total Total 24h Volume" value="5" /></Col>
//             <Col span={12}><Statistic title="Total Total Markets" value="5" /></Col>
//         </Row>
//     </>
//   )
// }

import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import {Link} from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News} from '../components';


const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching, error} = useGetCryptosQuery(10); // Added error for error handling
  const globalStats = data?.data?.stats;

  if (error) return 'An error has occurred.'; // Basic error handling
  if (isFetching) return 'Loading...';

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(globalStats?.total || 0)} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges || 0)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats?.totalMarketCap || 0)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats?.total24hVolume || 0)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets || 0)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className='home-title'> Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified/>

    </>
  );
}




export default Homepage;
