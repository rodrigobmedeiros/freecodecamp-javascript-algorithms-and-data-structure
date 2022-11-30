// Setup
function phoneticLookup(val) {
  let result = "";

  const lookup = {
    'alpha': "Adams",
    'bravo': "Boston",
    'charlie': "Chicago",
    'delta': 'Denver',
    'echo': 'Easy',
    'foxtrot': 'Frank'
  };

  result = lookup[val];
  return result;
  // Only change code below this line

}

phoneticLookup("charlie");