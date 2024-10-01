import React from "react";

import { useHomeSkeletonStyle } from "~/app/components/skeletons/home-skeleton/home-skeleton.style";

const HomeSkeleton = () => {
  const styles = useHomeSkeletonStyle();

  return (
    <div className={styles.container}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className={styles.card}>
          <h2 className={styles.title} />
          <p className={styles.description} />
          <p className={styles.price} />
        </div>
      ))}
    </div>
  );
};

export default HomeSkeleton;
