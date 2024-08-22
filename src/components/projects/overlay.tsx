type OverlayProps = {
  overlayRef: React.RefObject<HTMLDivElement>;
};

export default function Overlay({ overlayRef }: OverlayProps) {
  return (
    <div
      ref={overlayRef}
      className="absolute inset-0 bg-black opacity-0 pointer-events-none"
    />
  );
}
