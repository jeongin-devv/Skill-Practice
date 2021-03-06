import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { canvasStore } from '../../Store/CanvasStore';

const ButtonComponent = observer(() => {
  const [modeText, setModeText] = useState('Fill');
  const modeButtonHandler = () => {
    canvasStore.setFillMode();
    if (canvasStore.canvasProps.fillMode) {
      setModeText('Painting');
    } else {
      setModeText('Fill');
    }
  };

  const clearButtonHandler = () => {
    const context = canvasStore.canvasRef?.current?.getContext('2d');
    context!.fillStyle = 'white';
    context!.fillRect(0, 0, canvasStore.canvasProps.width, canvasStore.canvasProps.height);
  };

  const saveButtonHandler = () => {
    const canvas = canvasStore.canvasRef?.current;
    const image = canvas!.toDataURL();
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = image;
    link.download = 'PaintJS[download]';
    link.click();
  };

  return (
    <div className="controls__btns">
      <button type="button" id="tsMode" onClick={modeButtonHandler}>{modeText}</button>
      <button type="button" id="tsClear" onClick={clearButtonHandler}>Clear</button>
      <button type="button" id="tsSave" onClick={saveButtonHandler}>Save</button>
    </div>
  );
});

export default ButtonComponent;
