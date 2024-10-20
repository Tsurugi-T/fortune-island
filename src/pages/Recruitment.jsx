// こちらは、/recruitment 採用活動ページです

import { Button } from "../components/Button";
import { Image } from "../components/Image";
import xIcon from "../icons/x.png";
import { useNavigate } from "react-router-dom";

export default function Recruitment() {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate("/apply");
  };

  return (
    <div className="min-h-screen bg-amber-100 text-foreground">
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Image
              src="https://png.pngtree.com/png-vector/20240416/ourmid/pngtree-gorilla-hand-with-index-finger-pointing-isolated-on-white-background-png-image_12290189.png"
              alt="企業ロゴ"
              width={40}
              height={40}
            />
            <h1 className="text-2xl text-amber-950 font-bold">株式会社ヒト</h1>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-4">
              <li>
                <a
                  href="/"
                  className="bg-card text-card-foreground p-4 rounded-lg shadow-md hover:underline text-amber-950"
                >
                  ホーム
                </a>
              </li>
              <li>
                <a
                  href="/product"
                  className="bg-card text-card-foreground p-4 rounded-lg shadow-md hover:underline text-amber-950"
                >
                  事業内容
                </a>
              </li>
              <li>
                <a
                  href="/company"
                  className="bg-card text-card-foreground p-4 rounded-lg shadow-md hover:underline text-amber-950"
                >
                  会社概要
                </a>
              </li>
              <li>
                <a
                  href="/recruitment"
                  className="bg-card text-card-foreground p-4 rounded-lg shadow-md hover:underline text-amber-950"
                >
                  採用情報
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="bg-card text-card-foreground p-4 rounded-lg shadow-md hover:underline text-amber-950"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto">
          <section className="relative h-[600px]">
            <Image
              src="https://d2dcan0armyq93.cloudfront.net/photo/odai/600/5040f5e657cc9ef30d0016e390ef0706_600.jpg"
              alt="採用イメージ"
              layout="fill"
              width={800}
              height={800}
              objectFit="cover"
              className="brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">加入株式会社ヒト</h2>
                <p className="text-xl mb-8">
                  最先端技術で共に未来を創りましょう
                </p>
                <Button
                  size="lg"
                  className="hover:underline"
                  variant="secondary"
                  onClick={handleApplyNow}
                >
                  今すぐ応募
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">募集職種</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">
                    ソフトウェアエンジニア
                  </h3>
                  <p>
                    AIやクラウドサービスの開発を行うソフトウェアエンジニアを募集しています。
                  </p>
                </div>
                <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">
                    データサイエンティスト
                  </h3>
                  <p>
                    大規模データの解析を行い、新しい価値を創造するデータサイエンティストを募集しています。
                  </p>
                </div>
                <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">
                    プロジェクトマネージャー
                  </h3>
                  <p>
                    複数のプロジェクトを統括し、成功に導くプロジェクトマネージャーを募集しています。
                  </p>
                </div>
                <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">
                    マーケティングスペシャリスト
                  </h3>
                  <p>
                    市場分析と戦略策定を行うマーケティングスペシャリストを募集しています。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-muted py-16">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                弊社の魅力
              </h2>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-xl mb-4">
                  「革新と挑戦の精神で未来を切り開く」
                </p>
                <p className="mb-4">
                  株式会社ヒトでは、常に革新と挑戦の精神を持ち、社員一人ひとりの成長をサポートしています。最先端の技術と創造力を駆使して、未来を共に創りましょう。
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">株式会社ヒト</h3>
            <p>〒851-1315</p>
            <p>長崎県長崎市高島町端島</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  利用規約
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  サイトマップ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">ソーシャルメディア</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/wedinc_official" aria-label="x">
                <Image src={xIcon} alt="x" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 text-center">
          <p>&copy; 2024 株式会社ヒト. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
