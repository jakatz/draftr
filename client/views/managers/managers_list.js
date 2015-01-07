var managersData = [
  {
    name: 'Jonathan',
    teamName: 'FlyerMaker',
    wins: '10'
  },
  {
    name: 'Ben',
    teamName: 'FreshPrinceOfBriere',
    wins: '9'
  },
  {
    name: 'MattyB',
    teamName: 'Icebirds',
    wins: '3'
  }
];

Template.managersList.helpers({
  managers: managersData
});
