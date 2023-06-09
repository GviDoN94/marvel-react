import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import ErrorMessage from '../errorMessage/ErrorMessage';
import { Helmet } from 'react-helmet';

import motionParams from '../../services/motionParams';

const Page404 = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="This page is not found" />
        <title>This page is not found</title>
      </Helmet>
      <motion.div {...motionParams}>
        <ErrorMessage />
        <p
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '24px',
          }}
        >
          Page doesn&rsquo;t exist
        </p>
        <Link
          style={{
            textAlign: 'center',
            display: 'block',
            marginTop: '30px',
            fontWeight: 'bold',
            fontSize: '24px',
          }}
          to="/"
        >
          Back to main page
        </Link>
      </motion.div>
    </>
  );
};

export default Page404;
