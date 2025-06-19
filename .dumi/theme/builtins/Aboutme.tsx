// The aboutme component for the home page.

import React, { useMemo } from 'react';
import { Row, Col, Avatar } from 'antd';
import styled from 'styled-components';
import markdownit from 'markdown-it';
import { useLocale } from 'dumi';

// Markdown renderer with target="_blank" for all links
const md = markdownit();
const defaultRender =
  md.renderer.rules.link_open ||
  function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };
md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  tokens[idx].attrSet('target', '_blank');
  return defaultRender(tokens, idx, options, env, self);
};

const Container = styled.div`
  color: #30363f;
  font-size: 1.25em;
  line-height: 1.75;
`;

const MyChineseName = styled.span`
  font-size: 2em;
  font-weight: 500;
  font-family: 'Noto Serif SC', serif;
`;

const MyEnglishName = styled.span`
  font-size: 2em;
  font-weight: 500;
  font-family: 'Edu VIC WA NT Beginner';
  &:before {
    content: ' ';
  }
`;

// Description markdown content
const mdENUS = `Hi! I'm a web front-end developer in China currently working at [Ant Group](https://www.antgroup.com/). 
I'm learning towards a full-stack engineer. You can reach me via my email [zx.cs@qq.com](mailto:zx.cs@qq.com).`;

export default function Aboutme() {
  const lang = useLocale();
  const Description = useMemo(
    () => (
      <Container
        dangerouslySetInnerHTML={{
          __html: md.render(mdENUS.replace(/\n/g, '')),
        }}
      />
    ),
    [lang.id],
  );

  return (
    <Row style={{ marginBottom: '2em', marginTop: '1em' }} gutter={16}>
      <Col lg={16} md={24} sm={24}>
        <MyChineseName>卓旭</MyChineseName>
        <MyEnglishName>ZHUO Xu</MyEnglishName>
        {Description}
      </Col>
      <Col lg={8} md={24} sm={24} style={{ textAlign: 'center' }}>
        <Avatar size={192} src={'/photo.jpg'}></Avatar>
      </Col>
    </Row>
  );
}
