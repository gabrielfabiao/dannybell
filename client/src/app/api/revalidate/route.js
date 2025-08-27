import { revalidatePath } from 'next/cache';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  
  try {
    const path = searchParams.get("path") || "/";
    
    revalidatePath(path);

    return new Response(JSON.stringify({ revalidated: true, path }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Error revalidating", error: err }), { status: 500 });
  }
}