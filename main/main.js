module.exports = function main(email, suffixes) {
  // Write your code here
  
  var r=email.split("@");
  if(r==suffixes)
    return true;
  else
    return false;
  
  
};
