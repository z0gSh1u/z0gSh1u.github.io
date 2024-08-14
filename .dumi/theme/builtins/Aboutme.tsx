import React from 'react';
import { Row, Col, Avatar } from 'antd';
import DumiP from './_DumiP';
import styled from 'styled-components';

const MyName = styled.p`
  font-size: 2em;
  font-weight: bold;
  font-family: 'Noto Serif SC', serif;
  margin-block: 0;
`;

const DescriptionZHCN = (
  <DumiP>
    我目前正在
    <a href="https://www.antgroup.com/" target="_blank">
      蚂蚁集团
    </a>
    的
    <a href="https://xtech.antfin.com/" target="_blank">
      体验技术部
    </a>
    从事前端工程师工作，并在向全栈工程师方向发展。
  </DumiP>
);

export default function Aboutme() {
  return (
    <Row style={{ marginBottom: '2em', marginTop: '1em' }} gutter={16}>
      <Col span={16}>
        <MyName>卓旭</MyName>
        {DescriptionZHCN}
      </Col>
      <Col span={8} style={{ textAlign: 'right' }}>
        <Avatar size={192} src={'/photo.jpg'}></Avatar>
      </Col>
    </Row>
  );
}
