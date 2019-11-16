const badwords: string[] = ["of", "of a", "for", "the"]

const correct = (s: string) => {
  const ns = (s.endsWith(" - Scott The Woz")) 
    ? s.slice(0, 0 - " - Scott The Woz".length) : s
  for (const word in badwords) {
    if (ns.endsWith(word)) {
      const news = ns.substring(0, s.length - word.length)
      return `${news.trim} - Scott The Woz`
    }
  }
}

export default async (data: string) => {
  const newdata = correct(data)
}