import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI & Research',
    Svg: require('@site/static/img/undraw_artificial_intelligence.svg').default,
    description: (
      <>
        Passionate about AI research, knowledge engineering, and data science.
        Working on cutting-edge projects in machine learning and digital systems.
      </>
    ),
  },
  {
    title: 'Software Engineering',
    Svg: require('@site/static/img/undraw_programming.svg').default,
    description: (
      <>
        Experienced in full-stack development, with expertise in modern
        technologies and frameworks. Building scalable and efficient solutions.
      </>
    ),
  },
  {
    title: 'Hackathon Enthusiast',
    Svg: require('@site/static/img/undraw_code_review.svg').default,
    description: (
      <>
        Love participating in hackathons and competitive programming.
        Winner of multiple tech competitions and challenges.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
