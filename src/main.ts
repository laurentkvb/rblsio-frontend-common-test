import ms from 'ms';
import lunchtime from './lunchtime.js';
import millisecondsUntil from './millisecondsUntil.js';
import ColumnsWrapper from "./ColumnsWrapper";

const howLongUntilLunch = (hours: number = 12, minutes: number = 30): string => {
	const millisecondsUntilLunchTime = millisecondsUntil(lunchtime(hours, minutes));
	return ms(millisecondsUntilLunchTime, { long: true });
}
export { ColumnsWrapper, howLongUntilLunch };
