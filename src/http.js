export async function getJson(url, params = null) {
    if (params) {
        url = urlWithParams(url, params);
    }

    const req = await window.fetch(url);
    return await req.json();
}

export function urlWithParams(url, params) {
    url = new URL(url);

    Object.keys(params).forEach((key) => {
        url.searchParams.append(key, params[key]);
    });

    return String(url);
}