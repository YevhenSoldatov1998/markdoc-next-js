import React from 'react';
import {cn} from "@/lib/utils";


const Heading = ({
                              level = 1,
                              weight = 'semibold',
                              opacity = '1',
                              marginTop = 0,
                              marginBottom = 0,
                              children
                            }) => {
  const HeadingTag = `h${level}`

  return (
    <HeadingTag className={cn(`heading-${level} !font-${weight}`)}
                style={{
                  opacity,
                  marginBottom,
                  marginTop
                }}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;