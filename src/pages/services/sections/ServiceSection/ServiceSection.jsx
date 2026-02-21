import "./serviceSections.css";
import { Modal } from "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default function ServiceSection({
  id,
  title,
  eyebrow,
  desc1,
  desc2,
  desc3,
  img,
}) {
 



  function openServiceModal() {
    const el = document.getElementById("serviceModal");
    if (!el) return;
    Modal.getOrCreateInstance(el).show();
  }
  return (
    <section id={id} className="ssWrap" style={{ scrollMarginTop: "95px" }}>
      <div className="ssGrid">

        {/* LEFT */}
        <div className="ssLeftCard">

          {eyebrow && (
            <div className="ssEyebrow">
              <span className="ssDot" />
              {eyebrow}
            </div>
          )}

          <h2 className="ssTitle">{title}</h2>

          <div className="ssTextWrap">
            {desc1 && <p className="ssText">{desc1}</p>}
            {desc2 && <p className="ssText">{desc2}</p>}
            {desc3 && <p className="ssText">{desc3}</p>}
          </div>

        </div>

        {/* RIGHT */}
        <div className="ssRight">

          <div
            className="ssImgCard"
            role="button"
            tabIndex={0}
            
          >
            <img src={img} alt={title} />
          </div>

          <button className="ssBtn" onClick={openServiceModal}>View Details</button>

        </div>

      </div>

      <hr className="ssDivider" />
    </section>
  );
}