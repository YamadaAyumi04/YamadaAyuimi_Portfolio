const artworks = {
  // 🇮🇹 イタリア
  "judgment-of-paris": {
    title: "Judgment of Paris",
    artist: "Alessandro Turchi",
    description: "トゥルキはローマで名誉あるキャリアを積み、1637年にサン・ルカ・アカデミーの所長に就任しました。この絵は、彼の歴史的主題の特徴であり、記念碑的な人物がフリーズで表現され、絵の具と光の柔らかなスフマート効果で実行されています。",
    image: "ita_Judgment of Paris.jpg"
  },
  "basket-of-fruit": {
    title: "Basket of Fruit",
    artist: "Bartolomeo Cavarozzi",
    description: "1600年頃のカラヴァッジョの力強い静物画は、おそらくカヴァロッツィにモノクロームの背景に対するこのような大胆な構図を想像するように促したでしょう。カヴァロッツィの主な後援者であるジョヴァンニ・バッティスタ・クレシェンツィは、パンテオンの近くで自然の直接的な研究を提唱するアカデミーを率いていました。これは、ブドウの葉脈にかき集める光や中央の大きなマルメロに虫刺されに見られるように、自然を直接学ぶことを提唱しています。",
    image: "ita_Basket of Fruit.jpg"
  },
  "knight-of-malta": {
    title: "Portrait of a Knight of Malta, Probably Fra Jacopo Salviati",
    artist: "Mirabello Cavalori",
    description: "この肖像画は、古代の権威あるカトリック軍の騎士団のメンバーであるマルタの騎士を描いています。シッターはほぼ間違いなくフィレンツェのフラ・ヤコポ・サルヴィアーティ(1537年生まれ)で、彼は騎士団の最高幹部の一人であるローマ大修道院長の甥であり相続人でした。この作品は、マルタ大包囲戦の翌年である1566年に描かれ、オスマン帝国軍が島とそれを支配する騎士団を征服しようとしたが、撃退された。この芸術家はおそらく、当時の肖像画の形式的な慣習に、より自然さを吹き込もうとしたフィレンツェの芸術家の世代の一人である才能あるミラベッロ・カヴァローリです。素晴らしいフレームは当時のものであり、おそらく写真のオリジナルです。",
    image: "ita_Portrait of a Knight of Malta, Probably Fra Jacopo Salviati.jpg"
  },
  "saint-lucy-scenes": {
    title: "Saint Lucy Scenes",
    artist: "Giovanni di Bartolommeo Cristiani",
    description: "聖ルーシーは、ディオクレティアヌスがキリスト教徒を迫害した最盛期の303年に、信仰を宣言し、貧しい人々に財産を分配したために殉教しました。彼女の人生のこれら4つのシーンには、聖アガサが幻でルーシーに現れ、母親の癒しを予言することが含まれます。彼女の遺産の分配。偶像への犠牲の拒否。そして牛が彼女を売春宿に引きずり込むことができなかったこと。彼女の最後の聖体拝領と殉教を示す別のシーンは個人コレクションに属しており、6番目のシーンは彫刻から知られています。物語のシーンは、もともと聖ルーシーの即位のイメージ（イェール大学アートギャラリー、ニューヘブン）に隣接していた可能性があります。クリスティアーニは主にトスカーナの都市ピストイアで活動しており、これらは彼の最も魅力的な作品の一つです。",
    image: "ita_Saint Lucy and Her Mother at the Shrine of Saint Agatha; Saint Lucy Giving Alms; Saint Lucy before Paschasius; Saint Lucy Resisting Efforts to Move Her.jpg"
  },

  // 🇯🇵 日本
  "segawa-kikunojo": {
    title: "Segawa Kikunojo III as a Woman Standing under a Maple Tree in the Autumn",
    artist: "勝川春章",
    description: "江戸時代（1615–1868）に描かれた紅葉の下に佇む美しい女性姿。1778年頃に制作されたこの作品は、歌舞伎役者・三代目瀬川菊之丞の芝居絵として知られており、華やかな衣装と季節の風情が絶妙に融合しています。",
    image: "jpn_Segawa Kikunojo III as a Woman Standing under a Maple Tree in the Autumn.jpg"
  },
  "twelfth-month": {
    title: "The Twelfth Month",
    artist: "石川豊雅",
    description: "1767年頃に制作されたこの浮世絵は、江戸時代の年中行事を描いたシリーズの一枚で、師走の人々の様子が丁寧に表現されています。季節と社会のつながりを感じさせる素朴な情景が印象的です。",
    image: "jpn_The Twelfth Month.jpg"
  },
  "young-women-shrine": {
    title: "Young Women Visiting a Shinto Shrine",
    artist: "葛飾北斎",
    description: "『初詣』は日本の伝統文化や季節の風情を巧みに描いた作品であり、静謐な筆致が観る者に深い余韻を与えます。1814年、江戸時代後期の傑作として、女性たちの立ち振る舞いと神社の荘厳さが調和した美しい情景です。",
    image: "jpn_Young Women Visiting a Shinto Shrine.jpg"
  },
  "california-port": {
    title: "Sailing from a California Port",
    artist: "歌川貞秀",
    description: "1862年に制作されたこの浮世絵は、アメリカ・カリフォルニアの港から船出する場面を描いた異国風の作品です。江戸時代末期における海外への関心が色濃く出ており、異文化交流の時代背景がうかがえます。",
    image: "jpn_Sailing from a California Port.jpg"
  },

  // 🇺🇸 アメリカ
  "horse-racing-saratoga": {
    title: "Our Watering Places – Horse Racing at Saratoga",
    artist: "After Winslow Homer",
    description: "1865年に『Harper's Weekly』に掲載されたこの作品は、アメリカ北東部の夏の社交場「サラトガ競馬場」を活気とともに描いた新聞画です。観客や競馬場の風景が生き生きと表現され、19世紀の娯楽文化を感じさせる一枚です。",
    image: "ame_Our Watering Places – Horse Racing at Saratoga.jpg"
  },
  "capitol-illinois": {
    title: "Capitol of Illinois in Springfield",
    artist: "Allen & Ginter",
    description: "1889年にタバコカードのシリーズとして制作されたこの作品は、イリノイ州スプリングフィールドの州議事堂をリトグラフで精緻に描いています。建築美と歴史的背景を兼ね備えた魅力あるカードです。",
    image: "ame_Capitol of Illinois in Springfield, from the General Government and State Capitol Buildings series (N14) for Allen & Ginter Cigarettes Brands.jpg"
  },
  "ethel-barrymore": {
    title: "Ethel Barrymore",
    artist: "Frederick Moladore Spiegle",
    description: "1900年頃に制作されたこの作品は、アメリカの女優エセル・バリモアを描いた肖像画で、アメリカン・タバコ社が販売促進のために発行したカードシリーズの一部です。エレガントなポーズと細やかな表現により、彼女の舞台上の存在感と文化的影響力が伝わります。",
    image: "ame_Ethel Barrymore, from the Actresses series (T1), distributed by the American Tobacco Co. to promote Turkish Trophies Cigarettes.jpg"
  },
  "american-express": {
    title: "Turn Out of the Employees of the American Express Company",
    artist: "Otto Botticher",
    description: "1858年のニューヨークで撮影されたこのリトグラフは、アメリカン・エクスプレス社の従業員たちが街角に集合する様子を描いています。当時の都市風景と労働文化を記録した貴重な作品であり、帽子や服装、建築物から時代背景が鮮やかに浮かび上がります。",
    image: "ame_Turn Out of the Employees of the American Express Company, Corner of Hudson, Jay & Staple Streets, New York City on June 21, 1858.jpg"
  },

  // 🇪🇬 エジプト
  "desert-hunting-scene": {
    title: "Desert Hunting Scene",
    artist: "Hugh R. Hopgood",
    description: "この作品は1914〜1916年に描かれた複製画で、オリジナルは紀元前1427〜1400年の新王国時代アメンホテプ2世統治期に属しています。王が砂漠で狩りをする壮大な場面が再現されており、力強い動物描写と王権の象徴的表現が印象的です。",
    image: "egy_Desert Hunting Scene.jpg"
  },
  "festival-scene": {
    title: "Festival Scene, Tomb of Amenmose",
    artist: "Charles K. Wilkinson",
    description: "この祝祭の場面は、ラメセス朝（紀元前1295〜1213年）に属するアメンモセの墓からのものです。参列者たちが神聖な儀式に参加する様子が壁画として保存されており、色彩豊かで調和のとれた古代美術が見事に表現されています。",
    image: "egy_Festival Scene, Tomb of Amenmose.jpg"
  },
  "funeral-boat-haremhab": {
    title: "Funeral Boat, Tomb of Haremhab",
    artist: "Norman de Garis Davies",
    description: "この複製絵は、アメンの神の書記官ハーレムハブの墓に描かれた葬儀の場面を再現しています。神オシリスの聖なる姉妹であるイシスとネフティスが、故人を守るために花輪で覆われた天蓋の両側に描かれています。女性が天蓋の前にひざまずき、喪のしぐさで手を上げています。この儀式はネクロポリスへ故人を運ぶ葬送の船で行われます。",
    image: "egy_Funeral Boat, Tomb of Haremhab.jpg"
  },
  "banquet-scene": {
    title: "Women at a Banquet",
    artist: "Nina de Garis Davies",
    description: "この宴会の場面には、女性客が小さなフラスコから液体を注いでいる様子が描かれています。ひとりの少女は観客に背を向けた珍しいポーズをとり、社交的な飲酒が古代の祝祭の中心的要素だったことを示しています。神や死者との交信のために酩酊が重要視され、一部には薬草入りの酒も提供されたと考えられます。壁の碑文には「幸せな一日を作れ！」との言葉が刻まれています。",
    image: "egy_Women at a Banquet.jpg"
  }
};