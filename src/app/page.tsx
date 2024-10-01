import { Suspense } from "react";

import HomeSkeleton from "~/components/skeletons/home-skeleton/home-skeleton";
import HomeView from "~/views/home-view/home-view";

export default async function Home() {
  return (
    <Suspense fallback={<HomeSkeleton />}>
      <HomeView />
    </Suspense>
  );
}
