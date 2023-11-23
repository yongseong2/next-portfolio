import { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from 'mdx/types';

// 깃허브 마크다운 css
import '@/app/styles/markdown.css';
// 코드 블럭
import '@/app/styles/codeBlock.css'
// pre:has(.hljs), .hljs 이걸로 바꿔줘야함
// https://github.com/highlightjs/highlight.js/blob/main/src/styles/an-old-hope.css


interface MDXProps {
  children: ReactNode;
}

const components = {
  img:({ ...props }) => (
    <img
      {...props}
      alt={props.alt}
      style={{
        maxWidth: '100%',
        maxHeight: '500px',
        display: 'block',
        margin: '10px auto',
      }}
    />
  ),
};

export default function MDXLayout({ children }: MDXProps) {
  return (
    <MDXProvider components={components as MDXComponents}>
      <div className='markdown-body'>{children}</div>
    </MDXProvider>
  );
}
