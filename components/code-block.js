'use client';

import React, {useEffect, useRef} from 'react';
import Prism from 'prismjs'


const CodeBlock= ({language, children}) => {
  const codeElement = useRef(null);

  useEffect(() => {
    if (codeElement.current) {
      Prism.highlightElement(codeElement.current)
    }
  }, [children, language])


  return (
    <pre>
      <code className={`whitespace-pre-wrap language-${language} rounded-2xl my-8`} ref={codeElement}>
        {children}
      </code>
    </pre>
  );
};

export default CodeBlock;