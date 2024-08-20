import { NextRequest, NextResponse } from 'next/server';

export async function GET(_request: NextRequest, {params}: any) {
  // Convert headers to an object
  const path = params.slug;
  return NextResponse.json({ test: 'test(app)', slug: path });
}
