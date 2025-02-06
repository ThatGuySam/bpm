/// <reference types="p5/global" />

/**
 * @typedef {Object} SketchOptions
 * @property {number} width - Canvas width
 * @property {number} height - Canvas height
 */

/**
 * Fullscreen visual that changes color.
 *
 * This canvas updates its color on each beat,
 * determined by the BPM slider.
 * Uses p5.js with JSDoc types.
 *
 * @param {import('p5')} p - The p5.js instance.
 */
const sketch = (p) => {
  /** BPM value (beats per minute). */
  let bpm = 128;
  /** Beat interval in milliseconds. */
  let beatInterval = 60000 / bpm;
  /** Timestamp for the next beat. */
  let nextBeatTime = 0;
  /** @type {import('p5').Element | null} BPM slider element */
  let bpmSlider = null;
  /** Current background hue value. */
  let hueValue = 0;

  /**
   * p.setup: Initializes canvas and BPM slider.
   */
  p.setup = function () {
    console.log('setup');
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 360, 100, 100);
    p.noStroke();
    bpmSlider = p.createSlider(bpm/2, bpm*8, bpm, 1);
    bpmSlider.position(10, 10);
    bpmSlider.style('width', '200px');
    bpmSlider.value(bpm);
    nextBeatTime = p.millis() + beatInterval;
  };

  /**
   * p.draw: Updates BPM and background color.
   */
  p.draw = function () {
    if (!bpmSlider) {
      throw new Error('BPM slider not found');
    }
    
    const chosenBpm = Number(bpmSlider.value());
    if (chosenBpm !== bpm) {
      bpm = chosenBpm;
      if (bpm <= 0) {
        console.error('BPM must be >0');
        return;
      }
      beatInterval = 60000 / bpm;
      console.log('BPM updated:', bpm);
    }
    if (p.millis() >= nextBeatTime) {
      hueValue = (hueValue + 50) % 360;
      nextBeatTime = p.millis() + beatInterval;
    }
    p.background(hueValue, 80, 80);
  };

  /**
   * p.windowResized: Resizes canvas on window change.
   */
  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  /**
   * p.keyPressed: Prevents default browser behavior for arrow keys
   */
  p.keyPressed = function() {
    if (!bpmSlider) {
      throw new Error('BPM slider not found');
    }
    
    if (p.keyCode === p.LEFT_ARROW) {
      bpmSlider.value(Number(bpmSlider.value()) / 2);
      return false;
    } else if (p.keyCode === p.RIGHT_ARROW) {
      bpmSlider.value(Number(bpmSlider.value()) * 2);
      return false;
    }
  };
};

// @ts-ignore - Seems to work fine for now
new p5(sketch, document.body);

/*
  Explanation:
  This boilerplate creates a fullscreen p5.js sketch that
  changes the background hue on every beat. The beat
  interval is based on BPM, which can be adjusted with a
  slider (range: 30 - 240 BPM). JSDoc comments provide type
  clarity and intent for each function.
*/ 