/* Created by Lars Inge on */

/* External resources */
import { useEffect, useState } from "react";
import { format, formatInTimeZone } from "date-fns-tz";

const CurrentDate = () => {
  const [timeZone, setTimeZone] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [utcDate, setUtcDate] = useState("");
  const [localDate, setLocalDate] = useState("");

  useEffect(() => {
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setUtcDate(formatInTimeZone(currentDate, "UTC", "EEE. dd MMM. - HH:mm:ss"));
    setLocalDate(format(currentDate, "EEE. dd MMM. - HH:mm:ss"));
  }, [currentDate]);

  return (
    <>
      <div>Timezone: {timeZone}</div>
      <div>UTC: {utcDate}</div>
      <div>LOC: {localDate}</div>
    </>
  );
};
export default CurrentDate;
