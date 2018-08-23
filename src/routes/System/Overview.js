import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { Row, Col, Avatar, Card } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './Overview.less';


@connect(({overview})=>({
  ...overview
}))
export default class Overview extends PureComponent{

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'overview/fetch',
    });
  }


  render(){
    const {data} = this.props
    console.log(data);
    const pageHeaderContent = (
      <div className={styles.pageHeaderContent}>
        <div className={styles.avatar}>
          <Avatar 
            size="large"
            src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>Morning Leo，wish you a good day!</div>
          <div>Here is the overview of works today.</div>
        </div>
      </div>
    );


    return (
      <PageHeaderLayout content={pageHeaderContent}>
       <Row gutter={24}>
       <Col xl={16} lg={24} md={24} sm={24} xs={24}>
        <Card title='Service Monitor'
              className={styles.card}></Card>
        <Card title='Events'
              className={styles.card}></Card>
       </Col>
       <Col xl={8} lg={24} md={24} sm={24} xs={24}>
       <Card title='Shortcut'
             className={styles.card}></Card>
       <Card title='Find Property'
             className={styles.card}></Card>
       <Card title='Latest Property'
             className={styles.card}></Card>
       </Col>
       </Row>
      </PageHeaderLayout>
    )
  }
}