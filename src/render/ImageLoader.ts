export class ImageLoader {
  private static cache: Map<string, HTMLImageElement> = new Map();

  public static preload(url: string): HTMLImageElement | null {
    if (typeof Image === 'undefined') {
      return null;
    }
    if (this.cache.has(url)) {
      return this.cache.get(url)!;
    }
    const img = new Image();
    img.src = url;
    this.cache.set(url, img);
    return img;
  }

  public static get(url?: string): HTMLImageElement | null {
    if (!url) return null;
    if (typeof Image === 'undefined') return null;

    if (this.cache.has(url)) {
      const img = this.cache.get(url)!;
      return img.complete && img.naturalWidth > 0 ? img : null;
    }

    this.preload(url);
    return null;
  }

  public static preloadAll(urls: string[]): void {
    urls.forEach((u) => {
      if (u) this.preload(u);
    });
  }
}
