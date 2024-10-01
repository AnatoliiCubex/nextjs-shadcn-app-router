import Link from "next/link";

import { Button } from "~/app/components/ui/button";

export default async function Page() {
  return (
    <div className={"w-screen h-screen flex justify-center items-center"}>
      <Link href={"/example"}>
        <Button>Go to example page</Button>
      </Link>
    </div>
  );
}
