import React, {PropTypes} from 'react';

const FractionResult = ({data}) => {
  return(

  <p>{data.count + data.rupiah}</p>

  ) ;

};

FractionResult.propTypes = {
  data: PropTypes.object
};

export default FractionResult;
