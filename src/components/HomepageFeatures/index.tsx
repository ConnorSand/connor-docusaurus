import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  baseHref: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AWS',
    Svg: require('@site/static/img/aws_orange.svg').default,
    description: (
      <>
        AWS Insights
      </>
    ),
    baseHref: 'docs/aws/intro',
  },
  {
    title: 'DevOps',
    Svg: require('@site/static/img/dev.svg').default,
    description: (
      <>
        DevOps Learnings
      </>
    ),
    baseHref: 'docs/devops/intro',
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/blog.svg').default,
    description: (
      <>
        Blogging my Cloud Battles.
      </>
    ),
    baseHref: '/', 
  },
];

function Feature({ title, Svg, description, baseHref }: FeatureItem) {
  // Construct the href based on the title and whether it's a documentation link
  const href = `${baseHref}`;

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={href} className={styles.featureLink}>
          <Svg className={`${styles.featureSvg} ${styles.hoverEffect}`} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
