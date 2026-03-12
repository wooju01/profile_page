import Image from "next/image";

type PortfolioImageProps = {
  src?: string;
  alt: string;
  /** 이미지 아래 캡션 (선택) */
  caption?: string;
  /** Next Image 우선 적용. 외부 URL이면 unoptimized 권장 */
  width?: number;
  height?: number;
  /** true면 16:9 등 비율 유지하며 영역 채움 */
  fill?: boolean;
  /** fill 사용 시 부모에 적용할 클래스 (예: aspect-video) */
  className?: string;
  /** true면 이미지 없이 점선 영역만 표시 (나중에 src 넣기) */
  placeholder?: boolean;
};

export function PortfolioImage({
  src,
  alt,
  caption,
  width,
  height,
  fill = false,
  className = "",
  placeholder = false,
}: PortfolioImageProps) {
  if (placeholder || !src) {
    return (
      <figure className="space-y-2">
        <div
          className={`flex aspect-video items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 dark:border-slate-600 dark:bg-slate-800/50 ${className}`}
        >
          <span className="text-sm text-neutral-400 dark:text-neutral-500">
            이미지 영역 (src 추가 시 표시)
          </span>
        </div>
        {caption && (
          <figcaption className="text-center text-xs text-neutral-500 dark:text-neutral-400">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  const isExternal = src.startsWith("http");
  const wrapperClass = `relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800 ${fill ? "aspect-video" : ""} ${className}`;

  return (
    <figure className="space-y-2">
      <div className={wrapperClass}>
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 672px"
            unoptimized={isExternal}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width ?? 672}
            height={height ?? 378}
            className="h-auto w-full object-contain"
            unoptimized={isExternal}
          />
        )}
      </div>
      {caption && (
        <figcaption className="text-center text-xs text-neutral-500 dark:text-neutral-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
