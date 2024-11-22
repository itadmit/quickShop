// App.js
import { Puck, Render } from "@measured/puck";
import "@measured/puck/puck.css";
import { useEffect, useState } from "react";

// Create Puck component config
const config = {
  components: {
    Hero: {
      fields: {
        title: {
          type: "text",
          value: "Welcome to our site!",
          label: "Title",
        },
        description: {
          type: "textarea",
          value: "This is a brief description of our hero section.",
          label: "Description",
        },
        button: {
          type: "text",
          value: "Learn More",
          label: "Button Text",
        },
        image: {
          type: "text",
          value: "https://via.placeholder.com/800x400",
          label: "Image URL",
        },
        video: {
          type: "text",
          value: "",
          label: "Video URL",
        },
        link: {
          type: "text",
          value: "https://example.com",
          label: "Link URL",
        },
        class: {
          type: "text",
          value: "",
          label: "Class Name",
        },
        id: {
          type: "text",
          value: "",
          label: "ID",
        },
        topMargin: {
          type: "text",
          value: "0px",
          label: "Top Margin",
        },
        bottomMargin: {
          type: "text",
          value: "0px",
          label: "Bottom Margin",
        },
      },
      render: function Hero({
        title,
        description,
        video,
        link,
        button,
        image,
        class: className,
        id,
        topMargin,
        bottomMargin,
      }) {
        return (
          <section
            className={`hero ${className}`}
            id={id}
            style={{
              marginTop: `${topMargin}px`,
              marginBottom: `${bottomMargin}px`,
            }}
          >
            {video ? (
              <video className="hero__video" autoPlay loop muted playsInline>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div
                className="hero__image"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></div>
            )}
            <div className="hero__content">
              <h1>{title}</h1>
              <h3>{description}</h3>
              <a href={link}>{button}</a>
            </div>
          </section>
        );
      },
    },

    Banner: {
      fields: {
        image: {
          type: "text",
          value: "https://via.placeholder.com/800x400",
          label: "Image URL",
        },
        video: {
          type: "text",
          value: "",
          label: "Video URL",
        },
        alignment: {
          type: "radio",
          options: [
            { label: "Top", value: "top" },
            { label: "Center", value: "center" },
            { label: "Bottom", value: "bottom" },
          ],
          value: "center",
          label: "Image Alignment",
        },
        shadow: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
          value: false,
          label: "Drop Shadow",
        },
        overlay: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
          value: false,
          label: "Add Overlay",
        },
      },
      render: function Banner({ image, video, alignment, shadow, overlay }) {
        const mediaStyle = {
          backgroundImage: video ? null : `url(${image})`,
          backgroundPosition: alignment,
          filter: shadow ? "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4))" : "none",
        };

        return (
          <section className="banner">
            {video ? (
              <video className="banner__video" autoPlay loop muted playsInline>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="banner__image" style={mediaStyle}></div>
            )}
            {overlay && <div className="banner__overlay"></div>}
          </section>
        );
      },
    },

    Boxs: {
      fields: {
        items: {
          type: "array",
          arrayFields: {
            mediaType: { type: "text", value: "image" }, // סוג המדיה: "image" או "video"
            src: { type: "text", value: "" }, // קישור למדיה
            title: { type: "text", value: "Box Title" }, // כותרת של כל בוקס
            description: { type: "textarea", value: "Box description" }, // תיאור של כל בוקס
            class: {
              type: "text",
              value: "",
              label: "Class Name",
            },
            id: {
              type: "text",
              value: "",
              label: "ID",
            },
            topMargin: {
              type: "text",
              value: "0px",
              label: "Top Margin",
            },
            bottomMargin: {
              type: "text",
              value: "0px",
              label: "Bottom Margin",
            },
          },
          defaultItemProps: {
            mediaType: "image",
            src: "https://via.placeholder.com/200",
            title: "Default Title",
            description: "Default description",
            class: "",
            id: "",
            topMargin: "0px",
            bottomMargin: "0px",
          },
          max: 4, // הגבלת מספר הפריטים בארבעה
        },
      },
      render: function Boxs({ items = [] }) {
        return (
          <section className="boxs">
            <div className="boxs__grid">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`boxs__item ${item.class}`}
                  id={item.id}
                  style={{
                    marginTop: item.topMargin,
                    marginBottom: item.bottomMargin,
                  }}
                >
                  {item.mediaType === "video" ? (
                    <video className="boxs__video" autoPlay muted loop playsInline>
                      <source src={item.src} type="video/mp4" />
                      הדפדפן שלך לא תומך בווידאו.
                    </video>
                  ) : (
                    <img className="boxs__image" src={item.src} alt={item.title} />
                  )}
                  <div className="boxs__content">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      },
    },


    TextBlock: {
      fields: {
        title: {
          type: "text",
          value: "כותרת לדוגמה",
          label: "Title",
        },
        content: {
          type: "textarea",
          value: "זהו תוכן הפסקה שמופיע כאן.",
          label: "Content",
        },
        alignment: {
          type: "radio",
          options: [
            { label: "ימין", value: "right" },
            { label: "מרכז", value: "center" },
            { label: "שמאל", value: "left" },
          ],
          value: "left",
          label: "Text Alignment",
        },
        color: {
          type: "text",
          value: "#000000",
          label: "Text Color",
        },
        titleFontSize: {
          type: "text",
          value: "24",
          label: "Title Font Size (px)",
        },
        contentFontSize: {
          type: "number",
          value: 16,
          label: "Content Font Size (px)",
        },
        contentPadding: {
          type: "number",
          value: 20,
          label: "Content Padding (px)",
        },
        linkText: {
          type: "text",
          value: "Learn More",
          label: "Link Text",
        },
        linkUrl: {
          type: "text",
          value: "https://example.com",
          label: "Link URL",
        },
        class: {
          type: "text",
          value: "",
          label: "Class Name",
        },
        id: {
          type: "text",
          value: "",
          label: "ID",
        },
        topMargin: {
          type: "text",
          value: "0px",
          label: "Top Margin",
        },
        bottomMargin: {
          type: "text",
          value: "0px",
          label: "Bottom Margin",
        },
      },
      render: function TextBlock({
        title,
        content,
        alignment,
        color,
        titleFontSize,
        contentFontSize,
        contentPadding,
        linkText,
        linkUrl,
        class: className,
        id,
        topMargin,
        bottomMargin,
      }) {
        return (
          <div
            className={`text-block ${className}`}
            id={id}
            style={{
              textAlign: alignment,
              color: color,
              marginTop: `${topMargin}px`,
              marginBottom: `${bottomMargin}px`,
              paddingLeft: `${contentPadding}px`,
              paddingRight: `${contentPadding}px`,
            }}
          >
            <h2 style={{ fontSize: `${titleFontSize}px` }}>{title}</h2>
            <p style={{ fontSize: `${contentFontSize}px` }}>{content}</p>
            <a href={linkUrl} style={{ textDecoration: "underline", color: color }}>
              {linkText}
            </a>
          </div>
        );
      },
    },

    CustomHtml: {
      fields: {
        Code: {
          type: "textarea",
          value: "יש להזין קוד כולל תגיות <Html></Html>",
          label: "Content",
        },
        class: {
          type: "text",
          value: "",
          label: "Class Name",
        },
        id: {
          type: "text",
          value: "",
          label: "ID",
        },
        topMargin: {
          type: "text",
          value: "0px",
          label: "Top Margin",
        },
        bottomMargin: {
          type: "text",
          value: "0px",
          label: "Bottom Margin",
        },
      },
      render: function CustomHtml({ Code, class: className, id, topMargin, bottomMargin }) {
        return (
          <div
            className={`custom-html ${className}`}
            id={id}
            style={{
              marginTop: topMargin,
              marginBottom: bottomMargin,
            }}
            dangerouslySetInnerHTML={{ __html: Code }}
          ></div>
        );
      },
    },
    
    Product: {
      fields: {
        title: {
          type: "text",
          value: "מוצרים נבחרים",
        },
        numberOfProducts: {
          type: "number",
          value: 5,
        },
        storeId: {
          type: "text",
          value: "1",
        },
        showDescription: {
          type: "radio",
          options: [
            { label: "עם תיאור מוצר", value: true },
            { label: "בלי תיאור מוצר", value: false },
          ],
          value: true,
        },
        showPrice: {
          type: "radio",
          options: [
            { label: "עם מחיר", value: true },
            { label: "בלי מחיר", value: false },
          ],
          value: true,
        },
      },
      render: function Product({
        title = "מוצרים נבחרים",
        numberOfProducts = 5,
        storeId = "1",
        showDescription = true,
        showPrice = true,
      }) {
        const [products, setProducts] = useState([]);

        useEffect(() => {
          fetch(
            `https://quick-shop.co.il/api/get_products_categories.php?type=products&store_id=${storeId}`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.status === "success") {
                setProducts(data.data.slice(0, numberOfProducts));
              } else {
                console.error("Error:", data.message);
              }
            })
            .catch((error) => {
              console.error("Fetch Error:", error);
            });
        }, [storeId, numberOfProducts]);

        return (
          <section className="product-section">
            <h2>{title}</h2>
            <div className="product-list">
              {products.map((product) => {
                // הגדרת כתובת URL לתמונה על פי קיום תמונה וסלאג
                const productImageUrl = product.product_image && product.product_image !== "noimage.svg"
                  ? `https://quick-shop.co.il/uploads/${product.store_slug}/${product.product_image}`
                  : "https://quick-shop.co.il/assets/img/noimage.svg";

                return (
                  <div key={product.id} className="product-item">
                    <img
                      src={productImageUrl}
                      alt={product.name}
                      className="product-image"
                    />
                    <h3>{product.name}</h3>
                    {showDescription && <p>{product.description}</p>}
                    {showPrice && <p>מחיר: ₪{product.regular_price}</p>}
                  </div>
                );
              })}
            </div>
          </section>
        );
      },
    },

    About: {
      fields: {
        title1: {
          type: "text",
          value: "About Us",
          label: "Title",
        },
        description1: {
          type: "textarea",
          value: "This is a brief description of our about section.",
          label: "Description",
        },
        button1: {
          type: "text",
          value: "Learn More",
          label: "Button Text",
        },
        image1: {
          type: "text",
          value: "https://via.placeholder.com/800x400",
          label: "Image URL",
        },
        link: {
          type: "text",
          value: "https://example.com",
          label: "Link URL",
        },
        class: {
          type: "text",
          value: "",
          label: "Class Name",
        },
        id: {
          type: "text",
          value: "",
          label: "ID",
        },
        topMargin: {
          type: "text",
          value: "0px",
          label: "Top Margin",
        },
        bottomMargin: {
          type: "text",
          value: "0px",
          label: "Bottom Margin",
        },
      },
      render: function About({
        title1,
        description1,
        button1,
        image1,
        link,
        class: className,
        id,
        topMargin,
        bottomMargin,
      }) {
        return (
          <section
            className={`about ${className}`}
            id={id}
            style={{
              marginTop: `${topMargin}px`,
              marginBottom: `${bottomMargin}px`,
            }}
          >
            <div className="about__image">
              <img src={image1} alt="about" />
            </div>
            <div className="about__content">
              <h2>{title1}</h2>
              <p>{description1}</p>
              <a href={link}>{button1}</a>
            </div>
          </section>
        );
      },
    },
  },
};

