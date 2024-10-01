import React from "react";

import { useHomeSkeletonStyle } from "~/components/skeletons/home-skeleton/home-skeleton.style";

const HomeSkeleton = () => {
  const classes = useHomeSkeletonStyle();

  return (
    <div className={classes.container}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className={classes.card}>
          <h2 className={classes.title} />
          <p className={classes.description} />
          <p className={classes.price} />
        </div>
      ))}
    </div>
  );
};

export default HomeSkeleton;
