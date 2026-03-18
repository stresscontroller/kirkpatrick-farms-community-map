"use client";

import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { dataReadiness } from "@/data/community-map-data";

interface DataReadinessBannerProps {
  className?: string;
}

export function DataReadinessBanner({ className }: DataReadinessBannerProps) {
  const pendingItems: string[] = [];

  if (!dataReadiness.photosProvidedByClient) {
    pendingItems.push("Client photos");
  }
  if (!dataReadiness.descriptionsProvidedByClient) {
    pendingItems.push("Final location descriptions");
  }
  if (!dataReadiness.boundariesConfirmedByClient) {
    pendingItems.push("Confirmed community boundary");
  }

  const allReady = pendingItems.length === 0;

  return (
    <div
      className={`rounded-lg border px-3 py-2 text-sm ${
        allReady
          ? "border-emerald-300 bg-emerald-50 text-emerald-800"
          : "border-amber-300 bg-amber-50 text-amber-900"
      } ${className ?? ""}`}
    >
      <div className="flex items-start gap-2">
        {allReady ? (
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
        ) : (
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
        )}
        <div>
          {allReady ? (
            <p>Client data checklist is complete.</p>
          ) : (
            <p>
              Draft mode: pending {pendingItems.join(", ")}. Current map content
              is placeholder/sample where needed.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
