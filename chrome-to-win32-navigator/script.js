(() => {
  const prevUserAgent = navigator.userAgent;
  const newUserAgent = prevUserAgent.replace(/X11; Linux x86_64/, "Windows NT 10.0; Win64; x64");

  Object.defineProperty(navigator, "platform", {
    get: () => "Win32",
    set: () => undefined,
  });

  Object.defineProperty(navigator, "userAgent", {
    get: () => newUserAgent,
    set: () => undefined,
  });
})();

