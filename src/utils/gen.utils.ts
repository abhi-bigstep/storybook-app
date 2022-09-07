export default class GenUtils {
  static estimateTimeFromSeconds = (
    val: number
  ): { hours: number; mins: number; secs: number } => {
    const hours = Math.floor(val / 3600);
    const mins = Math.floor((val % 3600) / 60);
    const secs = (val % 3600) % 60;

    return { hours, mins, secs };
  };

  static padTo2Digits = (val: number): string => {
    return val.toString().padStart(2, "0");
  };
}
