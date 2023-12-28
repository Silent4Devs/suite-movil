//saber las fuentes que tenemos en el sistema
import EStyleSheet from "react-native-extended-stylesheet";
import metrics from "./metrics";

EStyleSheet.build(
  (rawGlobalVars = {
    $primary: "#2570e3",
    $appBg: "#dbdcdc",
    $authBg: "#eaf1f1",
    $accent: "#cc00cc",
    $orange: "#ff6600",
    $red: "#ff0000",
    $gray: "#cccccc",
    $darkGray: "#999999",
    $black: "#000000",
    $white: "#ffffff",
    $fontWeight400: "400",
    $fontWeight700: "600",
    $fontWeight900: "900",
    $100Thin: "Lato_100Thin",
    $300Light: "Lato_300Light",
    $400Regular: "Lato_400Regular",
    $700Bold: "Lato_700Bold",
    $font6: metrics.calc(6),
    $font8: metrics.calc(8),
    $font10: metrics.calc(10),
    $font12: metrics.calc(12),
    $font14: metrics.calc(14),
    $font16: metrics.calc(16),
    $font18: metrics.calc(18),
    $font20: metrics.calc(20),
    $font22: metrics.calc(22),
    $font24: metrics.calc(24),
    $font26: metrics.calc(26),
    $font28: metrics.calc(28),
    $font30: metrics.calc(30),
    $font32: metrics.calc(32)
  })
);
