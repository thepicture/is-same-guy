"use strict";

module.exports = (chat1, chat2) => {
  const wordsOfChat1 = new Map();
  const wordsOfChat2 = new Map();

  for (const [chat, map] of [
    [chat1, wordsOfChat1],
    [chat2, wordsOfChat2],
  ]) {
    const words = chat
      .flatMap((message) =>
        message.split(" ").map((word) => word.trim().toLowerCase())
      )
      .filter(Boolean);

    for (const word of words) {
      if (map.has(word)) {
        map.set(word, map.get(word) + 1);
      } else {
        map.set(word, 1);
      }
    }
  }

  const intersection = Object.fromEntries(
    [...wordsOfChat1.keys()]
      .map((key) =>
        wordsOfChat2.has(key) ? [key, wordsOfChat2.get(key)] : null
      )
      .filter(Boolean)
  );

  const score = Object.values(intersection).reduce(
    (sum, frequency) => sum + frequency,
    0
  );

  return score / (score + 1);
};
