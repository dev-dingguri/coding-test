// https://programmers.co.kr/learn/courses/30/lessons/92334

let solution = (id_list, report, k) => {
  let uniqueReport = [...new Set(report)].map(val => val.split(' '));
  let targets = new Map(); // key: 신고당한 유저 ID, value: 신고당한 횟수
  uniqueReport.forEach(val => {
    let target = val[1];
    targets.set(target, targets.get(target) + 1 || 1);
  });
  let mailCnt = new Map(); // key: 신고한 유저 ID, value: 처리 결과 메일 횟수
  uniqueReport.forEach(val => {
    let target = val[1];
    if(targets.get(target) >= k) {
      let reporter = val[0];
      mailCnt.set(reporter, mailCnt.get(reporter) + 1 || 1);
    }
  });
  return id_list.map(val => mailCnt.get(val) || 0);
};