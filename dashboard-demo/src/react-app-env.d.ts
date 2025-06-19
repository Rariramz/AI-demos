/// <reference types="react-scripts" />

declare module "*.worker" {
  class WebpackWorker extends Worker {
    constructor();
  }
  export default WebpackWorker;
}
