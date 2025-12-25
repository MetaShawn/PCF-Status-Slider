import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { StatusSlider } from "./StatusSlider";

export class StatusSliderControl
  implements ComponentFramework.StandardControl<IInputs, IOutputs> {

  private container: HTMLDivElement;
  private notifyOutputChanged: () => void;
  private value: number = 0;

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    _state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ) {
    this.container = container;
    this.notifyOutputChanged = notifyOutputChanged;
    this.value = context.parameters.status.raw ?? 0;
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    this.value = context.parameters.status.raw ?? 0;

    ReactDOM.render(
  React.createElement(StatusSlider, {
    value: this.value,
    onChange: (val: number) => {
      this.value = val;
      this.notifyOutputChanged();
    }
  }),
  this.container
);


  }

  public getOutputs(): IOutputs {
    return {
      status: this.value
    };
  }

  public destroy(): void {
  // Clean up React when the control is removed
  ReactDOM.unmountComponentAtNode(this.container);
}

}
