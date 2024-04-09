export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export async function GET(request: Request) {
  // URL of the external page you want to fetch
  const { pathname } = new URL(request.url);
  console.log('pathname', pathname)
  const url = `https://gatsby.tc-vercel.dev/${pathname}`;
  try {
    // Fetch the external URL
    const response = await fetch(url);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }

    // Read the response body as text
    const htmlContent = await response.text();

    // Return the HTML content as a response
    // Note: You might need to adjust the Content-Type header based on the content you're fetching
    return new Response(htmlContent, {
      headers: { 'Content-Type': 'text/html' },
    });
  } catch (error) {
    console.error(error);
    return new Response('<h1>Error fetching the page</h1>', {
      status: 500,
      headers: { 'Content-Type': 'text/html' },
    });
  }
}