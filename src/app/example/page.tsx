import { Suspense } from "react";

import HomeSkeleton from "~/app/components/skeletons/example-skeleton/example-skeleton";
import HomeView from "~/app/views/home-view/home-view";

export default async function Page() {
  return (
    <Suspense fallback={<HomeSkeleton />}>
      <HomeView />
    </Suspense>
  );
}
