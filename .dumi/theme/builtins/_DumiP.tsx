import React from 'react';

const DumiDefaultPStyle: React.CSSProperties = {
  color: '#30363f',
  fontSize: '16px',
  lineHeight: '1.75',
};

export default function _DumiP(props: {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <p style={{ ...(props.style || {}), ...DumiDefaultPStyle }}>{props.children}</p>
  );
}
