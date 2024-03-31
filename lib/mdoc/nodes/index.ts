import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,TableFooter} from "@/components/ui/table";
import CodeBlock from "@/components/code-block";

export default {
  table: {
    render: Table,
  },
  thead: {
    render: TableHeader,
  },
  tbody: {
    render: TableBody,
  },
  tr: {
    render: TableRow
  },
  th: {
    render: TableHead,
  },
  td: {
    render: TableCell,
  },
  caption: {
    render: TableCaption,
  },
  fence: {
    render: CodeBlock,
    attributes: {
      language: { type: String, required: false, default: 'javascript' }
    }

  }
}