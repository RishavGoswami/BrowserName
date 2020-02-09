module.exports = function browserName() {
  const isBrowser = () =>
    typeof document !== "undefined" &&
    document.body &&
    typeof window !== "undefined";

  if (!isBrowser()) {
    return "";
  }

  const { userAgent, appName, appVersion } = navigator;
  let tem;
  let M =
    userAgent.match(
      /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
    ) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
    return 'Internet Explorer';
  }
  if (M[1] === "Chrome") {
    tem = userAgent.match(/\b(OPR|Edge?)\/(\d+)/);
    if (tem != null)
      return tem
        .slice(1)
        .join(" ")
        .replace("OPR", "Opera")
        .replace("Edg ", "Edge");
  }
  M = M[2] ? [M[1], M[2]] : [appName, appVersion, "-?"];
  if (tem != null && userAgent.match(/version\/(\d+)/i) != null) {
    M.splice(1, 1, tem[1]);
  }
  return M[0];
};
