import { Flag, Ship, Landmark, Users, Heart, Sparkles } from "lucide-react";

const base = import.meta.env.BASE_URL;

export const bannerImages = [
  `${base}boi-canh-lich-su.png`,
  `${base}nguyen-ai-quoc-ra-di.png`,
  `${base}tiep-can-mac-lenin.png`,
  `${base}thanh-lap-dang.png`,
  `${base}y-nghia-lich-su.png`,
];

export const introSlides = [
  {
    image: bannerImages[0],
    title: "Bối cảnh lịch sử",
    text: "Cuối thế kỷ XIX đầu thế kỷ XX, Việt Nam lâm vào khủng hoảng về đường lối cứu nước. Nhiều phong trào yêu nước diễn ra mạnh mẽ nhưng đều chưa tìm được con đường giải phóng dân tộc đúng đắn.",
  },
  {
    image: bannerImages[1],
    title: "Nguyễn Ái Quốc tìm đường cứu nước",
    text: "Ngày 5/6/1911, Nguyễn Ái Quốc ra đi tìm đường cứu nước, mở đầu hành trình khảo nghiệm thực tiễn cách mạng thế giới để tìm con đường giải phóng dân tộc Việt Nam.",
  },
  {
    image: bannerImages[2],
    title: "Tiếp cận chủ nghĩa Mác - Lênin",
    text: "Năm 1920, Nguyễn Ái Quốc tiếp cận Luận cương của Lênin về vấn đề dân tộc và thuộc địa, từ đó xác định con đường cách mạng vô sản là hướng đi đúng cho dân tộc Việt Nam.",
  },
  {
    image: bannerImages[3],
    title: "Thành lập Đảng Cộng sản Việt Nam",
    text: "Đầu năm 1930, tại Hội nghị hợp nhất các tổ chức cộng sản ở Hồng Kông do Nguyễn Ái Quốc chủ trì, Đảng Cộng sản Việt Nam chính thức ra đời.",
  },
  {
    image: bannerImages[4],
    title: "Ý nghĩa lịch sử",
    text: "Sự ra đời của Đảng là bước ngoặt vĩ đại trong lịch sử cách mạng Việt Nam, chấm dứt khủng hoảng về đường lối và khẳng định vai trò lãnh đạo của giai cấp công nhân.",
  },
];

export const concepts = [
  {
    icon: Flag,
    title: "Bối cảnh ra đời",
    text: "Phong trào yêu nước phát triển mạnh nhưng thiếu đường lối đúng đắn và một tổ chức lãnh đạo thống nhất.",
  },
  {
    icon: Users,
    title: "Vai trò Nguyễn Ái Quốc",
    text: "Nguyễn Ái Quốc chuẩn bị về chính trị, tư tưởng và tổ chức cho sự thành lập Đảng Cộng sản Việt Nam.",
  },
  {
    icon: Landmark,
    title: "Hợp nhất các tổ chức cộng sản",
    text: "Ba tổ chức cộng sản được hợp nhất, tạo nên một chính đảng duy nhất lãnh đạo cách mạng Việt Nam.",
  },
  {
    icon: Heart,
    title: "Chấm dứt khủng hoảng đường lối",
    text: "Đảng ra đời đã giải quyết cuộc khủng hoảng về đường lối và giai cấp lãnh đạo cách mạng kéo dài nhiều năm.",
  },
  {
    icon: Ship,
    title: "Mốc son lịch sử",
    text: "Ngày 3/2/1930 trở thành dấu mốc mở ra thời kỳ mới cho cách mạng Việt Nam dưới sự lãnh đạo của Đảng.",
  },
  {
    icon: Sparkles,
    title: "Ý nghĩa lâu dài",
    text: "Sự ra đời của Đảng đặt nền tảng cho những thắng lợi lớn của cách mạng Việt Nam từ 1930 đến nay.",
  },
];
