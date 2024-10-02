import Link from "next/link";

import { Button } from "~/app/components/ui/button";

export default async function Page() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Link href={"/example"}>
        <Button>Go to example page</Button>
      </Link>
    </div>
  );
}
