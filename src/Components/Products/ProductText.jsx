import { Col, Row } from "react-bootstrap";

// import images
// import rateStar from "../../assets/images/rate.png";

const ProductText = () => {
  return (
    <section>
      <Row className="mt-2">
        <header className="cat-text">الالكترونيات :</header>
      </Row>
      <Row>
        <Col md="8">
          <article className="cat-title d-inline">
            آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
            تايم (برودكت) أحمر{" "}
            <span
              className="cat-rate  mt-3 d-flex align-items-center gap-2"
              aria-label="Rating 4.5"
              style={{ fontSize: "1.2rem" }}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                width={20}
                height={20}
                fill="#ffc107"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>{" "}
              <div
                className="d-flex align-items-center"
                style={{ height: "fit-content", marginTop: "3px" }}
              >
                4.5
              </div>
            </span>
          </article>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <span className="cat-text d-inline">الماركة :</span>
          <span className="barnd-text d-inline mx-1">سامسنوج </span>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "#E52C2C" }}
            aria-label="Color red"
          ></div>
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "white" }}
            aria-label="Color white"
          ></div>
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "black" }}
            aria-label="Color black"
          ></div>
        </Col>
      </Row>

      <Row className="mt-4">
        <header className="cat-text">المواصفات :</header>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <article className="product-description d-inline">
            يتميز بوجود بطاقة SIM مزدوجة بطاقة فعلية وبطاقة e-SIM يمكنك فتح قفل
            هاتفك الآيفون وتسجيل الدخول إلى التطبيقات والحسابات وغيرها بسهولة،
            وتعدّ خاصية معرَف الوجه الأسرع والأكثر أماناً للمصادقة عن طريق بصمة
            الوجه يتميز بشريحة A12 بايونيك والتي تعد أذكى وأقوى شريحة في الهواتف
            الذكية شكلت أكثر كاميرات العالم شهرة عصراً جديداً من التصوير
            الفوتوغرافي حيث يعمل جهاز الاستشعار الابتكاري بخاصية ISP والمحرك
            العصبي، ما يمكّنك من التقاط صور لم يسبق لها مثيل كاميرا بعدسة واحدة
            تجعل الأشخاص الموجودين في الأمام في نطاق تركيز دقيق على عكس نطاق
            الخلفية غير الواضح نظرة عامة
          </article>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <p
            className="product-price d-inline px-3 py-3 border"
            aria-label="Price"
          >
            34000 جنيه
          </p>
          <button
            className="product-cart-add px-3 py-3 d-inline mx-3"
            aria-label="Add to cart"
          >
            اضف للعربة
          </button>
        </Col>
      </Row>
    </section>
  );
};

export default ProductText;
