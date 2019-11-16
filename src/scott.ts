const badwords: string[] = ["of", "of a", "for", "the"]

const correct = (s: string) => {
  // console.log(s)
  const ns = (s.endsWith(" - Scott The Woz")) 
    ? s.slice(0, 0 - " - Scott The Woz".length) : s;
  for (const i in badwords) {
    const word = badwords[i]
    if (ns.trim().endsWith(word)) {
      const news = ns.substring(0, ns.length - word.length)
      return `${news.trim()} - Scott The Woz`
    }
  }
  return `${ns.trim()} - Scott The Woz`
}

export default async (data: string) => {
  return correct(data)
}