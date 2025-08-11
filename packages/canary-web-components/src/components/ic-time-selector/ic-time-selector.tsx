import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from "@stencil/core";
import { TimeReel } from "./ic-time-reel";
import { IcThemeMode, IcTimeFormat } from "../../utils/types";

@Component({
  tag: "ic-time-selector",
  styleUrl: "ic-time-selector.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class TimeSelector {
  private DEFAULT_TIME_FORMAT: IcTimeFormat = "HH:MM:SS";
  private clearInput: boolean = false;
  private selectedTime: Date | null = null;
  private externalSetTime: boolean = false;
  private previousSelectedTime: Date | null = null;
  private isHHMMFormat = () => this.timeFormat === "HH:MM";

  @State() hour: string = "";
  @State() minute: string = "";
  @State() second: string = "";

  @Watch("hour")
  @Watch("minute")
  @Watch("second")
  watchInputHandler(): void {
    if (
      !this.externalSetTime &&
      !this.clearInput &&
      this.selectedTime === null
    ) {
      this.setTime();
      this.emitIcChange(this.selectedTime);
    }
  }

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * The format in which the time will be displayed.
   */
  @Prop() timeFormat: IcTimeFormat = this.DEFAULT_TIME_FORMAT;

  /**
   * The value of the time selector. The value can be in any format supported as `timeFormat`, in ISO 8601 time string format (`HH:MM:SS`) or as a JavaScript `Date` object.
   */
  @Prop({ mutable: true }) value?: string | Date | null | undefined = "";

  /**
   * Emitted when the value has changed.
   */
  @Event() icChange: EventEmitter<{
    value: Date | null;
    timeObject: {
      hour: string | null;
      minute: string | null;
      second: string | null;
    };
  }>;

  /**
   * @internal Used to enable other components to invoke an IcChange event from the input.
   */
  @Method()
  async triggerIcChange(t: Date | null): Promise<void> {
    this.externalSetTime = true;
    this.setTime(t);
    this.emitIcChange(t);
    this.externalSetTime = false;
  }

  private emitIcChange = (t: Date | null) => {
    this.selectedTime = t;
    this.icChange.emit({
      value: t,
      timeObject: {
        hour: this.hour === "" ? null : this.hour,
        minute: this.minute === "" ? null : this.minute,
        second: this.second === "" ? null : this.second,
      },
    });
  };

  // Stole this logic from time-input. Some of it can maybe be moved to utils? 
  private setTime = (time?: string | Date | null) => {
    if (time === null || time === "" || time === undefined) {
      this.handleTimeChange(true);
    } else {
      if (typeof time === "string") {
        const zuluMatch = time.match(
          /^(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))?Z?$/
        );
        if (zuluMatch) {
          this.hour = zuluMatch[1];
          this.minute = zuluMatch[2];
          this.second = zuluMatch[3];
        } else {
          const parts = time.split(":");
          this.hour = parts[0] || "";
          this.minute = parts[1] || "";
          this.second = parts[2] || "";
        }
      } else if (time instanceof Date) {
        this.hour = time.getHours().toString().padStart(2, "0");
        this.minute = time.getMinutes().toString().padStart(2, "0");
        this.second = time.getSeconds().toString().padStart(2, "0");
      }
    }
  };

  private handleTimeChange = (force?: boolean) => {
    if (force || this.selectedTime !== this.previousSelectedTime) {
      if (this.value) {
      }
      if (
        this.hour &&
        this.minute &&
        (this.isHHMMFormat() || this.second)
      ) {
        this.setValueAndEmitChange(this.selectedTime);
      } else if (
        !(this.selectedTime === null && this.previousSelectedTime === null)
      ) {
        this.setValueAndEmitChange(null);
      }
      this.previousSelectedTime = this.selectedTime;
      // if (!this.isTimeSetFromKeyboardEvent) {
      //   this.updateInputValues(this.hour, this.minute, this.second);
      // }
    }
  };

  private setValueAndEmitChange = (value: Date | null) => {
    if (this.value !== value) {
      this.emitIcChange(value);
      this.value = value;
    }
  };

  /**
   * Create an array of time values to pass into a reel
   * @param min
   * @param max
   * @param exclude array of time values to exclude from the options (will probs not use this)
   * @returns
   */
  private createReelArray(
    min: number,
    max: number,
    exclude?: number[]
  ): number[] {
    const resultArray = [];

    for (let index = min; index < max; index++) {
      if (exclude && exclude.includes(index)) {
      } else {
        resultArray.push(index);
      }
    }
    return resultArray;
  }

  render() {
    const { theme } = this;

    return (
      <Host class={{ [`ic-theme-${theme}`]: theme !== "inherit" }}>
        <div class="time-selector-container">
          <TimeReel
            className="hour"
            times={this.createReelArray(0, 12)}
            onSelectTime={(value) => (this.hour = value.toString())}
            onKeyDown={() => console.log("keyDown")}
          />
          <TimeReel
            className="minute"
            times={this.createReelArray(0, 60)}
            onSelectTime={(value) => (this.minute = value.toString())}
            onKeyDown={() => console.log("keyDown")}
          />
          {!this.isHHMMFormat() && (
            <TimeReel
              className="second"
              times={this.createReelArray(0, 60)}
              onSelectTime={(value) => (this.second = value.toString())}
              onKeyDown={() => console.log("keyDown")}
            />
          )}
        </div>
      </Host>
    );
  }
}
