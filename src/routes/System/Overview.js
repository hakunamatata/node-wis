import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Avatar, Card } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './Overview.less';

// @connect(({overview})=>({
//   ...overview
// }))

@connect(({ overview }) => ({
  overview,
}))
export default class Overview extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'overview/fetchOperator',
    });
  }

  render() {
    const operator = {};
    const pageHeaderContent = (
      <div className={styles.pageHeaderContent}>
        <div className={styles.avatar}>
          <Avatar size="large" src={operator.avatar} />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>{operator.greeting}</div>
          <div>{operator.tag}</div>
        </div>
      </div>
    );

    return (
      <PageHeaderLayout content={pageHeaderContent}>
        <Row gutter={24}>
          <Col xl={16} lg={24} md={24} sm={24} xs={24}>
            <Card title="Service Monitor" className={styles.card} />
            <Card title="Events" className={styles.card} />
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <Card title="Shortcut" className={styles.card} />
            <Card title="Find Property" className={styles.card} />
            <Card title="Latest Property" className={styles.card} />
          </Col>
        </Row>
      </PageHeaderLayout>
    );
  }
}
