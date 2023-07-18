function checkIfHostnameHasNonAsciiChars(hostnameStr){
  if(detectPunycode(hostnameStr) == true){
    alert("Punycode Warning: Hostname contains non-ASCII characters!");
  }
}

function checkIfHostnameHasSuspiciousTlds(hostnameStr){
  if(hostnameStr.endsWith('.zip') == true){
    alert("Caution: Hostname in URL ends with .zip");
  }
  if(hostnameStr.endsWith('.mov') == true){
    alert("Caution: Hostname in URL ends with .mov");
  }
}

function parseHostnameFromUrl(windowLocationHref){
  const url = new URL(windowLocationHref);
  return(url.hostname);
}

function detectPunycode(inputString){
  return inputString.startsWith('xn--');
}

/*
function hasNonASCIICharacters(inputString) {
  const nonASCIIRegex = /[^\x00-\x7F]/;
  return nonASCIIRegex.test(inputString);
}
*/

const hostnameStr = parseHostnameFromUrl(window.location.href);
checkIfHostnameHasNonAsciiChars(hostnameStr);
checkIfHostnameHasSuspiciousTlds(hostnameStr);
