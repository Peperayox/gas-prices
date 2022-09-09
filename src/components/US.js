import React, { useState } from 'react';
import { Card, Row, Col, Image, Typography } from 'antd';
import { useGetGasPricesQuery } from '../services/gasApi';

const { Title } = Typography;

const US = () => {
  const { data: europePriceList, isFetching } = useGetGasPricesQuery();
  const [prices, setPrices] = useState(europePriceList);

  const lookup = require('country-code-lookup');

  const Mexico = 'Mexico';

  console.log(lookup.byCountry('Albania').iso2.toLowerCase());

  const flagUrl1 = 'https://img.icons8.com/color/48/000000/';
  const flagUrl2 = '.png';
  const flagUrl3 = '';
  var countriesArray = [1];
  console.log(prices);
  console.log(!prices);
  if (isFetching) return 'Loading...';
  for (let i = 0; i < Object.keys(europePriceList).length; i++) {
    countriesArray.push(Object.values(europePriceList)[i].gasolineEuro95);
    console.log(countriesArray);
  }
  return (
    <>
      <Title level={2} className="heading">
        Freshely fetched, API fed, European Gas prices
      </Title>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {europePriceList.map((price) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card">
            <Card
              title={`${Object.keys(price)}`}
              extra={
                <Image
                  width={70}
                  src={
                    flagUrl1 + Object.keys(price)[0].toLowerCase() + flagUrl2
                  }
                  alt="flag missing :("
                />
              }
            >
              <p>
                Gasoline: <i>{Object.values(price)[0].gasolineEuro95} €/lt </i>
              </p>
              <p>
                Diesel: <i>{Object.values(price)[0].diesel} €/lt </i>
              </p>
              <p>
                LPG: <i>{Object.values(price)[0].lpg} €/lt </i>
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default US;
