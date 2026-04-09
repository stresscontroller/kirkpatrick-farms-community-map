"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface PrintButtonProps {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  pdfPath?: string;
  downloadFileName?: string;
}

export function PrintButton({
  variant = "outline",
  size = "default",
  className,
  pdfPath = "/map.pdf",
  downloadFileName = "kirkpatrick-farms-map.pdf",
}: PrintButtonProps) {
  const handlePrint = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = downloadFileName;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handlePrint}
      className={className}
    >
      <Download className="mr-2 h-4 w-4" />
      Download Map
    </Button>
  );
}
