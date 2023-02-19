export function copyToClip(text: string) {
  if (window.navigator) {
    window.navigator.clipboard.writeText(text);
  }
}
