export function getItems(key: string) {
    return localStorage.getItem(key)
}

export function setItem(key: string, value: string): void {
    return localStorage.setItem(key, value)
}
