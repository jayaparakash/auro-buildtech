import { useEffect, useRef } from "react";
import { Modal } from "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function ServiceModal({
  modalId = "serviceModal",
  title = "Please Enter Your Details Below",
}) {
  const lastActiveEl = useRef(null);

  useEffect(() => {
    const el = document.getElementById(modalId);
    if (!el) return;

    const modal = Modal.getOrCreateInstance(el);

    const onShow = () => {
      lastActiveEl.current = document.activeElement;
    };

    // ✅ KEY FIX: blur focused element BEFORE aria-hidden is applied
    const onHide = () => {
      const active = document.activeElement;
      if (active && el.contains(active)) active.blur();
    };

    const onHidden = () => {
      const target = lastActiveEl.current;
      if (target && typeof target.focus === "function") target.focus();
    };

    el.addEventListener("show.bs.modal", onShow);
    el.addEventListener("hide.bs.modal", onHide);
    el.addEventListener("hidden.bs.modal", onHidden);

    return () => {
      el.removeEventListener("show.bs.modal", onShow);
      el.removeEventListener("hide.bs.modal", onHide);
      el.removeEventListener("hidden.bs.modal", onHidden);
      modal.dispose();
    };
  }, [modalId]);

  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex="-1"
      aria-labelledby={`${modalId}Label`}
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4 rounded-4 shadow-lg">
          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold" id={`${modalId}Label`}>
              {title}
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" />
              </div>

              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email ID" />
              </div>

              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="Contact Number" />
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="termsCheck" />
                <label className="form-check-label" htmlFor="termsCheck">
                  By signing up, you agree to receive service updates
                </label>
              </div>

              <button
                type="button"
                className="btn btn-warning w-100 fw-bold"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}