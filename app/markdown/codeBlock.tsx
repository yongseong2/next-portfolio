// import Highlight, { defaultProps, Language } from 'prism-react-renderer';
// import duotoneLight from 'prism-react-renderer/themes/duotoneLight';

interface CodeBlockProps {
  children: string;
  className: string;
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
  const language = className.replace(/language-/, '');

  return <div></div>;
}

// <Highlight
//   {...defaultProps}
//   theme={duotoneLight}
//   code={children}
//   language={language as Language}
// >
//   {({
//     // eslint-disable-next-line no-shadow
//     className,
//     style,
//     tokens,
//     getLineProps,
//     getTokenProps,
//   }) => (
//     <pre className={className} style={{ ...style }}>
//       {tokens.map((line, i) => (
//         <div key={i} {...getLineProps({ line, key: i })}>
//           {line.map((token, key) => (
//             <span key={key} {...getTokenProps({ token, key })} />
//           ))}
//         </div>
//       ))}
//     </pre>
//   )}
// </Highlight>
