export default function Breadcumb3({ path, link }) {
  return (
    <>
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <div className="breadcumb-list">
                  <a href={`/${path[0]}`}>{path[0]}</a>
                  <a href={link ?? "/products"}>{path[1]}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
