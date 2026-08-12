"use client"

import { useState, useRef } from "react";
import Cropper from "react-easy-crop";
import createCroppedImage from "./CropImage";

type AddPhotoInputProps = {
  inputValue: string,
  inputId: string,
  onChange: (id: string, value: any) => void
};

export default function AddPhotoInput({onChange, inputValue, inputId}: AddPhotoInputProps){
    const fileInputRef = useRef<HTMLInputElement>(null);

  const [imageSrc, setImageSrc] = useState<string | null>(inputValue);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const [showCropper, setShowCropper] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    setImageSrc(url);
    setShowCropper(true);

    // Reset cropper whenever a new image is selected
    setCrop({ x: 0, y: 0 });
    setZoom(1);
  };

  const handleCropComplete = (_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleComplete = async () => {
    if (!imageSrc || !croppedAreaPixels) return;

    const croppedBlob = await createCroppedImage(imageSrc, croppedAreaPixels);

    const croppedFile = new File(
      [croppedBlob],
      "profile-picture.jpg",
      {
        type: "image/jpeg",
      }
    );

    // Update parent formData
    onChange(inputId, croppedFile);

    // Update the preview
    const previewUrl = URL.createObjectURL(croppedFile);
    setImageSrc(previewUrl);

    // Close cropper
    setShowCropper(false);
  };

  return (
    <>
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Profile picture button */}
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="h-32 w-32 overflow-hidden rounded-full border-2 border-gray-300 mt-5 mb-5 cursor-pointer"
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-4xl">+</span>
        )}
      </button>

      {/* Cropper modal */}
      {showCropper && imageSrc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative h-full w-full max-w-2xl">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropShape="round"
              showGrid={false}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={handleCropComplete}
            />
            <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-5">
              <input type="range" min={1} max={3} step={0.1} value={zoom} onChange={(e) => setZoom(Number(e.target.value))} className="w-64" />
              <button type="button" onClick={handleComplete} className="rounded-lg bg-white px-6 py-3 font-medium">
                Complete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}