var lines = {
  'green': ["Haymarket", "Government Center", "Park Street", "Boylston", "Arlington", "Copley"],
  'red': ["Alewife", "Davis", "Porter", "Harvard", "Central", "Kendall/MIT", "Park Street", "South Station"],
  'orange': ["North Station", "Haymarket", "Park Street", "State Street", "Downtown Crossing", "Chinatown", "Tufts"]
};

var Trip = function(startLine, startStation, endLine, endStation){
  this.startLine = startLine;
  this.startStation = startStation;
  this.endLine = endLine;
  this.endStation = endStation;
};