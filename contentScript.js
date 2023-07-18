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
  if(hostnameStr.endsWith('.cn') == true){
    alert("Caution: Hostname in URL ends with .cn");
  }
  if(hostnameStr.endsWith('.ru') == true){
    alert("Caution: Hostname in URL ends with .ru");
  }
  if(hostnameStr.endsWith('.in') == true){
    alert("Caution: Hostname in URL ends with .in");
  }
  if(hostnameStr.endsWith('.xyz') == true){
    alert("Caution: Hostname in URL ends with .xyz");
  }
  if(hostnameStr.endsWith('.me') == true){
    alert("Caution: Hostname in URL ends with .me");
  }
  if(hostnameStr.endsWith('.br') == true){
    alert("Caution: Hostname in URL ends with .br");
  }
  if(hostnameStr.endsWith('.page') == true){
    alert("Caution: Hostname in URL ends with .page");
  }
  if(hostnameStr.endsWith('.icu') == true){
    alert("Caution: Hostname in URL ends with .icu");
  }
  if(hostnameStr.endsWith('.ke') == true){
    alert("Caution: Hostname in URL ends with .ke");
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
