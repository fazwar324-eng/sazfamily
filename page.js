export default function Home() {
  const socials = [
    {
      name: "TikTok",
      link: "https://tiktok.com/@sazfamily",
    },
    {
      name: "Instagram",
      link: "https://instagram.com/sazfamily",
    },
    {
      name: "YouTube",
      link: "https://youtube.com/@sazfamily",
    },
    {
      name: "WhatsApp",
      link: "https://wa.me/628000000000",
    },
  ];

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b0b0b",
      color: "white",
      fontFamily: "Arial",
      padding: "20px"
    }}>
      <div style={{
        maxWidth: "500px",
        margin: "0 auto"
      }}>
        <div style={{
          background: "#1a1a1a",
          borderRadius: "30px",
          overflow: "hidden",
          border: "1px solid #333"
        }}>
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
            style={{
              width: "100%",
              height: "260px",
              objectFit: "cover"
            }}
          />

          <div style={{padding:"24px"}}>
            <h1 style={{
              fontSize:"42px",
              marginBottom:"10px"
            }}>
              SazFamily
            </h1>

            <p style={{
              color:"#aaa",
              marginBottom:"30px"
            }}>
              Anime Cinematic • Family Travel • Adventure
            </p>

            {socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                style={{
                  display:"block",
                  padding:"20px",
                  marginBottom:"16px",
                  background:"#262626",
                  borderRadius:"20px",
                  color:"white",
                  textDecoration:"none",
                  fontSize:"22px",
                  border:"1px solid #444"
                }}
              >
                {item.name}
              </a>
            ))}

            <div style={{
              marginTop:"30px",
              padding:"20px",
              background:"#f5c76d",
              color:"black",
              borderRadius:"20px",
              fontWeight:"bold"
            }}>
              Business & Collaboration
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
