let DEFAULT_UA = navigator.userAgent;
let CUSTOM_UA = DEFAULT_UA.replace(/X11; Linux x86_64/, "Windows NT 10.0; Win64; x64");

function rewriteHeaders(details) {
  for (let i = 0; i < details.requestHeaders.length; i++) {
    const headerName = details.requestHeaders[i].name.toLowerCase();
    if (headerName === 'user-agent') {
      details.requestHeaders[i].value = CUSTOM_UA;
    } else if (headerName === 'sec-ch-ua-platform') {
      details.requestHeaders[i].value = "Windows";
    }
  }

  return {requestHeaders: details.requestHeaders};
}

chrome.webRequest.onBeforeSendHeaders.addListener(
  rewriteHeaders,
  {urls: ["<all_urls>"]},
  ["blocking", "requestHeaders"]
);
