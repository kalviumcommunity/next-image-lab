import Image from "next/image";

export default function Page() {
  return (
    <main>
      <h1>next/image: three experiments</h1>
      <p>Edit app/page.jsx. Read each task, make one change, then check preview and Network.</p>

      <section>
        <h2>1. Source dimensions and display width</h2>
        <p>Task: change maxWidth from 360px to 240px. Keep the source dimensions at 600 × 400. Does the photo keep its proportions?</p>
        <Image
          src="/pasta.jpg"
          alt="Pasta topped with herbs and tomatoes"
          width={600}
          height={400}
          sizes="(max-width: 600px) 100vw, 360px"
          style={{ width: "100%", maxWidth: "360px", height: "auto" }}
        />
      </section>

      <section>
        <h2>2. Cover, contain and sizes</h2>
        <p>Task: switch cover to contain. Then change sizes to 100vw. Which change affects cropping? Which describes download width?</p>
        <div style={{ position: "relative", width: "300px", maxWidth: "100%", height: "150px", background: "#dce8f4" }}>
          <Image
            src="/pasta.jpg"
            alt="Pasta topped with herbs and tomatoes"
            fill
            sizes="300px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      <section>
        <h2>3. Original versus optimized response</h2>
        <p>Task: compare these requests in DevTools → Network → Img. Check transferred bytes and Content-Type. The optimized URL may contain /_next/image, not end in .webp.</p>
        <div className="comparison">
          <div>
            <h3>Original file</h3>
            <img src="/pasta-original.jpg" alt="Pasta topped with herbs and tomatoes" width="600" height="400" style={{ width: "100%", height: "auto" }} />
          </div>
          <div>
            <h3>Next.js optimizer enabled</h3>
            <Image src="/pasta-original.jpg" alt="Pasta topped with herbs and tomatoes" width={2400} height={1600} sizes="(max-width: 600px) 100vw, 360px" style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
        <p>Extension: add unoptimized to the Image above. Reload with cache disabled. Does the request return to the source URL? Remove it afterwards.</p>
      </section>
    </main>
  );
}
