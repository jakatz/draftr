var managersData = [
  {
    name: 'Jonathan',
    teamName: 'FlyerMaker',
    managerPage: 'http://hockey.fantasysports.yahoo.com/hockey/26488/3',
    wins: '10'
  },
  {
    name: 'Ben',
    teamName: 'FreshPrinceOfBriere',
    managerPage: 'http://hockey.fantasysports.yahoo.com/hockey/26488/1',
    wins: '9'
  },
  {
    name: 'MattyB',
    teamName: 'Icebirds',
    managerPage: 'http://hockey.fantasysports.yahoo.com/hockey/26488/5',
    wins: '3'
  }
];

Template.managersList.helpers({
  managers: managersData
});
