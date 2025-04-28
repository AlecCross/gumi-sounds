"use client";

import sounds from './sounds';
import Sound from './Sound';

export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKOt5EXtS4NzwyykWgKHuoEx2T9ppm0QTwZL3G9uONmO2SLGRuXPUVAous9ADjMrNzj4&usqp=CAU)",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "white",
          background: "rgba(0, 0, 50, 0.4)",
          marginTop: 10,
          marginBottom: 20,
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        🦜GUMI notification sounds🦜
      </h1>
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", // Базова сітка для смартфонів (мінімум 120px)
          gridAutoRows: "min-content",
          gap: "10px",
        }}
      >
        {Object.entries(sounds).map(([key, value]) => (
          <div
            style={{
              border: "solid rgba(120, 255, 70, 0.5)",
              margin: 0,
              background: "rgba(0, 0, 50, 0.4)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              borderRadius: "5px",
            }}
            key={key}
          >
            <Sound sound={value} />
            <span
              style={{
                fontSize: "calc(14px + (26 - 14) * ((3vw - 50px) / (1600 - 300)))",
                color: "white",
                marginTop: "5px",
                textAlign: "center",
              }}
            >
              {key}
            </span>
            <a style={{ width: "100%", marginTop: "5px" }} href={value} download>
              <button
                style={{
                  backgroundColor: "rgba(255, 50, 50, 0.6)",
                  borderRadius: 10,
                  width: "100%",
                  padding: "8px",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Download
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
