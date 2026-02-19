import { useEffect, useState } from "react";
import { Modal } from "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";

function AutoPopupModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (show) {
      const modalElement = document.getElementById("autoPopupModal");
      const modal = new Modal(modalElement);
      modal.show();
    }
  }, [show]);

  return (
    <div
      className="modal fade"
      id="autoPopupModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4 rounded-4 shadow-lg">

          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold">
              Please Enter Your Details Below
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email ID"
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Contact Number"
                />
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="termsCheck"
                />
                <label className="form-check-label" htmlFor="termsCheck">
                  By signing up, you agree to receive service updates
                </label>
              </div>

              <button className="btn btn-warning w-100 fw-bold">
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
export default AutoPopupModal