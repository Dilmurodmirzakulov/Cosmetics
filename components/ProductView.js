import BreadcrumbExample from "./Breadcrumbs";
import ProductImages from "./ProductImages";
import ProductTitleInfo from "./ProductTitleInfo";

export default function ProductView() {
  return (
    <div className="d-flex justify-content-center mt-lg-4">
      <div className="container row">
        <BreadcrumbExample />
        <div className="col-12 col-md-6">
          <ProductImages />
        </div>
        <div className="col-12 col-md-6">
          <ProductTitleInfo />
        </div>
      </div>
    </div>
  );
}
