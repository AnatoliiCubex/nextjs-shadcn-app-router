import { NextResponse } from "next/server";

import { ExampleService } from "~/api/services/example.service";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const products = await ExampleService.getExample();
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
