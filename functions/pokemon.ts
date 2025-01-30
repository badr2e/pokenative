export function getPokemonId(url: string): number {
  return parseInt(url.split("/").at(-2)!, 10);
}

export function getPokemonArtwork(id: number | string): string {
  return `https://raw.githubusercontent.com/PokeAPI/Sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export function formatWeight(weight?: number): string {
  if (!weight) {
    return "";
  }
  return (weight / 10).toString().replace(".", ",") + " kg";
}

export function formatSize(size?: number): string {
  if (!size) {
    return "";
  }
  return (size / 10).toString().replace(".", ",") + " kg";
}
