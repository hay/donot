export function timeout(ms) {
    return new Promise((resolve) => {
        // Check if we're in a browser or not
        if (typeof window === 'undefined') {
            setTimeout(resolve, ms);
        } else {
            window.setTimeout(resolve, ms);
        }
    });
}