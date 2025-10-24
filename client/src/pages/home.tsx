import { Shield, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import bannerImg from "@assets/banner-squad777.jpg";
import logoImg from "@assets/logo_panjang_squad777_metallogo_panjang squad777_metal.png";

export default function Home() {
  // Add JSON-LD Structured Data for SEO
  useEffect(() => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "SQUAD77",
      alternateName: "SQUAD777",
      url: "https://agensquad777.cfd/",
      logo: "https://agensquad777.cfd/attached_assets/logo_panjang squad777_metal.png",
      description:
        "SQUAD77 adalah situs gaming terbaik di alam semesta dengan garansi kekalahan 100%. Bonus 100% untuk member baru.",
      sameAs: [
        "https://www.facebook.com/squad77",
        "https://www.instagram.com/squad77",
        "https://twitter.com/squad77",
      ],
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "SQUAD77",
      url: "https://agensquad777.cfd/",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://agensquad777.cfd/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      inLanguage: "id-ID",
    };

    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.text = JSON.stringify(websiteSchema);
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Logo - Centered on Mobile, Top Left on Desktop */}
      <header className="absolute top-4 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 md:top-8 z-20">
        <div className="relative inline-block">
          <img
            src={logoImg}
            alt="SQUAD77 Logo"
            className="h-10 md:h-16 w-auto drop-shadow-2xl relative"
            style={{
              filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))",
            }}
          />
          <div
            className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none z-20 mix-blend-overlay"
            style={{ backgroundSize: "200% 100%" }}
          />
        </div>
      </header>

      {/* Main Content - Centered Hero Section */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 md:px-8 py-20">
        <div className="mx-auto max-w-6xl text-center space-y-8 md:space-y-12">
          {/* Banner Image Above Title */}
          <div className="w-full max-w-4xl mx-auto">
            <img
              src={bannerImg}
              alt="Squad77 Gaming Banner"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>

          {/* CTA Buttons Below Banner */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground font-accent text-lg md:text-xl font-bold shadow-gold-lg animate-pulse-glow uppercase tracking-wider px-8 md:px-12"
              data-testid="button-daftar-sekarang"
              aria-label="Daftar sekarang dan dapatkan bonus"
              onClick={() =>
                window.open("https://sqone.vip/SQUAD777", "_blank")
              }
            >
              DAFTAR SQUAD777
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur-lg bg-primary/40 border-2 border-primary text-foreground font-accent text-xl md:text-xl font-bold uppercase tracking-wider px-8 md:px-12 hover:bg-primary/40"
              data-testid="button-info-promo"
              aria-label="Lihat info promo terbaru"
              onClick={() =>
                window.open("https://direct.lc.chat/19207948/", "_blank")
              }
            >
              SQUAD77 PROMO
            </Button>
          </div>

          {/* Hero Headline */}
          <div className="space-y-4 md:space-y-6">
            <h1
              className="font-display text-3xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight tracking-tight"
              data-testid="text-hero-title"
            >
              SQUAD<span className="text-primary">77</span> GARANSI KEKALAHAN{" "}
              <span className="text-primary">100%</span>
            </h1>
            <p
              className="font-display text-xl md:text-2xl font-semibold text-muted-foreground"
              data-testid="text-hero-tagline"
            >
              SITUS PARA SQUAD TERBAIK DI ALAM SEMESTA
            </p>
          </div>

          {/* CTA Button with Glow Effect */}
          <div className="pt-4 md:pt-8">
            <p
              className="mt-4 text-sm md:text-base text-muted-foreground text-justify max-w-lg mx-auto"
              data-testid="text-cta-subtitle"
            >
              Hari gini masih takut kalah dari permainan? Mending lo daftar di
              <a href="/">Squad777</a> nih, dan kalo lo sampe kalah masih bisa
              klaim garansi kekalahan 100%! Tapi promonya bukan cuma itu aja
              loh, masih banyak promo lainnya!
            </p>
          </div>

          {/* Trust Badges - 3 Pills */}
          <div
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            data-testid="container-trust-badges"
          >
            <Badge
              className="backdrop-blur-lg bg-white/10 border-white/20 text-foreground px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-accent font-semibold"
              data-testid="badge-trusted"
            >
              AMAN & TERPERCAYA
            </Badge>
            <Badge
              className="backdrop-blur-lg bg-white/10 border-white/20 text-foreground px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-accent font-semibold"
              data-testid="badge-guarantee"
            >
              GARANSI KEKALAHAN
            </Badge>
            <Badge
              className="backdrop-blur-lg bg-white/10 border-white/20 text-foreground px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-accent font-semibold"
              data-testid="badge-bonus"
            >
              BONUS NEW MEMBER 100%
            </Badge>
          </div>

          {/* Feature Cards - 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-8 md:pt-16">
            {/* Feature Card 1 */}
            <div
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl hover-elevate"
              data-testid="card-feature-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="font-accent text-lg md:text-xl font-bold text-foreground">
                  MEGA JEKPOT HARIAN SQUAD777
                </h3>
                <p className="text-justify text-sm md:text-base text-muted-foreground">
                  Jekpot hingga ratusan juta keluar setiap harinya terhitung
                  tiap 2 menit. Jangan sampai ketinggalan!
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl hover-elevate"
              data-testid="card-feature-2"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="font-accent text-lg md:text-xl font-bold text-foreground">
                  SQUAD77 100% AMAN & AMANAH
                </h3>
                <p className="text-justify text-sm md:text-base text-muted-foreground">
                  Sistem keamanan tingkat tinggi untuk data pribadi member untuk
                  website Squad777 dengan enkripsi SSL. Juga keamanan data akun
                  bank unuk proteksi keamanan data member
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl hover-elevate"
              data-testid="card-feature-3"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="font-accent text-lg md:text-xl font-bold text-foreground">
                  TRANSAKSI DEPO WD SAT SET
                </h3>
                <p className="text-justify text-sm md:text-base text-muted-foreground">
                  Depo dan WD instant 24 jam nonstop bersistem otomatis tanpa
                  batas kecuali ketia maintenance. Jika terdapat keterlambatan
                  bisa cek langsung melalui customer service kami di livechat
                  squad777 online 24 jam nonstop tiap hari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 border-t border-white/10 backdrop-blur-lg bg-white/5 mt-16">
        <div className="items-center justify-items-center grid grid-cols-1 md:grid-cols-3 gap-8 mb-9">
          <div className="w-full border-t border-white/10 pt-1 flex text-center">
            <p className="text-sm mb-4 pt-2 text-muted-foreground">
              {" "}
              © 2025 SQUAD77. All Rights Reserved. | 18+ | Main Bertanggung
              Jawab
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
