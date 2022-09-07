import { FC, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import GenUtils from "../utils/gen.utils";

interface IProps {
  duration: number;
}
const Div = styled.div`
  padding: 10px;
  border-radius: 5px;
  background: purple;
  color: pink;
  margin: 10px;
  cursor: pointer;
`;
const Span = styled.span`
  padding: 2px;
`;
const Timer: FC<IProps> = ({ duration }) => {
  const timerRef = useRef<any>();
  const [durationLeft, setDurationLeft] = useState<number>(0);
  const { hours, mins, secs } = GenUtils.estimateTimeFromSeconds(durationLeft);

  const handleClearInterval = (val: any) => {
    if (val) {
      clearInterval(val);
    }
  };

  const handleSetInterval = (val: number) => {
    if (val > 0) {
      setDurationLeft(val);
      timerRef.current = setInterval(() => {
        setDurationLeft((prev) => prev - 1);
      }, 1000);
    }
  };

  const handleStopResetInterval = () => {
    if (timerRef.current) {
      handleClearInterval(timerRef.current);
      timerRef.current = undefined;
    } else {
      handleSetInterval(durationLeft > 0 ? durationLeft : duration);
    }
  };

  useEffect(() => {
    handleSetInterval(duration);
    return () => {
      handleClearInterval(timerRef.current);
    };
  }, [duration]);

  if (durationLeft === 0) {
    handleClearInterval(timerRef.current);
    timerRef.current = undefined;
  }

  return (
    <Div onClick={handleStopResetInterval}>
      {hours > 0 && <Span>{`${GenUtils.padTo2Digits(hours)}h : `}</Span>}
      {(hours > 0 || mins > 0) && (
        <Span>{`${GenUtils.padTo2Digits(mins)}m : `}</Span>
      )}
      {hours > 0 || mins > 0 || secs > 0 ? (
        <Span>{`${GenUtils.padTo2Digits(secs)}s`}</Span>
      ) : (
        <Span>Click To Restart.</Span>
      )}
    </Div>
  );
};

export default Timer;
