export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const secret = searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response(JSON.stringify({ message: "Invalid token" }), {
      status: 401,
    });
  }

  try {
    const path = searchParams.get("path") || "/";

    await res.revalidate(path);

    return new Response(JSON.stringify({ revalidated: true, path }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Error revalidating", error: err }), {
      status: 500,
    });
  }
}
