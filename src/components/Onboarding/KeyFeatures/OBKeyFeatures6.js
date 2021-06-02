import React from 'react';

import OBSectionBodyTemplate from '../components/OBSectionBodyTemplate';
import OBBullet from '../components/OBBullet';

// wireframe page 15
const OBKeyFeatures6 = () => (
  <OBSectionBodyTemplate title="Key Features" subTitle="Profile">
    <OBBullet
      number={1}
      text="See a high level view of your data, organized by Records or Providers."
    />
    <OBBullet
      number={2}
      text="Manage which Provider you are pulling medical Records from."
    />
  </OBSectionBodyTemplate>
);

export default OBKeyFeatures6;
