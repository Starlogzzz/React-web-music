const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lyricString) {
  const lineStrings = lyricString.split("\n");
  let lyricList = [];
  for (let line of lineStrings) {
    if(line) {
      const lyricTime = parseExp.exec(line);

      if(!lyricTime) continue;
      const time1 = lyricTime[1] * 60 * 1000;
      const time2 = lyricTime[2] * 1000;
      const time3 = lyricTime[3].length === 2 ? lyricTime[3]*10:lyricTime[3]*1;
      const totalTime = time1 + time2 + time3;
      
      const word = line.replace(parseExp, "").trim();
      const lineObj = {totalTime, word};
      lyricList.push(lineObj)
    }
  }
  return lyricList;
}