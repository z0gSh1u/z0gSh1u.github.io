import React from 'react';
interface SocialBlockProps {
  bgc: string;
  fgc: string;
  icon: string;
  title: string;
  url: string;
}

export default function SocialBlock(props: SocialBlockProps) {
  return (
    <div
      style={{ backgroundColor: props.bgc }}
    ></div>
  );
}
