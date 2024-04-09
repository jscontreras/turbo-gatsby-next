export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export async function GET(request: Request) {
  // URL of the external page you want to fetch
  const { pathname } = new URL(request.url);
  console.log('pathname', pathname)
  const url = `https://gatsby.tc-vercel.dev/${pathname}`;
  try {
    // Fetch the external URL (You can also cache this one to revalidatePath usage)
    const response = await fetch(url, { cache: 'no-store' });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }

    // Read the response body as text
    const htmlContent = await response.text();

    // Return the HTML content as a response
    // Note: You might need to adjust the Content-Type header based on the content you're fetching
    return new Response(htmlContent, {
      headers: { 'Content-Type': 'text/html',
        // Adding cache to reduce function callbacks
        'Cache-Control': 'max-age=10',
        'CDN-Cache-Control': 'max-age=60',
        'Vercel-CDN-Cache-Control': 'max-age=3600',
       },
    });
  } catch (error) {
    console.error(error);
    return new Response('<h1>Error fetching the page</h1>', {
      status: 500,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  }
}