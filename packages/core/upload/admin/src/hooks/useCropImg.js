import Cropper from 'cropperjs';
import { useRef, useEffect, useState } from 'react';

const QUALITY = 1;

export const useCropImg = () => {
  const cropperRef = useRef();
  const [isCropping, setIsCropping] = useState(false);
  const [size, setSize] = useState({ width: undefined, height: undefined });
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    return () => {
      if (cropperRef.current) {
        cropperRef.current.destroy();
      }
    };
  }, []);

  const handleResize = ({ detail: { height, width } }) => {
    const roundedDataWidth = Math.round(width);
    const roundedDataHeight = Math.round(height);

    setSize({ width: roundedDataWidth, height: roundedDataHeight });
  };

  const crop = image => {
    if (!cropperRef.current) {
      cropperRef.current = new Cropper(image, {
        modal: true,
        initialAspectRatio: 16 / 9,
        movable: true,
        zoomable: false,
        cropBoxResizable: true,
        background: false,
        rotatable: true,
        crop: handleResize,
      });

      setIsCropping(true);
    }
  };

  useEffect(() => {
    if (cropperRef.current && cropperRef.current.rotate) {
      cropperRef.current.rotateTo(rotate);
    }
  }, [rotate]);

  const stopCropping = () => {
    if (cropperRef.current) {
      cropperRef.current.destroy();
      cropperRef.current = undefined;
      setIsCropping(false);
    }
  };

  const produceFile = (name, mimeType, lastModifiedDate) =>
    new Promise((resolve, reject) => {
      if (!cropperRef.current) {
        return reject(
          new Error(
            'The cropper has not been instanciated: make sure to call the crop() function before calling produceFile().'
          )
        );
      }

      const canvas = cropperRef.current.getCroppedCanvas();

      return canvas.toBlob(
        blob => {
          resolve(
            new File([blob], name, {
              type: mimeType,
              lastModifiedDate,
            })
          );
        },
        mimeType,
        QUALITY
      );
    });

  return {
    crop,
    produceFile,
    stopCropping,
    isCropping,
    isCropperReady: Boolean(cropperRef.current),
    setRotate,
    ...size,
  };
};
