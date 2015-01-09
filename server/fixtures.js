if (Managers.find().count() === 0) {
  Managers.insert({
    name: 'Jon',
    teamName: 'FlyerMaker',
    managerPage: 'http://hockey.fantasysports.yahoo.com/hockey/26488/3',
    wins: '10'
  });

  Managers.insert({
    name: 'Ben',
    teamName: 'FreshPrinceOfBriere',
    managerPage: 'http://hockey.fantasysports.yahoo.com/hockey/26488/1',
    wins: '9'
  });

  Managers.insert({
    name: 'MattyB',
    teamName: 'Icebirds',
    managerPage: 'http://hockey.fantasysports.yahoo.com/hockey/26488/5',
    wins: '3'
  });
}
