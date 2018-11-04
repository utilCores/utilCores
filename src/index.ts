declare var window: Window;

class UtilCores {
  private window: Window;

  constructor(global: Window) {
    this.window = global;
    console.log('hi');
  }
}

export default new UtilCores(window);
