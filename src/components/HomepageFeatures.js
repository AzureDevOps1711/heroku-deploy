import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Summary',
    //Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Mr.Krishna M S has around 9.5 years of technical experience in result oriented professional experience in IT Industry. Experienced Azure DevOps tools such as Azure Boards, Azure Repos, Azure Pipelines and Azure Artifacts. Has good experience in DevOps tools like GIT, AZURE DevOps using Azure portals and managed Azure resources to Azure Resource Manager. Experienced with CICD Deployments in Azure cloud, Oracle cloud. Has working experience in ARM templates to deploy and update multiple resources in Azure. Has exposure in PowerShell scripting to automate many services management in azure. Experienced on working with Azure Compute, networking and Storage services. Has an exposure to Terraform IaC tool.
      </>
    ),
  },
  /*{
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },*/
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
