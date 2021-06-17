import React from 'react';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import OBBullet from '../components/OBBullet';

const OBKeyFeatures2 = () => (
  <OBSectionBodyTemplate
    title="Key Features"
    subTitle="Collections"
    subTitle2="Add Notes to a Collection"
  >

    <OBBullet number={1} text="Add, edit, or delete notes about the Collection." />
    <OBBullet
      number={2}
      text="Add, edit, or delete notes about the individual Records from the Collection."
    />
  </OBSectionBodyTemplate>
);

export default OBKeyFeatures2;
