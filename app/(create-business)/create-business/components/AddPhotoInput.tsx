"use client"

import { useState } from "react";
import Cropper from "react-easy-crop";

type AddPhotoInputProps = {
  inputValue: string,
  inputId: string,
  onChange: (id: string, value: string) => void
};

export default function AddPhotoInput({onChange, inputValue, inputId}: AddPhotoInputProps){
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [croppedImage, setCroppedImage] = useState<Blob | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState<number>(1);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const file = e.target.files?.[0];

        if(!file) return;

        const url = URL.createObjectURL(file);

        setImageSrc(url);
    }

    return(
        <>
    <div className="flex flex-col justify-center items-center m-10">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="
            cursor-pointer
            rounded-lg
            border
            border-gray-300
            bg-white
            px-4
            py-2
            text-center
            shadow-sm
            transition
            hover:bg-gray-50

            file:mr-4
            file:rounded-md
            file:border-0
            file:bg-orange-500
            file:px-4
            file:py-2
            file:text-white
            file:cursor-pointer
            hover:file:bg-gradient-to-b from-orange-600 to-orange-400
        "
      />

      {imageSrc && (
        <div className="relative h-80 w-80">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape="round"
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={(e) => onChange(inputId, imageSrc)}
          />
        </div>
      )}
      
      {imageSrc && (
        <input
          type="range"
          min={1}
          max={3}
          step={0.1}
          value={zoom}
          onChange={(e) => setZoom(Number(e.target.value))}
        />
      )}
    </div>
        </>
    )
}