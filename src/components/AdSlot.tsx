interface AdSlotProps {
  position: "top" | "bottom" | "sidebar" | "in-article";
  className?: string;
}

const adStyles: Record<string, string> = {
  top: "w-full h-[90px] max-w-[728px] mx-auto",
  bottom: "w-full h-[90px] max-w-[728px] mx-auto",
  sidebar: "w-full h-[250px] max-w-[300px]",
  "in-article": "w-full h-[250px] max-w-[300px] mx-auto",
};

export default function AdSlot({ position, className = "" }: AdSlotProps) {
  return (
    <div
      className={`bg-gray-50 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-xs ${adStyles[position]} ${className}`}
      data-ad-position={position}
    >
      {/* Google AdSense 广告位 - 接入时替换 */}
      <span>广告位</span>
    </div>
  );
}
