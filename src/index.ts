declare var window: Window;

class UtilCore {
  private window: Window;

  constructor(global: Window) {
    this.window = global;
    console.log('hi');
  }
}

export default UtilCore;
