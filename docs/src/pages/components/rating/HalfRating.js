import React from 'react';
import Rating from '@material-ui/lab/Rating';

export default function HalfRating() {
  return <Rating name="half-rating" defaultValue={2.3} precision={0.5} />;
}
