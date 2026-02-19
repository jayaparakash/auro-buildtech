import "./VideoModal.css"

export default function VideoModal({ open, onClose, videoUrl }) {
  if (!open) return null;

  return (
    <div className="tsModalBackdrop" onClick={onClose}>
      <div className="tsModal" onClick={(e) => e.stopPropagation()}>
        <button className="tsClose" onClick={onClose} aria-label="Close video">
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="tsIframeWrap">
          <iframe
            src={videoUrl}
            title="Client story video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
