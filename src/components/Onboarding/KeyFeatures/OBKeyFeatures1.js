import React from 'react';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import OBBullet from '../components/OBBullet';

const OBKeyFeatures1 = () => (
  <OBSectionBodyTemplate
    title="Key Features"
    subTitle="Collections"
    subTitle2="Build a Collection"
  >
    <OBBullet number={1} text="Create a new Collection and give it a suitable name." />
    <OBBullet
      number={2}
      text="Define the time window you consider and filter the Record Categories and Providers you want."
    />
    <OBBullet
      number={3}
      text="Build a Collection by adding or removing Records with the help of a Timeline visualization."
    />
  </OBSectionBodyTemplate>
);

export default OBKeyFeatures1;
