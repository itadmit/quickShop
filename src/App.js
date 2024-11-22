// App.js
import { Puck, Render } from "@measured/puck";
import "@measured/puck/puck.css";
import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";

function ensurePixelValue(value) {
  return isNaN(value) ? value : `${value}px`;
}

// Create Puck component config
const config = {
  components: {
    Hero: {
      fields: {
        title: {
          type: "text",
          value: "ברוכים הבאים לאתר שלנו!",
          label: "כותרת",
        },
        description: {
          type: "textarea",
          value: "זהו תיאור קצר של חלק הגיבור שלנו.",
          label: "תיאור",
        },
        button: {
          type: "text",
          value: "למידע נוסף",
          label: "טקסט הכפתור",
        },
        buttonBorderColor: {
          type: "text",
          value: "#FF5733",
          label: "צבע מסגרת הכפתור",
        },
        image: {
          type: "text",
          value: "https://via.placeholder.com/800x400",
          label: "כתובת התמונה",
        },
        video: {
          type: "text",
          value: "",
          label: "כתובת הווידאו",
        },
        vimeoUrl: {
          type: "text",
          value: "",
          label: "כתובת Vimeo",
        },
        link: {
          type: "text",
          value: "https://example.com",
          label: "כתובת הקישור",
        },
        opacity: {
          type: "radio",
          options: [
            { label: "עם השחרה 0.8", value: "0.8" },
            { label: "בלי השחרה", value: "1" },
          ],
          value: "1",
          label: "שקיפות",
        },
        textColor: {
          type: "text",
          value: "#000000",
          label: "צבע כתב",
        },
        paddingTop: {
          type: "text",
          value: "0px",
          label: "ריפוד למעלה",
        },
        paddingBottom: {
          type: "text",
          value: "0px",
          label: "ריפוד למטה",
        },
        paddingLeft: {
          type: "text",
          value: "0px",
          label: "ריפוד שמאלה",
        },
        paddingRight: {
          type: "text",
          value: "0px",
          label: "ריפוד ימינה",
        },
        marginTop: {
          type: "text",
          value: "0px",
          label: "שוליים למעלה",
        },
        marginBottom: {
          type: "text",
          value: "0px",
          label: "שוליים למטה",
        },
        marginLeft: {
          type: "text",
          value: "0px",
          label: "שוליים שמאלה",
        },
        marginRight: {
          type: "text",
          value: "0px",
          label: "שוליים ימינה",
        },
        class: {
          type: "text",
          value: "",
          label: "שם מחלקה",
        },
        id: {
          type: "text",
          value: "",
          label: "ID",
        },
      },
      render: function Hero({
        title,
        description,
        video,
        vimeoUrl,
        link,
        button,
        buttonBorderColor,
        image,
        opacity,
        textColor,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        class: className,
        id,
      }) {
        const sectionStyle = {
          marginTop: marginTop,
          marginBottom: marginBottom,
          marginLeft: marginLeft,
          marginRight: marginRight,
          paddingTop: paddingTop,
          paddingBottom: paddingBottom,
          paddingLeft: paddingLeft,
          paddingRight: paddingRight,
          textAlign: "left",
          opacity: opacity,
        };
    
        const contentStyle = {
          color: textColor,
        };
    
        return (
          <section
            className={`hero ${className}`}
            {...(id ? { id } : {})}
            style={sectionStyle}
          >
            {video ? (
              <div>
                <video className="hero__video" autoPlay loop muted playsInline>
                  <source src={video} type="video/mp4" />
                  דפדפן שלך לא תומך בתג הווידאו.
                </video>
                {vimeoUrl && (
                  <a href={vimeoUrl} target="_blank" rel="noopener noreferrer">
                    Vimeo URL
                  </a>
                )}
              </div>
            ) : (
              <div
                className="hero__image"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></div>
            )}
            <div className="hero__content" style={contentStyle}>
              <h1>{title}</h1>
              <h3>{description}</h3>
              {button && (
                <a
                  href={link}
                  style={{
                    border: `2px solid ${buttonBorderColor}`,
                    padding: "10px 20px",
                    color: textColor,
                    textDecoration: "none",
                  }}
                >
                  {button}
                </a>
              )}
            </div>
          </section>
        );
      },
    },
    

    Banner: {
      fields: {
        desktopImage: {
          type: "text",
          value: "https://via.placeholder.com/1200x600",
          label: "תמונת מחשב",
        },
        mobileImage: {
          type: "text",
          value: "https://via.placeholder.com/600x300",
          label: "תמונת מובייל",
        },
        desktopVideo: {
          type: "text",
          value: "",
          label: "סרטון MP4 מחשב",
        },
        mobileVideo: {
          type: "text",
          value: "",
          label: "סרטון MP4 מובייל",
        },
        desktopVimeoUrl: {
          type: "text",
          value: "",
          label: "כתובת Vimeo מחשב",
        },
        mobileVimeoUrl: {
          type: "text",
          value: "",
          label: "כתובת Vimeo מובייל",
        },
        alignment: {
          type: "radio",
          options: [
            { label: "Top", value: "top" },
            { label: "Center", value: "center" },
            { label: "Bottom", value: "bottom" },
          ],
          value: "center",
          label: "יישור התמונה",
        },
        shadow: {
          type: "radio",
          options: [
            { label: "כן", value: true },
            { label: "לא", value: false },
          ],
          value: false,
          label: "צל",
        },
        overlay: {
          type: "radio",
          options: [
            { label: "כן", value: true },
            { label: "לא", value: false },
          ],
          value: false,
          label: "הוספת שכבת הדגשה",
        },
        class: {
          type: "text",
          value: "",
          label: "שם מחלקה",
        },
        id: {
          type: "text",
          value: "",
          label: "ID",
        },
        paddingTop: {
          type: "text",
          value: "20",
          label: "ריפוד למעלה",
        },
        paddingRight: {
          type: "text",
          value: "20",
          label: "ריפוד לימין",
        },
        paddingBottom: {
          type: "text",
          value: "20",
          label: "ריפוד למטה",
        },
        paddingLeft: {
          type: "text",
          value: "20",
          label: "ריפוד לשמאל",
        },
        marginTop: {
          type: "text",
          value: "20",
          label: "שוליים למעלה",
        },
        marginRight: {
          type: "text",
          value: "20",
          label: "שוליים לימין",
        },
        marginBottom: {
          type: "text",
          value: "20",
          label: "שוליים למטה",
        },
        marginLeft: {
          type: "text",
          value: "20",
          label: "שוליים לשמאל",
        },
      },
      render: function Banner({
        desktopImage,
        mobileImage,
        desktopVideo,
        mobileVideo,
        desktopVimeoUrl,
        mobileVimeoUrl,
        alignment,
        shadow,
        overlay,
        class: className,
        id,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
      }) {
        const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
        // עדכון מצב לפי רוחב המסך
        useEffect(() => {
          const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
          };
    
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
    
        // שימוש בערכים עם פיקסלים כברירת מחדל
        const ensurePixelValue = (value) =>
          value && !value.includes("px") ? `${value}px` : value;
    
        const sectionStyle = {
          marginTop: ensurePixelValue(marginTop),
          marginRight: ensurePixelValue(marginRight),
          marginBottom: ensurePixelValue(marginBottom),
          marginLeft: ensurePixelValue(marginLeft),
          paddingTop: ensurePixelValue(paddingTop),
          paddingRight: ensurePixelValue(paddingRight),
          paddingBottom: ensurePixelValue(paddingBottom),
          paddingLeft: ensurePixelValue(paddingLeft),
          position: "relative",
          overflow: "hidden",
        };
    
        const mediaStyle = {
          backgroundPosition: alignment,
          filter: shadow ? "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4))" : "none",
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
        };
    
        const renderMedia = () => {
          if (isMobile) {
            if (mobileVimeoUrl) {
              return (
                <iframe
                  src={mobileVimeoUrl}
                  className="banner__video"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Vimeo Mobile Video"
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
              );
            } else if (mobileVideo) {
              return (
                <video className="banner__video" autoPlay loop muted playsInline>
                  <source src={mobileVideo} type="video/mp4" />
                  הדפדפן שלך לא תומך בתג הווידאו.
                </video>
              );
            } else {
              return (
                <div
                  className="banner__image"
                  style={{
                    ...mediaStyle,
                    backgroundImage: `url(${mobileImage})`,
                  }}
                ></div>
              );
            }
          } else {
            if (desktopVimeoUrl) {
              return (
                <iframe
                  src={desktopVimeoUrl}
                  className="banner__video"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Vimeo Desktop Video"
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
              );
            } else if (desktopVideo) {
              return (
                <video className="banner__video" autoPlay loop muted playsInline>
                  <source src={desktopVideo} type="video/mp4" />
                  הדפדפן שלך לא תומך בתג הווידאו.
                </video>
              );
            } else {
              return (
                <div
                  className="banner__image"
                  style={{
                    ...mediaStyle,
                    backgroundImage: `url(${desktopImage})`,
                  }}
                ></div>
              );
            }
          }
        };
    
        return (
          <section
            className={`banner ${className}`}
            id={id}
            style={sectionStyle}
          >
            {renderMedia()}
            {overlay && <div className="banner__overlay"></div>}
          </section>
        );
      },
    },
    
    
    ButtonList: {
      fields: {
        title: {
          type: "text",
          value: "SHOP EXCLUSIVE",
          label: "כותרת",
        },
        sectionBackgroundColor: {
          type: "text",
          value: "#f5f5f5",
          label: "צבע רקע לסקשן",
        },
        buttonBackgroundColor: {
          type: "text",
          value: "#e0dcd5",
          label: "צבע רקע לכפתורים",
        },
        buttonTextColor: {
          type: "text",
          value: "#000000",
          label: "צבע טקסט לכפתורים",
        },
        fontFamily: {
          type: "radio",
          options: [
            { label: "Assistant", value: "Assistant, sans-serif" },
            { label: "Open Sans Hebrew", value: "'Open Sans Hebrew', sans-serif" },
            { label: "IBM Plex", value: "'IBM Plex Sans', sans-serif" },
            { label: "Rubik", value: "Rubik, sans-serif" },
            { label: "Heebo", value: "Heebo, sans-serif" },
          ],
          value: "Assistant, sans-serif",
          label: "בחר פונט",
        },
        fontWeight: {
          type: "radio",
          options: [
            { label: "רגיל", value: "400" },
            { label: "בינוני", value: "500" },
            { label: "כבד", value: "700" },
          ],
          value: "400",
          label: "עובי פונט",
        },
        fontSize: {
          type: "number",
          value: 16,
          label: "גודל פונט",
        },
        textTransform: {
          type: "radio",
          options: [
            { label: "אותיות גדולות", value: "uppercase" },
            { label: "אות גדולה בתחילת מילה", value: "capitalize" },
            { label: "רק קטנות", value: "lowercase" },
          ],
          value: "capitalize",
          label: "עיצוב אותיות",
        },
        paddingTop: {
          type: "number",
          value: "20",
          label: "ריפוד למעלה",
        },
        paddingRight: {
          type: "number",
          value: "20",
          label: "ריפוד לימין",
        },
        paddingBottom: {
          type: "number",
          value: "20",
          label: "ריפוד למטה",
        },
        paddingLeft: {
          type: "number",
          value: "20",
          label: "ריפוד לשמאל",
        },
        marginTop: {
          type: "number",
          value: "20",
          label: "שוליים למעלה",
        },
        marginRight: {
          type: "text",
          value: "20",
          label: "שוליים לימין",
        },
        marginBottom: {
          type: "number",
          value: "20",
          label: "שוליים למטה",
        },
        marginLeft: {
          type: "number",
          value: "20",
          label: "שוליים לשמאל",
        },
        columns: {
          type: "number",
          value: 2,
          label: "מספר עמודות",
        },
        buttons: {
          type: "array",
          arrayFields: {
            text: {
              type: "text",
              value: "Button",
              label: "מלל כפתור",
            },
            link: {
              type: "text",
              value: "#",
              label: "קישור כפתור",
            },
          },
          defaultItemProps: {
            text: "Button",
            link: "#",
          },
          value: [
            { text: "BIKINI", link: "/bikini" },
            { text: "ONE PIECE", link: "/one-piece" },
          ],
          label: "כפתורים",
        },
      },
      render: function ButtonList({
        title,
        sectionBackgroundColor,
        buttonBackgroundColor,
        buttonTextColor,
        fontFamily,
        fontWeight,
        fontSize,
        textTransform,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        columns,
        buttons = [],
      }) {
        const sectionStyle = {
          backgroundColor: sectionBackgroundColor,
          paddingTop: ensurePixelValue(paddingTop),
          paddingRight: ensurePixelValue(paddingRight),
          paddingBottom: ensurePixelValue(paddingBottom),
          paddingLeft: ensurePixelValue(paddingLeft),
          marginTop: ensurePixelValue(marginTop),
          marginRight: ensurePixelValue(marginRight),
          marginBottom: ensurePixelValue(marginBottom),
          marginLeft: ensurePixelValue(marginLeft),
          textAlign: "center",
          fontFamily: fontFamily,
        };
    
        const buttonStyle = {
          backgroundColor: buttonBackgroundColor,
          color: buttonTextColor,
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          textDecoration: "none",
          display: "inline-block",
          margin: "10px",
          width: `${100 / columns - 5}%`,
          textAlign: "center",
          textTransform: textTransform,
          fontWeight: fontWeight,
          fontSize: `${fontSize}px`,
        };
    
        const titleStyle = {
          textTransform: textTransform,
          fontWeight: fontWeight,
          fontSize: `${fontSize + 4}px`,
        };
    
        return (
          <section style={sectionStyle}>
            <h2 style={titleStyle}>{title}</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.link}
                  style={buttonStyle}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {button.text}
                </a>
              ))}
            </div>
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
      label: "תוכן",
    },
    class: {
      type: "text",
      value: "",
      label: "שם מחלקה",
    },
    id: {
      type: "text",
      value: "",
      label: "ID",
    },
    topMargin: {
      type: "text",
      value: "0",
      label: "שוליים למעלה",
    },
    bottomMargin: {
      type: "text",
      value: "0",
      label: "שוליים למטה",
    },
    displayOn: {
      type: "radio",
      options: [
        { label: "מובייל + טאבלט", value: "mobile-tablet" },
        { label: "מחשב", value: "desktop" },
        { label: "בכל הגדלים", value: "all" },
      ],
      value: "all",
      label: "הצג ב:",
    },
  },
  render: function CustomHtml({
    Code,
    class: className,
    id,
    topMargin,
    bottomMargin,
    displayOn,
  }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    // עדכון מצב לפי רוחב המסך
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024); // נחשב מובייל וטאבלט עד 1024px
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // בדיקת תנאי תצוגה
    const shouldRender =
      displayOn === "all" ||
      (displayOn === "mobile-tablet" && isMobile) ||
      (displayOn === "desktop" && !isMobile);

    if (!shouldRender) return null;

    return (
      <div
        className={`custom-html ${className}`}
        id={id}
        style={{
          marginTop: `${topMargin}px`,
          marginBottom: `${bottomMargin}px`,
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
    displayOn: {
      type: "radio",
      options: [
        { label: "מובייל + טאבלט", value: "mobile-tablet" },
        { label: "מחשב", value: "desktop" },
        { label: "כולם", value: "all" },
      ],
      value: "all",
      label: "הצג ב:",
    },
  },
  render: function Product({
    title = "מוצרים נבחרים",
    numberOfProducts = 5,
    showDescription = true,
    showPrice = true,
    displayOn = "all",
  }) {
    const [products, setProducts] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    // עדכון מצב לפי רוחב המסך
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024); // מובייל וטאבלט עד 1024px
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      if (typeof window.store_id === "undefined") {
        console.error("store_id is not defined");
        return;
      }

      fetch(
        `https://quick-shop.co.il/api/get_products_categories.php?type=products&store_id=${window.store_id}`
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
    }, [numberOfProducts]);

    // לוגיקה לתנאי תצוגה
    const shouldRender =
      displayOn === "all" ||
      (displayOn === "mobile-tablet" && isMobile) ||
      (displayOn === "desktop" && !isMobile);

    if (!shouldRender) return null;

    return (
      <section className="product-section">
        <h2>{title}</h2>
        <div className="product-list">
          {products.map((product) => {
            // הגדרת כתובת URL לתמונה
            const productImageUrl =
              product.product_image && product.product_image !== "noimage.svg"
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


RowBuilder: {
  fields: {
    backgroundColor: {
      type: "text",
      value: "#ffffff",
      label: "צבע רקע",
    },
    minHeight: {
      type: "number",
      value: 50,
      label: "גובה מינימלי (בפיקסלים)",
    },
    padding: {
      type: "object",
      objectFields: {
        top: { type: "number", value: 10, label: "ריפוד למעלה" },
        right: { type: "number", value: 10, label: "ריפוד לימין" },
        bottom: { type: "number", value: 10, label: "ריפוד למטה" },
        left: { type: "number", value: 10, label: "ריפוד לשמאל" },
      },
      label: "ריפוד",
    },
    margin: {
      type: "object",
      objectFields: {
        top: { type: "number", value: 10, label: "שוליים למעלה" },
        right: { type: "number", value: 10, label: "שוליים לימין" },
        bottom: { type: "number", value: 10, label: "שוליים למטה" },
        left: { type: "number", value: 10, label: "שוליים לשמאל" },
      },
      label: "שוליים",
    },
    class: {
      type: "text",
      value: "",
      label: "שם מחלקה",
    },
    id: {
      type: "text",
      value: "",
      label: "ID",
    },
    columns: {
      type: "array",
      value: [],
      arrayFields: {
        content: {
          type: "array",
          value: [],
          arrayFields: {
            type: {
              type: "select",
              options: [
                { label: "תמונה", value: "image" },
                { label: "טקסט", value: "text" },
                { label: "כפתור", value: "button" },
              ],
              value: "text",
              label: "סוג התוכן",
            },
            settings: {
              type: "object",
              value: {},
              objectFields: {
                desktopImage: { type: "text", label: "תמונה למחשב", value: "" },
                mobileImage: { type: "text", label: "תמונה למובייל", value: "" },
                alt: { type: "text", label: "אלט לתמונה", value: "" },
                text: { type: "textarea", label: "טקסט", value: "" },
                link: { type: "text", label: "קישור לכפתור", value: "#" },
                backgroundColor: { type: "text", label: "צבע רקע", value: "" },
                fontSize: { type: "number", label: "גודל פונט", value: 16 },
                textColor: { type: "text", label: "צבע טקסט", value: "#000000" },
                fontWeight: { type: "text", label: "עובי פונט", value: "normal" },
                padding: {
                  type: "object",
                  value: {},
                  objectFields: {
                    top: { type: "number", value: 5, label: "ריפוד למעלה" },
                    right: { type: "number", value: 5, label: "ריפוד לימין" },
                    bottom: { type: "number", value: 5, label: "ריפוד למטה" },
                    left: { type: "number", value: 5, label: "ריפוד לשמאל" },
                  },
                  label: "ריפוד",
                },
              },
              label: "הגדרות תוכן",
            },
          },
          label: "תוכן",
        },
      },
      label: "עמודות",
    },
  },
  render: function RowBuilder({
    backgroundColor = "#ffffff",
    minHeight = 50,
    padding = { top: 10, right: 10, bottom: 10, left: 10 },
    margin = { top: 10, right: 10, bottom: 10, left: 10 },
    class: className = "",
    id = "",
    columns = [],
  }) {
    const sectionStyle = {
      backgroundColor,
      minHeight: `${minHeight}px`,
      padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`,
      margin: `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`,
    };

    return (
      <section className={`row-builder ${className}`} id={id} style={sectionStyle}>
        <div className="row-builder__columns" style={{ display: "flex", gap: "10px" }}>
          {(columns || []).map((column, colIndex) => (
            <div key={colIndex} className="row-builder__column" style={{ flex: 1 }}>
              {(column.content || []).map((item, itemIndex) => {
                if (item.type === "image") {
                  return (
                    <img
                      key={itemIndex}
                      src={item.settings?.desktopImage || ""}
                      alt={item.settings?.alt || ""}
                      style={{
                        width: "100%",
                        height: "auto",
                        ...item.settings?.padding,
                      }}
                    />
                  );
                }
                if (item.type === "text") {
                  return (
                    <p
                      key={itemIndex}
                      style={{
                        fontSize: `${item.settings?.fontSize}px`,
                        color: item.settings?.textColor,
                        fontWeight: item.settings?.fontWeight,
                        ...item.settings?.padding,
                      }}
                    >
                      {item.settings?.text || ""}
                    </p>
                  );
                }
                if (item.type === "button") {
                  return (
                    <a
                      key={itemIndex}
                      href={item.settings?.link || "#"}
                      style={{
                        display: "inline-block",
                        padding: "10px 20px",
                        backgroundColor: item.settings?.backgroundColor,
                        color: item.settings?.textColor,
                        fontSize: `${item.settings?.fontSize}px`,
                        fontWeight: item.settings?.fontWeight,
                        textDecoration: "none",
                        ...item.settings?.padding,
                      }}
                    >
                      {item.settings?.text || ""}
                    </a>
                  );
                }
                return null;
              })}
            </div>
          ))}
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
  const store_id = 123;

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
