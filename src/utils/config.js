const colors = require("../styles/colors");

module.exports = {
  pathPrefix: "/",
  appName: "TeamQuick",
  siteTitle: "팀퀵 - 팀이 필요할 땐 팀퀵",
  siteUrl: "https://teamquick.app",
  siteImage: "preview.jpg", // 이거바꺼야됨
  siteLanguage: "ko",
  siteDescription: "롤 격전 듀오 팀 파티 찾기 모집 팀퀵",
  contactEmail: "admin@teamquick.app",
  ctaLinkUrl: "https://play.google.com/store?hl=ko",
  ctaLinkLabel: "Google Play",
  // manifest.json
  manifestName: "TeamQuick",
  manifestShortName: "TeamQuick",
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.bg,
  manifestThemeColor: colors.bg,
  manifestDisplay: "standalone",
  // analytics
  analyticsTrackingId: "UA-121914821-1"
};
