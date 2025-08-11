import { FunctionalComponent, h } from "@stencil/core";
import { IcSizes } from "../../utils/types";

export type TimeReelProps = {
  className?: string;
  onSelectTime: (time: number) => void;
  onKeyDown: (ev: KeyboardEvent) => void;
  //   focussedTimeRef: (element: HTMLIcButtonElement) => void;
  times: number[];
  size?: IcSizes;
};

export const TimeReel: FunctionalComponent<TimeReelProps> = ({
  className,
  onSelectTime,
  onKeyDown,
  times,
  size = "medium",
}) => {
  const handleTimeClick = (ev: MouseEvent): void => {
    const button = ev.target as HTMLElement;
    onSelectTime(Number(button.innerHTML));
  };

  return (
    <div
      class={`
    ${className}
    time-reel-container
    `}
    >
      <ul class="hour-list" role="listbox">
        {times.map((time, index) => (
          <li>
            <ic-button
              key={index}
              size={size}
              onClick={handleTimeClick}
              onKeyDown={onKeyDown}
            >
              {time}
            </ic-button>
          </li>
        ))}
      </ul>
    </div>
  );
};
