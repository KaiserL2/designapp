import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import cerchioCursor from '../../public/cicle.png'

export default function Canva({widthPennello, colorPennello}:{widthPennello:number, colorPennello: string}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasInstance = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (!canvasInstance.current && canvasRef.current) {
      canvasInstance.current = new fabric.Canvas(canvasRef.current, {
        height: 600,
        width: 800,
        isDrawingMode: true
      });
    }

  }, []);

  useEffect(()=>{

    if (canvasInstance.current){
      canvasInstance.current.freeDrawingBrush.width = widthPennello

    }

  },[widthPennello])

  useEffect(()=>{
    if(canvasInstance.current){

      if (colorPennello=="white"){
        canvasInstance.current.freeDrawingCursor = `col-resize`
      }else{
        canvasInstance.current.freeDrawingCursor = "crosshair"
      }

      canvasInstance.current.freeDrawingBrush.color = colorPennello
    }

  },[colorPennello])

  return <canvas ref={canvasRef} className="border border-black" />;
}
