import Image from "next/image";

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero__badge">عرض محدود</div>
        <h1 className="hero__title">المنتج الذكي لحياتك اليومية في الجزائر</h1>
        <p className="hero__subtitle">
          احصل على المنتج بنسخته المطوّرة بسعر لا يصدق قدره{" "}
          <strong>3500 دج</strong> فقط، مع توصيل مجاني إلى باب منزلك في أي
          ولاية.
        </p>
        <div className="hero__ctas">
          <a className="btn btn--primary" href="#order">
            اطلبه الآن
          </a>
          <a className="btn btn--ghost" href="#details">
            اكتشف المزيد
          </a>
        </div>
        <div className="hero__price-card">
          <span className="price-card__label">السعر الكلي</span>
          <span className="price-card__price">3500 دج</span>
          <span className="price-card__shipping">التوصيل مجاني 100%</span>
        </div>
        <div className="hero__image">
          <Image
            src="/product-hero.svg"
            alt="صورة المنتج"
            width={480}
            height={320}
            priority
          />
        </div>
      </header>

      <section id="details" className="section features">
        <h2>لماذا يثق الجزائريون بهذا المنتج؟</h2>
        <div className="grid three">
          <article className="card">
            <h3>جودة أوروبية</h3>
            <p>
              مصنوع من مواد مقاومة تدوم طويلاً، تم اختباره في ظروف استعمال
              مختلفة ليتماشى مع أسلوب الحياة في الجزائر.
            </p>
          </article>
          <article className="card">
            <h3>سهولة الاستعمال</h3>
            <p>
              تصميم عملي مع دليل استخدام باللغة العربية، يناسب جميع الأعمار
              ويبدأ العمل فوراً دون أي إعدادات معقدة.
            </p>
          </article>
          <article className="card">
            <h3>ضمان الاسترجاع</h3>
            <p>
              إن لم تكن راضياً عن المنتج، يمكنك استرجاع أموالك بالكامل خلال 7
              أيام من الاستلام دون طرح أي أسئلة.
            </p>
          </article>
        </div>
      </section>

      <section className="section stats">
        <div className="stats__item">
          <strong>+10,000</strong>
          <span>عميل راضٍ في كل الولايات</span>
        </div>
        <div className="stats__item">
          <strong>48 ساعة</strong>
          <span>كحد أقصى لوصول الطلب إلى باب منزلك</span>
        </div>
        <div className="stats__item">
          <strong>0 دج</strong>
          <span>تكاليف إضافية أو مفاجآت عند التسليم</span>
        </div>
      </section>

      <section className="section how-to">
        <h2>طريقة الطلب في ثلاث خطوات بسيطة</h2>
        <div className="grid three">
          <article className="step">
            <span className="step__number">1</span>
            <h3>املأ نموذج الطلب</h3>
            <p>
              أدخل اسمك، رقم هاتفك والولاية. فريقنا سيتصل بك لتأكيد التفاصيل
              في أقل من ساعتين.
            </p>
          </article>
          <article className="step">
            <span className="step__number">2</span>
            <h3>استلم مكالمة التأكيد</h3>
            <p>
              نتأكد من العنوان والوقت المناسب للتسليم ونجيب عن كل استفساراتك قبل
              شحن المنتج.
            </p>
          </article>
          <article className="step">
            <span className="step__number">3</span>
            <h3>ادفع عند الاستلام</h3>
            <p>
              تصلك الطردية مغلقة بإحكام مع فاتورة رسمية. يمكنك الدفع نقداً عند
              الباب بكل أريحية.
            </p>
          </article>
        </div>
      </section>

      <section className="section testimonials">
        <h2>آراء حقيقية من زبائن حقيقيين</h2>
        <div className="grid three">
          <figure className="testimonial">
            <blockquote>
              &quot;خدمة زبائن مميزة والمنتج أفضل من المتوقع. وصلني إلى وهران في أقل
              من يومين والتوصيل مجاني.&quot;
            </blockquote>
            <figcaption>سميرة ب. - وهران</figcaption>
          </figure>
          <figure className="testimonial">
            <blockquote>
              &quot;استعملته يومياً وأداءه مستقر. الثمن مناسب جداً مقارنة بالجودة،
              شكراً على الاحترافية.&quot;
            </blockquote>
            <figcaption>يوسف ك. - الجزائر العاصمة</figcaption>
          </figure>
          <figure className="testimonial">
            <blockquote>
              &quot;اتصلوا بي بعد عشر دقائق من الطلب ووصل المنتج في الوقت المتفق
              عليه. تجربة ممتازة.&quot;
            </blockquote>
            <figcaption>ليليا م. - قسنطينة</figcaption>
          </figure>
        </div>
      </section>

      <section className="section faq">
        <h2>الأسئلة المتكررة</h2>
        <div className="faq__list">
          <details>
            <summary>هل التوصيل مجاني فعلاً؟</summary>
            <p>
              نعم، التوصيل مجاني تماماً في كامل الولايات الجزائرية بدون أي رسوم
              إضافية عند الاستلام.
            </p>
          </details>
          <details>
            <summary>كيف أضمن أن المنتج أصلي؟</summary>
            <p>
              كل الطلبات تأتي مختومة مع ملصق تحقق ورقم تسلسلي يمكنك التأكد منه
              عبر خدمة الزبائن لدينا.
            </p>
          </details>
          <details>
            <summary>ما هي وسائل الدفع المتاحة؟</summary>
            <p>
              نوفر الدفع نقداً عند التسليم فقط لضمان راحتك وأمان المعاملة بدون
              تحويلات مسبقة.
            </p>
          </details>
        </div>
      </section>

      <section id="order" className="section order">
        <div className="order__content">
          <h2>أكمل طلبك الآن</h2>
          <p>
            املأ البيانات التالية وسيتصل بك فريق خدمة الزبائن للتأكيد خلال
            دقائق. لا توجد أي دفعات مسبقة، الدفع عند الاستلام فقط.
          </p>
          <form className="order__form">
            <div className="form__field">
              <label htmlFor="name">الاسم الكامل</label>
              <input id="name" type="text" placeholder="أدخل اسمك الكامل" />
            </div>
            <div className="form__field">
              <label htmlFor="phone">رقم الهاتف</label>
              <input id="phone" type="tel" placeholder="06 12 34 56 78" />
            </div>
            <div className="form__field">
              <label htmlFor="wilaya">الولاية</label>
              <input id="wilaya" type="text" placeholder="مثال: الجزائر العاصمة" />
            </div>
            <button type="submit" className="btn btn--primary btn--full">
              أرسل طلبي الآن
            </button>
            <p className="order__note">
              السعر النهائي: <strong>3500 دج</strong> | التوصيل مجاني | الدفع عند
              الاستلام
            </p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} الشركة الموزعة. كل الحقوق محفوظة. خدمة
          الزبائن: 0770 00 00 00
        </p>
      </footer>
    </main>
  );
}
