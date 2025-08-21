
type NextFetchRequest = {
    revalidate?: number | false;
    tages? : string[];
}

interface FetchAPIOptions {
    method: "GET" | "POST" | "PUT" | "DELETE";
    authToken?: string;
    body?: Record<string, unknown>;
    next?: NextFetchRequestConfig;
}

export async function fetchAPI(url: string, options: FetchAPIOptions) {
    const { method, authToken, body, next } = options;

    const headers: RequestInit & { next?: NextFetchRequest } = {
    method,
    headers: {
        "Content-Type": "application/json",
        ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
    ...(body && { body: JSON.stringify(body) }),
    ...(next && { next }),
    };


    try {
        const response = await fetch(url, headers);
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json") && response.ok) {
            return await response.json();
        } else {
            return { status: response.status, statusText: response.statusText };
        }
    } catch (error) {
        console.log(`Error ${method} data:`, error);
        throw error;
    }
}
