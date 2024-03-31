import React from 'react';
import slugConfig from "@/lib/slugConfig";
import path from "path";
import fs from "fs/promises";
import Markdoc from "@markdoc/markdoc";
import config from "@/lib/mdoc";
import {notFound} from "next/navigation";
import {unstable_setRequestLocale} from "next-intl/server";


async function getMarkdown({params}) {
  const slug = (slugConfig)?.[params.locale]?.[params?.slug] ?? params.slug
  const filePath = path.join(process.cwd(), 'markdoc', `${params.locale}/about.mdoc`);
  try {
    const content = await fs.readFile(filePath, 'utf8')
    const parse = Markdoc.parse(content)
    const doc = Markdoc.transform(parse, config)
    const result = Markdoc.renderers.react(doc, React)
    return {result, slug};
  } catch (e) {
    return notFound();
  }

}

const AboutProject = async (props) => {
  const {result} = await getMarkdown(props)
  return (
    <div>
      {result}
    </div>
  );
};

export default AboutProject;