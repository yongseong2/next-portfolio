import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from 'mdx/types';

import 'github-markdown-css';

interface MDXProps {
  children: React.ReactNode;
}

const components = {
  // code: CodeBlock,
  // img:
};

export default function MDXLayout({ children }: MDXProps) {
  return (
    <MDXProvider components={components as MDXComponents}>
      <div className='markdown-body'>{children}</div>
    </MDXProvider>
  );
}
