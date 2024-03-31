import {Button} from "@/components/ui/button";
import CodeBlock from "@/components/code-block";
import Heading from "@/components/heading";
import Spacing from "@/components/spacing";

export default {
  'button': {
    render: Button,
    attributes: {
      variant: 'default',
      size: 'default',
    },
  },
  code: {
    render: CodeBlock,
    attributes: {
      lang: {type: String},
    }


  },
  heading: {
    children: ['inline'],
    render: Heading,
    attributes: {
      level: {type: Number},
      opacity: {type: String},
      weight: {type: String},
      marginBottom: {type: String},
      marginTop: {type: String},
    }
  },

  spacing: {
    render: Spacing,
    attributes: {
      size: {type: String},
    },
  }

}
