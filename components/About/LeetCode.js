import Link from 'next/link';
import Image from 'next/image';


export default function LeetcodeCard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "10px",
        padding: "0 1rem",
      }}
    >
      <Link
        href="https://leetcode.com/Divyang_Pandoh02/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", width: "100%", maxWidth: "700px" }}
      >
        <div
          style={{
            position: 'relative',
            width: "100%",
            aspectRatio: "3 / 2", // Keeps it proportional
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          className="tech-icons leetcode-card"
        >
          <Image
            src="https://leetcard.jacoblin.cool/Divyang_Pandoh02?theme=unicorn&font=Alegreya&ext=heatmap"
            alt="Leetcode Stats"
            priority={true}
            fill
            style={{
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </Link>
    </div>
  );
}
