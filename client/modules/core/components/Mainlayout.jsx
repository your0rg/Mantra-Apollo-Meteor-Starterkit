import React from 'react';

const Mainlayout = ({content = () => null }) => (
  <div>

    {content()}

  </div>
)

export default Mainlayout;
