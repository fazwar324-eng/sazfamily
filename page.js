
export default function Home() {
  const socials = [
    { name: "TikTok", link: "https://tiktok.com/@sazfamily" },
    { name: "Instagram", link: "https://instagram.com/sazfamily" },
    { name: "YouTube", link: "https://youtube.com/@sazfamily" },
    { name: "WhatsApp", link: "https://wa.me/628000000000" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <audio autoPlay loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          background: "rgba(0,0,0,0.7)",
          borderRadius: "30px",
          padding: "20px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src="/profile.png"
            style={{
              width: "130px",
              height: "130px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #f5c76d",
            }}
          />

          <h1 style={{ fontSize: "42px", marginTop: "15px" }}>
            SazFamily
          </h1>

          <p style={{ color: "#ddd" }}>
            Anime Cinematic • Family Travel • Adventure
          </p>
        </div>

        <div style={{ marginTop: "30px" }}>
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              style={{
                display: "block",
                padding: "20px",
                marginBottom: "15px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "20px",
                color: "white",
                textDecoration: "none",
                fontSize: "22px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div
          style={{
            marginTop: "30px",
            background: "#f5c76d",
            color: "black",
            padding: "20px",
            borderRadius: "20px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Business & Collaboration
        </div>
      </div>
    </main>
  );
}
