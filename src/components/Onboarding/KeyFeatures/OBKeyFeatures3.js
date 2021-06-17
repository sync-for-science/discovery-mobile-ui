import React from 'react';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import OBBullet from '../components/OBBullet';

const OBKeyFeatures3 = () => (
  <OBSectionBodyTemplate
    title="Key Features"
    subTitle="Collections"
    subTitle2="Analyze Collection"
  >
    <OBBullet number={1} text="View a Collection with the support of the Timeline." />
    <OBBullet
      number={2}
      text="Highlight medical events in the Timeline to find patterns of occurrence."
    />
    <OBBullet
      number={3}
      text="Sort the relevant Records in different ways to reveal interesting patterns."
    />
  </OBSectionBodyTemplate>
);

export default OBKeyFeatures3;