export function App() {
  const [router, setRouter] = useState("home");
  const [data, setData] = useState(undefined);
  const store_id = window.store_id;
  useEffect(() => {
    if (!store_id) {
      console.error("store_id is not defined");
      return;
    }

    fetch(`https://quick-shop.co.il/api/get_page.php?store_id=${store_id}`)
      .then((response) => response.json())
      .then(({ data }) => {
        const d = JSON.parse(data.layout);
        setData({ ...d });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [router, store_id]);

  const save = (data) => {
    if (!store_id) {
      console.error("store_id is not defined");
      return;
    }

    fetch("https://quick-shop.co.il/api/save_page.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        store_id: store_id, // שימוש ב-store_id הדינמי
        layout: JSON.stringify(data), // נתוני המבנה בפורמט JSON
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const renderer = () => {
    if (router === "home" && data)
      return <Puck config={config} data={data} onPublish={save} />;
    if (router === "render") return <Render config={config} data={data} />;
  };

  return (
    <div
      style={{
        justifyContent: "space-between",
      }}
    >
      <div className="nav">
        <button
          onClick={() => {
            setRouter("home");
          }}
        >
          עורך
        </button>
        <button
          onClick={() => {
            setRouter("render");
          }}
        >
          תצוגה
        </button>
      </div>
      {renderer()}
    </div>
  );
}

export default App;
