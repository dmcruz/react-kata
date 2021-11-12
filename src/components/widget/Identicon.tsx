import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Helper } from '../../utils/Helper';

// ported to React
// source: https://gist.github.com/richardkundl/9071847
const Identicon = (props: any) => {
  // Generated content (with default value)
  const [DATA, SET_DATA] = useState('fc5e038d38a57032085441e7fe7010b0');

  // Max value for a color component
  const MAX_COLOR = 200;

  // Min value for a color component
  const MIN_COLOR = 120;

  // Chance of a square being filled [0, 1]
  const FILL_CHANCE = 0.5;

  // Size of a grid square in pixels
  const SQUARE = 16;

  // Number of squares width and height
  const GRID = 5;

  // Padding on the edge of the canvas in px
  const PADDING = SQUARE / 2;

  // Size of the canvas
  const SIZE = SQUARE * GRID + PADDING * 2;

  /*
   * Fill in a square on the canvas.
   */
  const fillBlock = function (x: any, y: any, color: any, ctx: any) {
    ctx.beginPath();
    ctx.rect(PADDING + x * SQUARE, PADDING + y * SQUARE, SQUARE, SQUARE);
    ctx.fillStyle = 'rgb(' + color.join(',') + ')';
    ctx.fill();
  };

  /*
   * Pick random squares to fill in.
   */
  const generateIdenticon = function (ctx: any) {
    // FILL CANVAS BG
    ctx.beginPath();
    ctx.rect(0, 0, SIZE, SIZE);
    ctx.fillStyle = '#F0ECE6';
    ctx.fill();

    // GENERATE COLOR
    const color = genColor();

    // FILL THE SQUARES
    for (let x = 0; x < Math.ceil(GRID / 2); x++) {
      for (let y = 0; y < GRID; y++) {
        // CALCULATE HASH POSITION
        let position = GRID * x + y;

        // IF POSITION OVER INDEXING THE HASH, BEGIN OVER AGAIN
        if (position > DATA.length) {
          position = position - DATA.length;
        }

        const actual = parseInt(DATA[position], 16);
        if (actual < FILL_CHANCE * 16) {
          fillBlock(x, y, color, ctx);

          // FILL RIGHT SIDE SYMMETRICALLY
          if (x < Math.floor(GRID / 2)) {
            fillBlock(GRID - 1 - x, y, color, ctx);
          }
        }
      }
    }
  };

  /*
   * Get a color with low saturation.
   */
  const genColor = function () {
    const rgb = [];
    for (let i = 0; i < 3; i++) {
      const val = Math.floor(parseInt(DATA[i], 16) * 16);
      const minEnforced = Math.max(MIN_COLOR, val);
      const maxEnforced = Math.min(MAX_COLOR, minEnforced);
      rgb.push(maxEnforced);
    }
    return rgb;
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    SET_DATA(Helper.getHash(props.name));
  }, [props.name]);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const context = canvas.getContext('2d');
    context.width = SIZE;
    context.height = SIZE;

    generateIdenticon(context);
    // eslint-disable-next-line
  }, [DATA]);

  return (
    <div style={{ width: '100px', height: '100px' }}>
      <canvas ref={canvasRef} {...props} />
    </div>
  );
};

export default React.memo(Identicon);
