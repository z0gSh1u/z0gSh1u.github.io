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
  font-size: 16px;
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
const mdZHCN = `
嗨！我是一名正在 [蚂蚁集团](https://www.antgroup.com/) 工作的 Web 前端工程师，并正向全栈工程师方向发展。
业余时间，我喜欢出门逛逛（轻度）、玩电子游戏和学习新技术。最近，我计划系统地开始健身，并学习一门乐器。
我这段时间的座右铭是——珍惜年轻，享受年轻！你可以通过我的邮箱 [zx.cs@qq.com](mailto:zx.cs@qq.com) 联系我。
`;

const mdENUS = `Hi! I'm a web front-end developer in China currently working at [Ant Group](https://www.antgroup.com/). 
I'm learning towards a full-stack engineer. In my spare time, I like to hang out (a little bit), play video games and learn new technologies. 
Recently, I plan to start working out and learn a musical instrument. Cherish your youth and enjoy it! This is my motto recently.
You can contact me via my email [zx.cs@qq.com](mailto:zx.cs@qq.com).`;

export default function Aboutme() {
  const lang = useLocale();
  const Description = useMemo(
    () => (
      <Container
        dangerouslySetInnerHTML={{
          __html: md.render(
            (lang.id === 'en-US' ? mdENUS : mdZHCN).replace(/\n/g, ''),
          ),
        }}
      ></Container>
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
