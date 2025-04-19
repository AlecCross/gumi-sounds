//app/page.jsx

import sounds from './sounds'
import Sound from './Sound'

export default function Page() {
  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      flexDirection: "column",
      backgroundImage:
        "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKOt5EXtS4NzwyykWgKHuoEx2T9ppm0QTwZL3G9uONmO2SLGRuXPUVAous9ADjMrNzj4&usqp=CAU)"
    }}>
      <h1 style={{
        textAlign: "center",
        color: "white",
        background: "rgba(0,0,50,0.4)",
        marginTop: 10
      }}>🦜GUMI notification sounds🦜</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr)",
        gridAutoRows: "100px",
      }}>
        {Object.entries(sounds).map(([key, value]) =>
          <div style={{
            border: "solid rgba(120,255,70,0.5)",
            margin: 5,
            background: "rgba(0,0,50,0.4)",
            display: "flex",
            alignItems: "baseline",
            flexWrap: "wrap",
            
          }}
            key={key}>
            <Sound sound={value} />
            <span style={{ fontSize: "calc(14px + (26 - 14) * ((3vw - 50px) / (1600 - 300)))", color: "white", marginLeft: "auto", marginRight: "auto"}}>{key}</span>
            <a style={{width: "100%"}} href={value} download><button style={{backgroundColor: "rgba(255,50,50,0.6)", borderRadius: 10, width: "100%"}}>download</button></a>
            
          </div>)}
      </div>
    </div>
  );
}
