import { useState, useRef } from 'react';
import { Upload, Camera, X, ZoomIn } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PlantUploadCardProps {
  onImageSelect: (image: string | null) => void;
}

const mockImages = [
  'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400',
  'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400',
  'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400',
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400',
];

export function PlantUploadCard({ onImageSelect }: PlantUploadCardProps) {
  const [uploadedImages, setUploadedImages] = useState<string[]>(mockImages);
  const [isDragging, setIsDragging] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  };

  const handleFiles = (files: File[]) => {
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setUploadedImages(prev => [result, ...prev]);
          onImageSelect(result);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <Card className="bg-[#1a1a2e]/50 backdrop-blur-xl border-purple-500/20 hover:border-purple-500/40 transition-all shadow-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <div className="p-2 bg-purple-500/10 rounded-xl">
              <Camera className="w-5 h-5 text-purple-400" />
            </div>
            Upload Plant Image
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Upload Area */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`
              border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer
              transition-all duration-300 relative overflow-hidden group
              ${isDragging 
                ? 'border-purple-500 bg-purple-500/10' 
                : 'border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/5'
              }
            `}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform">
                <Upload className="w-10 h-10 text-purple-400" />
              </div>
              <div>
                <p className="text-white mb-1">Drop your image here</p>
                <p className="text-sm text-gray-400">or click to browse files</p>
              </div>
              <button 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 rounded-xl transition-all shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                Select Image
              </button>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFileInput}
          />

          {/* Recent Images */}
          {uploadedImages.length > 0 && (
            <div>
              <h4 className="text-sm text-gray-300 mb-3">Recent Uploads</h4>
              <div className="grid grid-cols-2 gap-3">
                {uploadedImages.slice(0, 4).map((img, index) => (
                  <div key={index} className="relative group">
                    <ImageWithFallback
                      src={img}
                      alt={`Plant ${index + 1}`}
                      className="w-full h-28 object-cover rounded-xl border border-purple-500/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all rounded-xl flex items-end justify-center gap-2 pb-3">
                      <button
                        onClick={() => setPreviewImage(img)}
                        className="bg-purple-500/90 p-2 rounded-lg hover:bg-purple-600 transition-all"
                      >
                        <ZoomIn className="w-4 h-4 text-white" />
                      </button>
                      <button
                        onClick={() => removeImage(index)}
                        className="bg-red-500/90 p-2 rounded-lg hover:bg-red-600 transition-all"
                      >
                        <X className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Preview Modal */}
      <Dialog open={!!previewImage} onOpenChange={() => setPreviewImage(null)}>
        <DialogContent className="max-w-3xl bg-[#1a1a2e] border-purple-500/20">
          <DialogHeader>
            <DialogTitle className="text-white">Plant Image Preview</DialogTitle>
          </DialogHeader>
          {previewImage && (
            <ImageWithFallback
              src={previewImage}
              alt="Plant preview"
              className="w-full h-auto rounded-xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}